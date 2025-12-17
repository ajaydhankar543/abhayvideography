# 🎬 Abhay Videography - Complete Project Documentation

> **A comprehensive guide to understand every aspect of this Full-Stack Web Application**

---

## 📑 Table of Contents

| Section | Description |
|---------|-------------|
| [🎯 Project Overview](#-project-overview) | What this project is about |
| [🏗️ Architecture](#️-architecture) | How the project is structured |
| [🛠️ Technologies Used](#️-technologies-used) | All tools and frameworks |
| [📁 File Structure](#-file-structure-explained) | Every file explained |
| [⚙️ Frontend Deep Dive](#️-frontend-deep-dive) | JavaScript & CSS explained |
| [🖥️ Backend Deep Dive](#️-backend-deep-dive) | Node.js & Express explained |
| [🐳 Docker Explained](#-docker-explained) | Containerization concepts |
| [🌐 Nginx Explained](#-nginx-explained) | Reverse proxy & load balancing |
| [📝 All Commands](#-all-commands-explained) | Every command you need |
| [🎓 Learning Resources](#-learning-resources) | Where to learn more |

---

## 🎯 Project Overview

### What Is This Project?

This is a **professional videography portfolio website** for **Abhay Videography Studio**. It's a **full-stack web application** that showcases:

- 💍 Wedding cinematography services
- 🎉 Event coverage capabilities
- 📞 Contact information
- 💼 Portfolio of work

### What is Full-Stack?

```
┌─────────────────────────────────────────────────────────────────┐
│                        FULL-STACK APP                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│   │  FRONTEND   │◄───│   NGINX     │───►│   BACKEND   │        │
│   │  (What you  │    │ (Traffic    │    │  (Handles   │        │
│   │   see)      │    │  Manager)   │    │   data)     │        │
│   └─────────────┘    └─────────────┘    └─────────────┘        │
│        ▲                                       │                │
│        │         User's Browser                │                │
│        └───────────────────────────────────────┘                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Architecture

### The Three-Tier Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                           DOCKER                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    docker-compose.yml                         │  │
│  │                                                               │  │
│  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │  │
│  │   │  FRONTEND   │  │   NGINX     │  │      BACKEND        │  │  │
│  │   │ Container   │  │ Container   │  │    Container        │  │  │
│  │   │             │  │             │  │                     │  │  │
│  │   │ - Vite      │  │ - Reverse   │  │ - Express.js        │  │  │
│  │   │ - Tailwind  │  │   Proxy     │  │ - REST API          │  │  │
│  │   │ - HTML/CSS  │  │ - Load      │  │ - CORS              │  │  │
│  │   │ - JS        │  │   Balancer  │  │                     │  │  │
│  │   │             │  │             │  │                     │  │  │
│  │   │ Port: 80    │  │ Port: 8080  │  │ Port: 3000          │  │  │
│  │   └─────────────┘  └─────────────┘  └─────────────────────┘  │  │
│  │         │                │                    │               │  │
│  │         └────────────────┼────────────────────┘               │  │
│  │                          │                                    │  │
│  │                   app-network                                 │  │
│  │              (Docker Bridge Network)                          │  │
│  └──────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technologies Used

### Frontend Technologies

| Technology | Version | Purpose | Why We Use It |
|------------|---------|---------|---------------|
| **Vite** | 7.2.4 | Build Tool | ⚡ Super fast development server & bundler |
| **Tailwind CSS** | 4.1.18 | CSS Framework | 🎨 Utility-first CSS for rapid styling |
| **PostCSS** | 8.5.6 | CSS Processor | 🔧 Transforms CSS with plugins |
| **Autoprefixer** | 10.4.22 | CSS Plugin | 🌐 Adds browser prefixes automatically |

### Backend Technologies

| Technology | Version | Purpose | Why We Use It |
|------------|---------|---------|---------------|
| **Node.js** | 20 | Runtime | 🟢 JavaScript on the server |
| **Express.js** | 5.2.1 | Web Framework | 🚀 Fast, minimalist web framework |
| **CORS** | 2.8.5 | Middleware | 🔒 Cross-Origin Resource Sharing |

### DevOps Technologies

| Technology | Purpose | Why We Use It |
|------------|---------|---------------|
| **Docker** | Containerization | 📦 Package app with all dependencies |
| **Docker Compose** | Multi-container | 🎼 Orchestrate multiple containers |
| **Nginx** | Web Server | 🌐 Reverse proxy & static file serving |

---

## 📁 File Structure Explained

```
abhayvideography/
│
├── 📄 package.json              # Root project configuration
├── 📄 docker-compose.yml        # Docker orchestration (development)
├── 📄 docker-compose.prod.yml   # Docker orchestration (production)
│
├── 📁 frontend/                 # 🎨 FRONTEND APPLICATION
│   ├── 📄 package.json          # Frontend dependencies
│   ├── 📄 index.html            # Entry HTML file
│   ├── 📄 vite.config.js        # Vite configuration
│   ├── 📄 postcss.config.js     # PostCSS configuration
│   ├── 📄 Dockerfile            # Frontend container build
│   ├── 📄 nginx.conf            # Nginx config for frontend
│   │
│   ├── 📁 public/               # Static assets (images, icons)
│   │
│   └── 📁 src/                  # Source code
│       ├── 📄 main.js           # ⭐ Main JavaScript application
│       └── 📄 style.css         # ⭐ All CSS styles
│
├── 📁 backend/                  # 🖥️ BACKEND APPLICATION
│   ├── 📄 package.json          # Backend dependencies
│   ├── 📄 server.js             # ⭐ Express server
│   └── 📄 Dockerfile            # Backend container build
│
└── 📁 nginx/                    # 🌐 NGINX REVERSE PROXY
    ├── 📄 Dockerfile            # Nginx container build
    └── 📄 nginx.conf            # Main Nginx configuration
```

---

## ⚙️ Frontend Deep Dive

### 📄 File: `frontend/src/main.js`

This is the **brain of your website**. Let's break down every section:

---

### 🔹 1. Importing Styles

```javascript
import './style.css'
```

**What it does:** 
- Imports all CSS styles from `style.css`
- Vite bundles this with the JavaScript

**Technical Term:** `ES6 Module Import` - Modern JavaScript way to include files

---

### 🔹 2. State Management

```javascript
let currentPage = 'home'
```

**What it does:**
- Stores which page is currently active
- `let` means this value can change

**Technical Term:** `State` - Data that determines what the UI shows

```
┌─────────────────────────────────────────┐
│             STATE FLOW                   │
├─────────────────────────────────────────┤
│                                         │
│   currentPage = 'home'                  │
│         │                               │
│         ▼                               │
│   ┌─────────────┐                       │
│   │ User clicks │                       │
│   │ "Portfolio" │                       │
│   └──────┬──────┘                       │
│          │                              │
│          ▼                              │
│   currentPage = 'frontend'              │
│          │                              │
│          ▼                              │
│   ┌──────────────────┐                  │
│   │ UI Updates to    │                  │
│   │ show Portfolio   │                  │
│   └──────────────────┘                  │
│                                         │
└─────────────────────────────────────────┘
```

---

### 🔹 3. Helper Functions

#### `createNavButton()` Function

```javascript
function createNavButton(id, emoji, label, page) {
  const isActive = currentPage === page
  const activeClass = isActive ? getButtonActiveClass(page) : 'hover:bg-white/5'
  const glowHTML = isActive ? `<div class="nav-button-glow ${page}"></div>` : ''
  
  return `
    <button id="${id}" class="nav-button ${activeClass}">
      <span class="nav-button-content">
        <span class="nav-button-emoji">${emoji}</span>
        <span>${label}</span>
      </span>
      ${glowHTML}
    </button>
  `
}
```

**Line-by-line explanation:**

| Line | Code | Explanation |
|------|------|-------------|
| 1 | `function createNavButton(id, emoji, label, page)` | Defines a function with 4 parameters |
| 2 | `const isActive = currentPage === page` | Checks if this button's page is active |
| 3 | `const activeClass = isActive ? ...` | **Ternary operator** - if active, use colored class |
| 4 | `const glowHTML = isActive ? ...` | Creates glow effect only for active button |
| 5-14 | `` return `...` `` | **Template literal** - returns HTML as a string |

**Technical Terms:**
- **Template Literal:** Backticks (`) allow embedding variables with `${variable}`
- **Ternary Operator:** `condition ? valueIfTrue : valueIfFalse`
- **const:** Variable that cannot be reassigned

---

#### `createFeatureCard()` Function

```javascript
function createFeatureCard(icon, title, description, tags, gradientFrom, gradientTo, delay) {
  return `
    <div class="feature-card" data-delay="${delay}">
      ...
    </div>
  `
}
```

**What it does:**
- Creates a card component for services (Wedding, Events, etc.)
- Uses `data-delay` attribute for animation timing

**Technical Term:** `Data Attributes` - Custom attributes starting with `data-` to store information

---

### 🔹 4. Page Templates (HTML Generation)

#### `getHomePageHTML()` Function

```javascript
function getHomePageHTML() {
  return `
    <div id="home-section">
      <!-- Hero Section -->
      <div class="page-header">
        <h1 class="main-title">
          <span class="title-gradient">Capturing Forever</span>
        </h1>
        ...
      </div>
      
      <!-- Feature Cards -->
      <div class="features-grid">
        ${createFeatureCard(...)}
      </div>
      
      <!-- Stats -->
      <div class="stats-grid">
        ${createStatCard(...)}
      </div>
    </div>
  `
}
```

**What it does:**
- Returns all HTML for the home page
- Uses helper functions to create components
- Template literals embed JavaScript expressions

---

### 🔹 5. App Initialization

```javascript
function initApp() {
  const app = document.getElementById('app')
  
  app.innerHTML = `
    <div class="app-container">
      <!-- Background Blobs -->
      <div class="blob blob-purple"></div>
      
      <!-- Navigation -->
      <nav class="navbar">...</nav>
      
      <!-- Content Area -->
      <div id="content" class="main-content"></div>
      
      <!-- Footer -->
      <footer class="footer">...</footer>
    </div>
  `

  showPage(currentPage)
  
  // Event Listeners
  document.getElementById('home-btn').addEventListener('click', () => switchPage('home'))
}
```

**Line-by-line explanation:**

| Line | Code | Explanation |
|------|------|-------------|
| 1 | `const app = document.getElementById('app')` | Gets the div with id="app" from HTML |
| 2 | `app.innerHTML = ...` | Sets the HTML content inside that div |
| 3 | `showPage(currentPage)` | Shows the initial page (home) |
| 4 | `.addEventListener('click', ...)` | Listens for clicks on the button |
| 5 | `() => switchPage('home')` | **Arrow function** - runs when clicked |

**Technical Terms:**
- **DOM (Document Object Model):** Browser's representation of HTML
- **getElementById:** Method to find HTML element by its ID
- **innerHTML:** Property to get/set HTML content
- **addEventListener:** Method to attach event handlers
- **Arrow Function:** `() => {}` - Modern JavaScript function syntax

---

### 🔹 6. Page Switching Logic

```javascript
function switchPage(page) {
  currentPage = page        // Update state
  updateNavButtons()        // Update button styles
  showPage(page)            // Show new page content
}

function showPage(page) {
  const content = document.getElementById('content')
  
  switch(page) {
    case 'home':
      content.innerHTML = getHomePageHTML()
      break
    case 'frontend':
      content.innerHTML = getPortfolioPageHTML()
      break
    case 'backend':
      content.innerHTML = getContactPageHTML()
      break
  }
  
  applyAnimations()
}
```

**What it does:**
- `switchPage`: Orchestrates the page change
- `showPage`: Uses **switch statement** to decide which HTML to show

**Technical Term:** `Switch Statement` - Cleaner alternative to multiple if-else

```
┌─────────────────────────────────────────────────────┐
│              PAGE SWITCHING FLOW                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   User Clicks Button                                │
│         │                                           │
│         ▼                                           │
│   switchPage('portfolio')                           │
│         │                                           │
│         ├──► currentPage = 'portfolio'              │
│         │                                           │
│         ├──► updateNavButtons()                     │
│         │         │                                 │
│         │         └──► Changes button colors        │
│         │                                           │
│         └──► showPage('portfolio')                  │
│                   │                                 │
│                   ├──► switch(page)                 │
│                   │         │                       │
│                   │         └──► case 'frontend'    │
│                   │                    │            │
│                   │                    ▼            │
│                   │         getPortfolioPageHTML()  │
│                   │                                 │
│                   └──► applyAnimations()            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 🔹 7. Global Exports & Event Binding

```javascript
// Make function available globally (for onclick in HTML)
window.switchPage = switchPage

// Run initApp when page is fully loaded
document.addEventListener('DOMContentLoaded', initApp)
```

**What it does:**
- `window.switchPage`: Makes function accessible from HTML onclick
- `DOMContentLoaded`: Event that fires when HTML is ready

---

## 🖥️ Backend Deep Dive

### 📄 File: `backend/server.js`

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
```

**Line-by-line explanation:**

| Line | Code | Explanation |
|------|------|-------------|
| 1 | `require('express')` | **CommonJS import** - loads Express library |
| 2 | `require('cors')` | Loads CORS middleware |
| 3 | `const app = express()` | Creates an Express application instance |
| 4 | `const PORT = 3000` | Port number where server listens |

---

### Middleware Setup

```javascript
app.use(cors());
app.use(express.json());
```

**What is Middleware?**

```
┌────────────────────────────────────────────────────────┐
│                 MIDDLEWARE FLOW                         │
├────────────────────────────────────────────────────────┤
│                                                        │
│   HTTP Request                                         │
│       │                                                │
│       ▼                                                │
│   ┌──────────────┐                                     │
│   │    CORS      │  ← Adds headers for cross-origin    │
│   │  Middleware  │    requests                         │
│   └──────┬───────┘                                     │
│          │                                             │
│          ▼                                             │
│   ┌──────────────┐                                     │
│   │ express.json │  ← Parses JSON in request body      │
│   │  Middleware  │                                     │
│   └──────┬───────┘                                     │
│          │                                             │
│          ▼                                             │
│   ┌──────────────┐                                     │
│   │    Route     │  ← Your actual code runs here       │
│   │   Handler    │                                     │
│   └──────┬───────┘                                     │
│          │                                             │
│          ▼                                             │
│   HTTP Response                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### API Routes

```javascript
// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Backend API',
    endpoints: { ... }
  });
});

// Data endpoint
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});
```

**What it does:**
- `app.get(path, handler)`: Defines a GET route
- `req`: Request object (incoming data)
- `res`: Response object (outgoing data)
- `res.json()`: Sends JSON response

**Technical Terms:**
- **REST API:** Architectural style for web services
- **GET:** HTTP method for retrieving data
- **Endpoint:** URL path that handles specific requests

---

### Error Handlers

```javascript
// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The endpoint ${req.method} ${req.path} does not exist`
  });
});

