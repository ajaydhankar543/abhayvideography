# 🚀 Complete GitHub Actions Guide - From Zero to Hero

## Welcome! 
This guide will teach you everything about GitHub Actions from scratch. By the end, you'll understand how automation works and be able to read and write your own workflows!

---

## 📚 Table of Contents

1. [What is GitHub Actions?](#what-is-github-actions)
2. [Core Concepts](#core-concepts)
3. [YAML File Basics](#yaml-file-basics)
4. [Workflow File Structure](#workflow-file-structure)
5. [Your Three Workflows Explained](#your-three-workflows-explained)
   - [CI Workflow (ci.yml)](#1-ci-workflow---ciyml)
   - [Docker Build Workflow (docker-build.yml)](#2-docker-build-workflow---docker-buildyml)
   - [Deploy AWS Workflow (deploy-aws.yml)](#3-deploy-aws-workflow---deploy-awsyml)
6. [How Everything Works Together](#how-everything-works-together)
7. [GitHub Secrets](#github-secrets)
8. [Common Terms Glossary](#common-terms-glossary)

---

## What is GitHub Actions?

### Simple Explanation 🎯

Imagine you have a robot assistant that watches your code repository 24/7. Whenever you push code, create a pull request, or do any activity, this robot can automatically:

- ✅ Test your code
- ✅ Build your application
- ✅ Deploy to a server
- ✅ Send notifications
- ✅ And much more!

**GitHub Actions IS that robot assistant!**

### Real-World Analogy 🏭

Think of a car factory:
```
┌─────────────────────────────────────────────────────────────────┐
│                     CAR MANUFACTURING                           │
│                                                                  │
│   Raw Materials → Assembly Line → Quality Check → Shipping     │
│   (Your Code)     (Build)         (Test)          (Deploy)     │
│                                                                  │
│   Each step is AUTOMATED - no human intervention needed!        │
└─────────────────────────────────────────────────────────────────┘
```

GitHub Actions does the same thing for your software!

---

## Core Concepts

### 1. Workflow 📋

A **workflow** is an automated process that you define. It's like a recipe with multiple steps.

```
Workflow = A complete automation recipe
           Stored in: .github/workflows/your-file.yml
```

**Example:** "Every time I push code, test it and deploy it"

---

### 2. Event (Trigger) 🎯

An **event** is WHAT triggers your workflow to run.

| Event | When it Happens |
|-------|-----------------|
| `push` | When you push code to a branch |
| `pull_request` | When someone creates a pull request |
| `workflow_dispatch` | When you manually click "Run workflow" |
| `schedule` | At a scheduled time (like cron jobs) |
| `workflow_run` | When another workflow finishes |

**Example:**
```yaml
on:
  push:                      # Trigger on push
    branches: [ main ]       # Only on main branch
```

---

### 3. Job 💼

A **job** is a SET of steps that run on the SAME machine. A workflow can have multiple jobs.

```
Workflow
├── Job 1: Test Backend       ← Runs on Machine 1
├── Job 2: Test Frontend      ← Runs on Machine 2 (parallel)
└── Job 3: Deploy             ← Runs on Machine 3 (after jobs 1 & 2)
```

**Key Point:** Jobs run in PARALLEL by default (faster!), unless you specify dependencies.

---

### 4. Step 🚶

A **step** is a SINGLE task within a job. Steps run ONE BY ONE in order.

```
Job: Test Backend
├── Step 1: Checkout code
├── Step 2: Install Node.js
├── Step 3: Install dependencies
└── Step 4: Run tests
```

---

### 5. Runner 🖥️

A **runner** is the machine (server) that runs your job. GitHub provides free runners!

| Runner | Operating System |
|--------|------------------|
| `ubuntu-latest` | Linux (most common) |
| `windows-latest` | Windows |
| `macos-latest` | macOS |

---

### 6. Action 🧩

An **action** is a REUSABLE piece of code. Instead of writing everything from scratch, you use pre-built actions.

**Example:**
```yaml
- uses: actions/checkout@v4        # Pre-built action to download your code
- uses: actions/setup-node@v4      # Pre-built action to install Node.js
```

It's like using a library in programming - someone already wrote the code, you just use it!

---

## Visual Diagram 🎨

```
┌────────────────────────────────────────────────────────────────────────┐
│                         GITHUB ACTIONS FLOW                            │
└────────────────────────────────────────────────────────────────────────┘

     ┌─────────────┐
     │  YOU PUSH   │
     │   CODE      │
     └──────┬──────┘
            │
            ▼
     ┌─────────────┐
     │   EVENT     │  ← "Hey! Something happened!"
     │  TRIGGERS   │
     └──────┬──────┘
            │
            ▼
     ┌─────────────┐
     │  WORKFLOW   │  ← Reads .github/workflows/*.yml
     │   STARTS    │
     └──────┬──────┘
            │
            ▼
    ┌───────┴───────┐
    │               │
    ▼               ▼
┌───────┐      ┌───────┐
│ JOB 1 │      │ JOB 2 │    ← Jobs run in PARALLEL
│       │      │       │
└───┬───┘      └───┬───┘
    │              │
    │   ┌──────────┘
    │   │
    ▼   ▼
┌───────────┐
│   JOB 3   │    ← This job waits for Jobs 1 & 2
│  (Deploy) │
└───────────┘
```

---

## YAML File Basics

### What is YAML? 📄

YAML is just a simple file format for writing configuration. It uses **indentation** (spaces) to organize data.

### YAML Rules:
1. **Indentation matters!** Use 2 spaces (not tabs)
2. **Key-value pairs:** `name: value`
3. **Lists:** Start with `-`
4. **Comments:** Start with `#`

### YAML Examples:

```yaml
# This is a comment

# Simple key-value
name: "Abhay"
age: 25

# Nested structure (notice indentation)
person:
  name: "Abhay"
  skills:
    - JavaScript
    - Docker
    - AWS

# List of items
fruits:
  - apple
  - banana
  - mango
```

---

## Workflow File Structure

Every workflow file has these main sections:

```yaml
# 1. NAME - What do you call this workflow?
name: My Workflow Name

# 2. ON - When should this run?
on:
  push:
    branches: [ main ]

# 3. ENV (optional) - Variables available everywhere
env:
  MY_VARIABLE: "some-value"

# 4. JOBS - What work should be done?
jobs:
  my-job-name:
    runs-on: ubuntu-latest    # Which machine to use
    
    steps:
      - name: Step 1 Name
        run: echo "Hello World"
        
      - name: Step 2 Name
        uses: actions/checkout@v4
```

---

# Your Three Workflows Explained

---

## 1. CI Workflow - `ci.yml`

### What is CI? 🔄

**CI = Continuous Integration**

It means: "Every time code changes, automatically test it to make sure nothing is broken."

### Purpose of This Workflow:
✅ Test your backend code  
✅ Test your frontend code  
✅ Check for syntax errors  
✅ Make sure frontend can build  

### When Does It Run?

```yaml
on:
  push:
    branches: [ main, master, develop ]    # When you push to these branches
  pull_request:
    branches: [ main, master, develop ]    # When someone creates a PR
```

### The Three Jobs:

```
ci.yml
├── Job 1: test-backend     ← Tests backend code
├── Job 2: test-frontend    ← Tests frontend code
└── Job 3: lint             ← Checks code quality
```

### Detailed Breakdown:

#### Job 1: Test Backend

```yaml
test-backend:
    name: Test Backend                    # Display name in GitHub UI
    runs-on: ubuntu-latest                # Use Linux machine
    
    steps:
      - name: Checkout code               # STEP 1: Download your code
        uses: actions/checkout@v4
        # This downloads your entire repository to the runner

      - name: Setup Node.js               # STEP 2: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'              # Use Node.js version 20
          cache: 'npm'                    # Cache npm packages (faster!)
          cache-dependency-path: backend/package-lock.json

      - name: Install dependencies        # STEP 3: Run npm ci
        working-directory: ./backend      # Go to backend folder first
        run: npm ci                       # Install packages from package-lock.json

      - name: Run tests                   # STEP 4: Run test command
        working-directory: ./backend
        run: npm test || echo "No tests configured yet"
        # The || means: if tests fail, just print message and continue

      - name: Check for syntax errors     # STEP 5: Verify code syntax
        working-directory: ./backend
        run: node -c server.js            # -c flag checks syntax without running
```

**What's happening behind the scenes:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB'S UBUNTU MACHINE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Machine starts fresh (clean slate)                          │
│                                                                  │
│  2. Downloads your code from GitHub                             │
│     └── Now has: /home/runner/work/repo/                        │
│                                                                  │
│  3. Installs Node.js v20                                        │
│     └── Now can run: node, npm                                  │
│                                                                  │
│  4. Goes to backend folder                                      │
│     └── cd backend/                                             │
│                                                                  │
│  5. Installs packages                                           │
│     └── npm ci (like npm install but faster)                    │
│                                                                  │
│  6. Runs tests                                                  │
│     └── npm test                                                │
│                                                                  │
│  7. Checks syntax                                               │
│     └── node -c server.js (validates without running)           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

#### Job 2: Test Frontend

Same pattern but for frontend! It also includes `npm run build` to make sure your frontend can compile.

#### Job 3: Lint

"Lint" means checking code quality and syntax. This job double-checks both backend and frontend.

### Visual Flow:

```
           ┌──────────────────────────────────────────┐
           │        YOU PUSH CODE TO MAIN             │
           └────────────────┬─────────────────────────┘
                            │
                            ▼
           ┌──────────────────────────────────────────┐
           │        CI WORKFLOW STARTS                │
           └────────────────┬─────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   ┌─────────┐        ┌─────────┐        ┌─────────┐
   │ TEST    │        │ TEST    │        │  LINT   │
   │ BACKEND │        │ FRONTEND│        │  CODE   │
   └────┬────┘        └────┬────┘        └────┬────┘
        │                  │                   │
        │      ALL THREE RUN IN PARALLEL!      │
        │                  │                   │
        ▼                  ▼                   ▼
   ┌─────────────────────────────────────────────────┐
   │   ✅ All passed? → Green checkmark on GitHub    │
   │   ❌ Any failed? → Red X and notification       │
   └─────────────────────────────────────────────────┘
```

---

## 2. Docker Build Workflow - `docker-build.yml`

### What Does This Workflow Do?

This workflow:
1. Builds Docker images for your backend, frontend, and nginx
2. Pushes them to Docker Hub (online storage for Docker images)

### When Does It Run?

```yaml
on:
  push:
    branches: [ main, master ]     # When you push to main/master
  pull_request:
    branches: [ main, master ]     # When PR is created (build but don't push)
  workflow_dispatch:               # Manual trigger button
```

### Environment Variables:

```yaml
env:
  DOCKER_USERNAME: abhaypratapsingh7704866570
  BACKEND_IMAGE: abhaypratapsingh7704866570/abhayvideography-backend
  FRONTEND_IMAGE: abhaypratapsingh7704866570/abhayvideography-frontend
```

These variables are available to ALL jobs in this workflow.

### The Three Jobs:

```
docker-build.yml
├── Job 1: build-backend     ← Build & push backend Docker image
├── Job 2: build-frontend    ← Build & push frontend Docker image
└── Job 3: build-nginx       ← Build & push nginx Docker image
```

### Detailed Breakdown of Backend Build:

```yaml
build-backend:
    name: Build and Push Backend
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        # Downloads your repository

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
        # Buildx is an advanced Docker builder with extra features
        # Enables: caching, multi-platform builds

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}   # From GitHub Secrets
          password: ${{ secrets.DOCKER_PASSWORD }}   # From GitHub Secrets
        # Now we can push images to Docker Hub

      - name: Extract metadata
        id: meta                                     # Give this step an ID
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.BACKEND_IMAGE }}
          tags: |
            type=sha,prefix={{branch}}-              # Creates: main-abc123
            type=raw,value=latest                    # Creates: latest
        # This step generates image tags automatically

      - name: Build and push Backend
        uses: docker/build-push-action@v5
        with:
          context: ./backend                         # Folder with Dockerfile
          file: ./backend/Dockerfile                 # Path to Dockerfile
          platforms: linux/amd64,linux/arm64         # Build for Intel & ARM
          push: ${{ github.event_name != 'pull_request' }}  # Don't push on PRs
          tags: ${{ steps.meta.outputs.tags }}       # Use tags from previous step
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=registry,ref=${{ env.BACKEND_IMAGE }}:buildcache
          cache-to: type=registry,ref=${{ env.BACKEND_IMAGE }}:buildcache,mode=max
          # Caching makes future builds MUCH faster!
```

### Understanding `${{ }}` Syntax:

```yaml
${{ secrets.DOCKER_USERNAME }}     # Access a secret
${{ env.BACKEND_IMAGE }}           # Access an environment variable
${{ github.event_name }}           # Access GitHub context (built-in info)
${{ steps.meta.outputs.tags }}     # Access output from another step
```

### What Happens Behind the Scenes:

```
┌────────────────────────────────────────────────────────────────┐
│                    BUILD PROCESS                               │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. GitHub spins up a fresh Ubuntu machine                     │
│                                                                 │
│  2. Downloads your code                                        │
│     /backend/                                                  │
│     ├── Dockerfile                                             │
│     ├── package.json                                           │
│     └── server.js                                              │
│                                                                 │
│  3. Sets up Docker with Buildx (advanced builder)              │
│                                                                 │
│  4. Logs into Docker Hub using your credentials                │
│     └── Now can push images to: hub.docker.com                 │
│                                                                 │
│  5. Generates tags:                                            │
│     └── abhaypratapsingh7704866570/abhayvideography-backend:latest
│     └── abhaypratapsingh7704866570/abhayvideography-backend:main-abc123
│                                                                 │
│  6. Runs: docker build -t <tags> ./backend                     │
│     └── Creates a Docker image                                 │
│                                                                 │
│  7. Runs: docker push <tags>                                   │
│     └── Uploads to Docker Hub                                  │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### Multi-Platform Builds Explained:

```yaml
platforms: linux/amd64,linux/arm64
```

This means:
- `linux/amd64` = Intel/AMD processors (most computers, AWS EC2)
- `linux/arm64` = ARM processors (Apple M1/M2, AWS Graviton)

Your image works on BOTH types of computers!

### Why Not Push on Pull Requests?

```yaml
push: ${{ github.event_name != 'pull_request' }}
```

| Event | Result |
|-------|--------|
| `push` to main | `push: true` (uploads to Docker Hub) |
| `pull_request` | `push: false` (only builds, doesn't upload) |

**Why?** You want to TEST that the build works on PRs, but only upload when code is actually merged.

---

## 3. Deploy AWS Workflow - `deploy-aws.yml`

### What Does This Workflow Do?

This is the FINAL step! It:
1. Connects to your AWS EC2 server via SSH
2. Pulls the latest Docker images from Docker Hub
3. Starts your application with Docker Compose

### When Does It Run?

```yaml
on:
  workflow_run:
    workflows: ["Build and Push Docker Images"]    # After Docker build finishes
    types:
      - completed                                   # When it completes
    branches: [ main, master ]                      # Only for main branch
  workflow_dispatch:                                # Manual trigger button
```

### Workflow Chaining Explained:

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   CI Workflow   │      │  Docker Build   │      │   Deploy AWS    │
│   (ci.yml)      │      │(docker-build.yml│      │(deploy-aws.yml) │
└────────┬────────┘      └────────┬────────┘      └────────┬────────┘
         │                        │                        │
    Push to main ──────────► Triggers ──────────► Triggers │
         │                        │                        │
         │                        │                        │
         ▼                        ▼                        ▼
    Tests code              Builds images           Deploys to EC2
```

### The Condition Check:

```yaml
if: ${{ github.event.workflow_run.conclusion == 'success' || github.event_name == 'workflow_dispatch' }}
```

This means: "Only run if:
- The Docker build workflow SUCCEEDED, OR
- Someone manually triggered this workflow"

**Never deploy broken code!**

### SSH Action Explained:

```yaml
- name: Deploy to EC2
  uses: appleboy/ssh-action@v1.0.0
  with:
    host: ${{ secrets.EC2_HOST }}        # Your server's IP address
    username: ${{ secrets.EC2_USERNAME }}  # Usually "ubuntu" or "ec2-user"
    key: ${{ secrets.EC2_SSH_KEY }}        # Your private SSH key
    port: 22                               # SSH port (default)
    script: |
      # All these commands run ON YOUR EC2 SERVER!
      echo "Hello from EC2!"
      docker pull myimage:latest
      docker-compose up -d
```

This action:
1. Connects to your EC2 server via SSH (like you typing `ssh user@server`)
2. Runs the commands in `script:` on that server
3. Returns the output

### The Deployment Script Breakdown:

```bash
# 1. Check if Docker is installed, install if not
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
fi

# 2. Navigate to app directory (create if doesn't exist)
cd ~/abhayvideography || mkdir -p ~/abhayvideography && cd ~/abhayvideography

# 3. Check if SSL is configured
if [ -d "/etc/letsencrypt/live" ]; then
    SSL_ENABLED=true
fi

# 4. Create docker-compose.yml file dynamically
cat > docker-compose.yml << 'EOF'
services:
  backend:
    image: abhaypratapsingh7704866570/abhayvideography-backend:latest
    ...
EOF

# 5. Pull latest images from Docker Hub
docker pull abhaypratapsingh7704866570/abhayvideography-backend:latest
docker pull abhaypratapsingh7704866570/abhayvideography-frontend:latest

# 6. Stop old containers
docker-compose down

# 7. Start new containers
docker-compose up -d

# 8. Verify everything is running
docker-compose ps
```

### Complete Deployment Flow:

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         DEPLOYMENT FLOW                                  │
└──────────────────────────────────────────────────────────────────────────┘

    GitHub Actions                          Your AWS EC2 Server
    ──────────────                          ───────────────────
          │                                        │
          │  1. SSH Connect                        │
          │────────────────────────────────────────►
          │                                        │
          │  2. Run script commands                │
          │                                        │
          │                              ┌─────────┴─────────┐
          │                              │ Install Docker    │
          │                              │ if not present    │
          │                              └─────────┬─────────┘
          │                                        │
          │                              ┌─────────┴─────────┐
          │                              │ Pull images from  │
          │                              │ Docker Hub        │
          │                              └─────────┬─────────┘
          │                                        │
          │                              ┌─────────┴─────────┐
          │                              │ docker-compose    │
          │                              │ up -d             │
          │                              └─────────┬─────────┘
          │                                        │
          │  3. Get status/logs                    │
          │◄───────────────────────────────────────│
          │                                        │
          │                              ┌─────────┴─────────┐
          │                              │  ✅ App Running!  │
          │                              │  Backend :3000    │
          │                              │  Frontend :80     │
          │                              │  Nginx    :80     │
          │                              └───────────────────┘
```

---

## How Everything Works Together

### The Complete Pipeline:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    COMPLETE CI/CD PIPELINE                              │
└─────────────────────────────────────────────────────────────────────────┘

                    YOU PUSH CODE TO MAIN BRANCH
                              │
                              ▼
        ┌─────────────────────────────────────────────┐
        │              GITHUB DETECTS PUSH            │
        │         (Checks .github/workflows/)         │
        └───────────────────┬─────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
      ┌──────────┐   ┌──────────────┐   (Waits for
      │ ci.yml   │   │docker-build  │    Docker
      │          │   │   .yml       │    build)
      └────┬─────┘   └──────┬───────┘       │
           │                │               │
           ▼                ▼               │
      ┌──────────┐   ┌──────────────┐       │
      │ ✅ Tests │   │ ✅ Images    │       │
      │   Pass   │   │   Built &    │───────┤
      └──────────┘   │   Pushed     │       │
                     └──────────────┘       │
                                            ▼
                              ┌──────────────────────┐
                              │   deploy-aws.yml     │
                              │   TRIGGERS           │
                              └──────────┬───────────┘
                                         │
                                         ▼
                              ┌──────────────────────┐
                              │  SSH to EC2 Server   │
                              │  Pull new images     │
                              │  Restart containers  │
                              └──────────┬───────────┘
                                         │
                                         ▼
                              ┌──────────────────────┐
                              │  ✅ APP IS LIVE!     │
                              │  Users see updates   │
                              └──────────────────────┘
```

### Timeline:

| Time | What Happens |
|------|--------------|
| 0:00 | You run: `git push origin main` |
| 0:01 | GitHub receives your code |
| 0:02 | CI workflow starts (testing) |
| 0:02 | Docker Build workflow starts (building images) |
| 0:30 | CI workflow finishes |
| 2:00 | Docker Build finishes, images pushed to Docker Hub |
| 2:01 | Deploy workflow triggers automatically |
| 2:30 | EC2 pulls new images and restarts |
| 3:00 | ✅ Your changes are LIVE! |

---

## GitHub Secrets

### What Are Secrets? 🔐

Secrets are encrypted environment variables that store sensitive information like:
- Passwords
- API keys
- SSH keys
- Usernames

**They are NEVER shown in logs!**

### Your Required Secrets:

| Secret Name | What It Is | Example |
|-------------|------------|---------|
| `DOCKER_USERNAME` | Your Docker Hub username | `abhaypratapsingh7704866570` |
| `DOCKER_PASSWORD` | Docker Hub password/token | `dckr_pat_xxxxx` |
| `EC2_HOST` | Your server's IP address | `54.123.45.67` |
| `EC2_USERNAME` | SSH username | `ubuntu` |
| `EC2_SSH_KEY` | Your private SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |

### How to Add Secrets:

1. Go to your GitHub repository
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add name and value

```
┌────────────────────────────────────────────────────────────────┐
│  GitHub Repo → Settings → Secrets and variables → Actions     │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Repository secrets                                            │
│  ─────────────────                                             │
│  ┌─────────────────────┬────────────────────────────────┐     │
│  │ DOCKER_USERNAME     │ ******                          │     │
│  ├─────────────────────┼────────────────────────────────┤     │
│  │ DOCKER_PASSWORD     │ ******                          │     │
│  ├─────────────────────┼────────────────────────────────┤     │
│  │ EC2_HOST            │ ******                          │     │
│  ├─────────────────────┼────────────────────────────────┤     │
│  │ EC2_USERNAME        │ ******                          │     │
│  ├─────────────────────┼────────────────────────────────┤     │
│  │ EC2_SSH_KEY         │ ******                          │     │
│  └─────────────────────┴────────────────────────────────┘     │
│                                                                 │
│  [+ New repository secret]                                     │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### Using Secrets in Workflows:

```yaml
# In your workflow file
username: ${{ secrets.DOCKER_USERNAME }}
password: ${{ secrets.DOCKER_PASSWORD }}
```

---

## Common Terms Glossary

| Term | Simple Definition |
|------|------------------|
| **CI** | Continuous Integration - Automatically test code when it changes |
| **CD** | Continuous Deployment - Automatically deploy when tests pass |
| **Workflow** | The complete automation recipe (YAML file) |
| **Job** | A group of steps that run on one machine |
| **Step** | A single task (like "install Node.js") |
| **Runner** | The machine that runs your workflow |
| **Action** | A reusable piece of automation |
| **Event** | What triggers the workflow (push, PR, etc.) |
| **Secret** | Encrypted variable for sensitive data |
| **Artifact** | Files produced by a workflow (logs, builds) |
| **Matrix** | Run same job with different configurations |
| **Cache** | Save files between runs for faster builds |

---

## Quick Reference Examples

### Example 1: Simple Workflow
```yaml
name: Hello World

on: push

jobs:
  say-hello:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Hello, World!"
```

### Example 2: With Multiple Jobs
```yaml
name: Build and Test

on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test

  build:
    runs-on: ubuntu-latest
    needs: test           # Wait for test job first!
    steps:
      - uses: actions/checkout@v4
      - run: npm run build
```

### Example 3: Environment Variables
```yaml
name: With Variables

on: push

env:
  MY_NAME: "Abhay"        # Available to all jobs

jobs:
  greet:
    runs-on: ubuntu-latest
    env:
      MY_JOB_VAR: "Hello"  # Only in this job
    steps:
      - run: echo "$MY_JOB_VAR, $MY_NAME!"
        # Output: Hello, Abhay!
```

### Example 4: Conditional Steps
```yaml
steps:
  - name: Only on main branch
    if: github.ref == 'refs/heads/main'
    run: echo "This is main branch!"

  - name: Always run
    if: always()
    run: echo "This runs even if previous steps fail"
```

---

## 🎓 Summary

| Workflow | Purpose | Triggers | What It Does |
|----------|---------|----------|--------------|
| `ci.yml` | Testing | Push/PR to main, master, develop | Tests backend & frontend code |
| `docker-build.yml` | Building | Push to main/master | Builds Docker images, pushes to Docker Hub |
| `deploy-aws.yml` | Deploying | After docker-build succeeds | SSH to EC2, pulls images, restarts app |

### The Magic Formula:

```
Push Code → Test → Build → Deploy → 🎉 App Updated!
```

---

## 🚀 You're Ready!

You now understand:
- ✅ What GitHub Actions is
- ✅ How workflows, jobs, and steps work
- ✅ What each of your three workflows does
- ✅ How secrets keep your credentials safe
- ✅ How everything connects together

**Happy automating!** 🤖

---

*Created for Abhay Videography Project - December 2025*
