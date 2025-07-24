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

## License

MIT