// 500 Internal Server Error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});
```

**HTTP Status Codes:**

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Request successful |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Server crashed |

---

### Starting the Server

```javascript
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
```

**What it does:**
- Starts listening for HTTP requests on port 3000
- Callback function runs when server starts

---

## 🐳 Docker Explained

### What is Docker?

```
┌────────────────────────────────────────────────────────┐
│              WITHOUT DOCKER                             │
├────────────────────────────────────────────────────────┤
│                                                        │
│   Developer's Computer        Production Server        │
│   ┌──────────────────┐       ┌──────────────────┐     │
│   │ Node v20         │       │ Node v16 ❌       │     │
│   │ npm 10           │       │ npm 8 ❌          │     │
│   │ Your App ✅      │  -->  │ Your App ❌       │     │
│   │ Works perfectly! │       │ CRASHES!          │     │
│   └──────────────────┘       └──────────────────┘     │
│                                                        │
│   "It works on my machine!" 😭                         │
│                                                        │
├────────────────────────────────────────────────────────┤
│                WITH DOCKER                              │
├────────────────────────────────────────────────────────┤
│                                                        │
│   Developer's Computer        Production Server        │
│   ┌──────────────────┐       ┌──────────────────┐     │
│   │ ┌──────────────┐ │       │ ┌──────────────┐ │     │
│   │ │   CONTAINER  │ │       │ │   CONTAINER  │ │     │
│   │ │ Node v20     │ │  -->  │ │ Node v20     │ │     │
│   │ │ Your App ✅  │ │       │ │ Your App ✅  │ │     │
│   │ └──────────────┘ │       │ └──────────────┘ │     │
│   └──────────────────┘       └──────────────────┘     │
│                                                        │
│   Same container = Same behavior everywhere! 🎉        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### 📄 File: `backend/Dockerfile`

