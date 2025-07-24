# My Fullstack App

A simple React frontend with Node.js backend for learning CI/CD practices.

## Project Structure

```
my-fullstack-app/
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js Express server
│   ├── src/
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on http://localhost:3000

## Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Simple hello world endpoint

## Environment Variables

### Backend (.env)
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)

### Frontend (.env)
- `REACT_APP_API_URL` - Backend API URL
- `REACT_APP_APP_NAME` - Application name

## CI/CD Ready

This project is structured to support CI/CD pipelines with:
- Separate frontend and backend builds
- Environment configuration
- Test scripts
- Production build processes

# My Fullstack App - Docker Hub CI/CD

A fullstack MERN application with automated Docker image building and deployment to Docker Hub.

## Docker Hub Integration

This project automatically builds and pushes Docker images to Docker Hub on every commit to `main` and `develop` branches.

### Prerequisites

1. **Docker Hub Account**: Create an account at [hub.docker.com](https://hub.docker.com)
2. **Docker Hub Access Token**: 
   - Go to Docker Hub → Account Settings → Security
   - Create a new access token with Read/Write permissions

### GitHub Secrets Setup

Add the following secrets to your GitHub repository:

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Add these repository secrets:
   - `DOCKER_HUB_USERNAME`: Your Docker Hub username
   - `DOCKER_HUB_ACCESS_TOKEN`: Your Docker Hub access token

### Image Tags

The workflow creates the following image tags:
- `latest`: Latest version from main branch
- `main-<sha>`: Specific commit from main branch
- `develop-<sha>`: Specific commit from develop branch
- `pr-<number>`: Pull request builds

### Docker Images

The workflow builds and pushes two images:
- `<your-username>/my-fullstack-app-frontend`
- `<your-username>/my-fullstack-app-backend`

## Usage

### Development (Local Build)
```bash
# Build and run locally
docker-compose up --build
```

### Production (Docker Hub Images)
```bash
# Set your Docker Hub username
export DOCKER_HUB_USERNAME=your-username

# Run with images from Docker Hub
docker-compose -f docker-compose.prod.yml up
```

### Manual Docker Commands
```bash
# Pull latest images
docker pull your-username/my-fullstack-app-frontend:latest
docker pull your-username/my-fullstack-app-backend:latest

# Run individual services
docker run -p 3000:80 your-username/my-fullstack-app-frontend:latest
docker run -p 5000:5000 your-username/my-fullstack-app-backend:latest
```

## Environment Variables

### Frontend (.env)
```bash
REACT_APP_API_URL=http://localhost:5000
REACT_APP_APP_NAME=My Fullstack App
```

### Backend (.env)
```bash
NODE_ENV=production
PORT=5000
```

## Workflow Features

- ✅ Multi-platform builds (linux/amd64, linux/arm64)
- ✅ Docker layer caching for faster builds
- ✅ Automatic tagging with commit SHA
- ✅ Separate builds for frontend and backend
- ✅ Production-ready images
- ✅ Auto-update docker-compose.yml with new tags

## Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │
│   (React)       │    │   (Node.js)     │
│   Port: 3000    │────│   Port: 5000    │
│   nginx:alpine  │    │   node:18-alpine│
└─────────────────┘    └─────────────────┘
```

## Deployment

After pushing to main branch:
1. GitHub Actions builds and pushes images
2. Images are available on Docker Hub
3. Deploy anywhere using `docker-compose.prod.yml`

Example deployment:
```bash
# On your server
git clone <your-repo>
cd my-fullstack-app
export DOCKER_HUB_USERNAME=your-username
docker-compose -f docker-compose.prod.yml up -d
```