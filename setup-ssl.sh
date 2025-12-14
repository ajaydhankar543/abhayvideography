#!/bin/bash

# SSL Setup Script for AWS EC2 with Cloudflare
# This will install SSL certificate using Let's Encrypt

echo "=========================================="
echo "SSL Certificate Setup with Let's Encrypt"
echo "=========================================="
echo ""

if [ -z "$1" ]; then
    echo "Usage: ./setup-ssl.sh <your-domain.com>"
    echo ""
    echo "Example: ./setup-ssl.sh example.com"
    echo ""
    echo "Make sure:"
    echo "  1. Your domain is pointed to Cloudflare"
    echo "  2. Cloudflare DNS points to your EC2 IP"
    echo "  3. Set Cloudflare SSL/TLS to 'Full' mode"
    exit 1
fi

DOMAIN="$1"
echo "🌐 Domain: $DOMAIN"
echo ""

cat << 'EOF'
This script will:
1. Install Certbot
2. Obtain SSL certificate from Let's Encrypt
3. Update nginx configuration for HTTPS
4. Setup automatic certificate renewal

Press Enter to continue or Ctrl+C to cancel...
EOF

read

echo "📦 Installing Certbot..."
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx

echo ""
echo "🔐 Obtaining SSL certificate..."
echo "Note: This will temporarily stop nginx"

# Stop nginx container
docker stop abhayvideography-nginx

# Get certificate
sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN \
    --non-interactive --agree-tos \
    --email admin@$DOMAIN \
    --preferred-challenges http

if [ $? -eq 0 ]; then
    echo "✅ SSL certificate obtained successfully!"
else
    echo "❌ Failed to obtain SSL certificate"
    docker start abhayvideography-nginx
    exit 1
fi

echo ""
echo "📝 Creating new nginx configuration with SSL..."

# Create SSL nginx config
cat > ~/abhayvideography/nginx-ssl.conf << NGINXCONF
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '\$remote_addr - \$remote_user [\$time_local] "\$request" '
                    '\$status \$body_bytes_sent "\$http_referer" '
                    '"\$http_user_agent" "\$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 20M;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    upstream backend {
        server backend:3000;
    }

    upstream frontend {
        server frontend:80;
    }

    # Redirect HTTP to HTTPS
    server {
        listen 80;
        server_name $DOMAIN www.$DOMAIN;
        return 301 https://\$server_name\$request_uri;
    }

    # HTTPS Server
    server {
        listen 443 ssl http2;
        server_name $DOMAIN www.$DOMAIN;

        ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
        
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        
        # Security headers
        add_header Strict-Transport-Security "max-age=31536000" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;

        location /api {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
            proxy_cache_bypass \$http_upgrade;
        }

        location / {
            proxy_pass http://frontend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
            proxy_cache_bypass \$http_upgrade;
        }
    }
}
NGINXCONF

echo ""
echo "📝 Updating docker-compose.yml for SSL..."

# Update docker-compose to include SSL certificates
cat > ~/abhayvideography/docker-compose.yml << 'COMPOSEEOF'
services:
  backend:
    image: abhaypratapsingh7704866570/abhayvideography-backend:latest
    container_name: abhayvideography-backend
    environment:
      - NODE_ENV=production
    networks:
      - app-network
    restart: unless-stopped
    expose:
      - "3000"

  frontend:
    image: abhaypratapsingh7704866570/abhayvideography-frontend:latest
    container_name: abhayvideography-frontend
    networks:
      - app-network
    restart: unless-stopped
    expose:
      - "80"

  nginx:
    image: nginx:alpine
    container_name: abhayvideography-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx-ssl.conf:/etc/nginx/nginx.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro
    depends_on:
      - backend
      - frontend
    networks:
      - app-network
    restart: unless-stopped

networks:
  app-network:
    driver: bridge
COMPOSEEOF

echo ""
echo "🚀 Restarting containers with SSL..."
cd ~/abhayvideography
docker-compose down
docker-compose up -d

echo ""
echo "✅ SSL Setup Complete!"
echo ""
echo "=========================================="
echo "Important: Cloudflare Configuration"
echo "=========================================="
echo ""
echo "1. Go to Cloudflare Dashboard → SSL/TLS"
echo "2. Set encryption mode to: Full (strict)"
echo "3. Enable 'Always Use HTTPS'"
echo ""
echo "Your site should now work with HTTPS!"
echo "https://$DOMAIN"
echo ""
echo "=========================================="
echo "Auto-Renewal"
echo "=========================================="
echo "Setting up automatic certificate renewal..."

# Setup cron job for renewal
(crontab -l 2>/dev/null; echo "0 0 * * * certbot renew --quiet && docker-compose -f ~/abhayvideography/docker-compose.yml restart nginx") | crontab -

echo "✅ Auto-renewal configured (checks daily)"
echo ""
EOF