```dockerfile
# Use Node.js 20 Alpine (lightweight Linux)
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy all application files
COPY . .

# Tell Docker this container uses port 3000
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
```

**Line-by-line explanation:**

| Line | Command | Explanation |
|------|---------|-------------|
| `FROM` | Base image | Starts with Node.js 20 on Alpine Linux |
| `WORKDIR` | Set directory | All commands run in `/app` folder |
| `COPY package*.json` | Copy files | Copies package.json & package-lock.json |
| `RUN` | Execute command | Runs npm install during build |
| `COPY . .` | Copy all | Copies rest of the application |
| `EXPOSE` | Document port | Indicates which port is used (documentation) |
| `CMD` | Start command | What to run when container starts |

---

### 📄 File: `frontend/Dockerfile` (Multi-Stage Build)

```dockerfile
# ========== BUILD STAGE ==========
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build    # Creates optimized files in /dist

# ========== PRODUCTION STAGE ==========
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

**What is Multi-Stage Build?**

```
┌────────────────────────────────────────────────────────┐
│              MULTI-STAGE BUILD                          │
├────────────────────────────────────────────────────────┤
│                                                        │
│   STAGE 1: Build                                       │
│   ┌──────────────────────────────────────┐            │
│   │ node:20-alpine (900MB)               │            │
│   │                                      │            │
│   │ npm install → node_modules (500MB)   │            │
│   │ npm run build → dist folder (5MB)    │            │
│   │                                      │            │
│   └──────────────────────────────────────┘            │
│                      │                                 │
│                      │ Only copy dist/                 │
│                      ▼                                 │
│   STAGE 2: Production                                  │
│   ┌──────────────────────────────────────┐            │
│   │ nginx:alpine (40MB)                  │            │
│   │                                      │            │
│   │ /usr/share/nginx/html ← dist (5MB)   │            │
│   │                                      │            │
│   │ FINAL IMAGE SIZE: ~45MB ✅            │            │
│   └──────────────────────────────────────┘            │
│                                                        │
│   (Instead of 900MB if we kept everything!)           │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### 📄 File: `docker-compose.yml`

```yaml
services:
  backend:
    build:
      context: ./backend        # Where to find Dockerfile
      dockerfile: Dockerfile    # Which Dockerfile to use
    container_name: abhayvideography-backend
    environment:
      - NODE_ENV=production     # Set environment variable
    networks:
      - app-network             # Connect to network
    restart: unless-stopped     # Auto-restart if crashes
    expose:
      - "3000"                  # Internal port (not public)

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: abhayvideography-frontend
    depends_on:
      - backend                 # Wait for backend to start
    networks:
      - app-network
    restart: unless-stopped
    expose:
      - "80"

  nginx:
    build:
      context: ./nginx
      dockerfile: Dockerfile
    container_name: abhayvideography-nginx
    ports:
      - "8080:80"               # Map host:8080 → container:80
    depends_on:
      - backend
      - frontend
    networks:
      - app-network
    restart: unless-stopped

networks:
  app-network:
    driver: bridge              # Network type
```

**Key Concepts:**

| Keyword | Purpose |
|---------|---------|
| `services` | Defines each container |
| `build.context` | Folder containing Dockerfile |
| `depends_on` | Start order dependency |
| `expose` | Internal port (container-to-container) |
| `ports` | External port (host-to-container) |
| `networks` | Shared network for communication |

---

## 🌐 Nginx Explained

### What is Nginx?

Nginx (pronounced "Engine-X") is a **reverse proxy** and **web server**.

```
┌────────────────────────────────────────────────────────┐
│                    NGINX AS REVERSE PROXY               │
├────────────────────────────────────────────────────────┤
│                                                        │
│   User's Browser                                       │
│        │                                               │
│        │ http://yoursite.com                           │
│        ▼                                               │
│   ┌──────────────────────────────────────┐            │
│   │              NGINX                    │            │
│   │         (Port 80/443)                 │            │
│   │                                       │            │
│   │  /api/*  ──────►  Backend (Port 3000) │            │
│   │                                       │            │
│   │  /*      ──────►  Frontend (Port 80)  │            │
│   │                                       │            │
│   └──────────────────────────────────────┘            │
│                                                        │
│   BENEFITS:                                            │
│   ✅ Single entry point (no CORS issues)               │
│   ✅ Load balancing (multiple backends)                │
│   ✅ SSL termination (HTTPS)                           │
│   ✅ Caching & compression                             │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### 📄 File: `nginx/nginx.conf`

```nginx
# Worker Configuration
user nginx;
worker_processes auto;      # Auto-detect CPU cores

events {
    worker_connections 1024; # Max connections per worker
}

http {
    # MIME Types
    include /etc/nginx/mime.types;
    
    # Compression
    gzip on;                  # Enable gzip compression
    gzip_types text/plain text/css application/json;
    
    # Upstream Servers
    upstream backend {
        server backend:3000;  # Docker service name
    }
    
    upstream frontend {
        server frontend:80;
    }
    
    # Main Server Block
    server {
        listen 80;
        server_name _;        # Accept any hostname
        
        # API Routes → Backend
        location /api {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # All Other Routes → Frontend
        location / {
            proxy_pass http://frontend;
        }
    }
}
```

**Key Concepts:**

| Directive | Purpose |
|-----------|---------|
| `worker_processes` | Number of CPU workers |
| `upstream` | Defines backend servers |
| `server` | Virtual server configuration |
| `location` | Route matching rules |
| `proxy_pass` | Forward request to another server |

---

## 📝 All Commands Explained

### 📦 Package Manager Commands (npm)

```bash
# Install all dependencies from package.json
npm install
```
> **What it does:** Reads `package.json`, downloads all listed packages to `node_modules/`

```bash
# Install a specific package and save to dependencies
npm install express
```
> **What it does:** Downloads `express` and adds it to `package.json`

```bash
# Install as development dependency only
npm install --save-dev vite
```
> **What it does:** Downloads `vite` but only for development (not production)

```bash
# Run a script from package.json
npm run dev
npm run build
npm start
```
> **What it does:** Executes the command defined in `"scripts"` section

---

### 🐳 Docker Commands

```bash
# Build an image from Dockerfile
docker build -t myapp:latest .
```
| Flag | Meaning |
|------|---------|
| `-t` | Tag/name the image |
| `.` | Build context (current directory) |

```bash
# Run a container from an image
docker run -d -p 8080:80 --name mycontainer myapp:latest
```
| Flag | Meaning |
|------|---------|
| `-d` | Detached mode (run in background) |
| `-p 8080:80` | Map host port 8080 to container port 80 |
| `--name` | Give container a name |

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop mycontainer

# Remove a container
docker rm mycontainer

# View container logs
docker logs mycontainer

# Execute command inside container
docker exec -it mycontainer sh
```

---

### 🎼 Docker Compose Commands

```bash
# Start all services (build if needed)
docker-compose up --build
```
| Flag | Meaning |
|------|---------|
| `up` | Create and start containers |
| `--build` | Rebuild images before starting |

```bash
# Start in background (detached)
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart specific service
docker-compose up -d --build frontend
```

---

### ⚡ Vite Commands

```bash
# Start development server (with hot reload)
npm run dev
# OR
vite
```
> **What it does:** Starts server at `http://localhost:5173`, auto-reloads on file changes

```bash
# Build for production
npm run build
# OR
vite build
```
> **What it does:** Creates optimized files in `dist/` folder

```bash
# Preview production build locally
npm run preview
# OR
vite preview
```
> **What it does:** Serves the `dist/` folder locally to test production build

---

### 🖥️ Node.js Commands

```bash
# Run a JavaScript file
node server.js

# Check Node.js version
node --version

# Start Node REPL (interactive mode)
node
```

---

## 🎨 CSS Classes Explained (Tailwind)

### Understanding Tailwind CSS

Tailwind uses **utility classes** - small, single-purpose classes:

```html
<!-- Traditional CSS -->
<button class="primary-button">Click Me</button>

<style>
.primary-button {
  background: linear-gradient(to right, #e11d48, #f59e0b);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
}
</style>

<!-- Tailwind CSS -->
<button class="bg-gradient-to-r from-rose-600 to-amber-600 px-6 py-3 rounded-lg text-white">
  Click Me
</button>
```

### Common Tailwind Classes in This Project

| Class | CSS Property | Value |
|-------|--------------|-------|
| `bg-gradient-to-r` | `background: linear-gradient(to right, ...)` | Gradient direction |
| `from-rose-600` | Gradient start color | Rose shade 600 |
| `to-amber-600` | Gradient end color | Amber shade 600 |
| `px-6` | `padding-left & padding-right` | 1.5rem (24px) |
| `py-3` | `padding-top & padding-bottom` | 0.75rem (12px) |
| `rounded-lg` | `border-radius` | 0.5rem (8px) |
| `text-white` | `color` | #ffffff |
| `hover:bg-white/5` | On hover | White with 5% opacity |

---

## 🎓 Learning Resources

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [ES6 Features](https://es6-features.org/)

### React/Vite
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### Node.js/Express
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Node.js Docs](https://nodejs.org/docs/)

### Docker
- [Docker Get Started](https://docs.docker.com/get-started/)
- [Docker Compose Docs](https://docs.docker.com/compose/)

### Nginx
- [Nginx Beginner Guide](https://nginx.org/en/docs/beginners_guide.html)

---

## 🚀 Quick Start Commands

```bash
# 1. Clone and enter project
cd abhayvideography

# 2. Install dependencies
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# 3. Start development (Terminal 1 - Backend)
cd backend && npm start

# 4. Start development (Terminal 2 - Frontend)
cd frontend && npm run dev

# 5. OR use Docker (single command)
docker-compose up --build
```

---

## 📊 Project Summary

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | Vite + Tailwind CSS | Beautiful, responsive UI |
| **Backend** | Node.js + Express | REST API server |
| **Proxy** | Nginx | Route traffic, serve files |
| **Container** | Docker + Compose | Deploy anywhere |

---

<div align="center">

### 🎬 Built with ❤️ for Abhay Videography Studio

**Capturing memories that last forever**

---

*Created: December 2024*

</div>
