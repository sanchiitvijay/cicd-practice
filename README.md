# My Fullstack App

This project is a simple fullstack application that consists of a React frontend and a Node.js backend. It is designed to help you learn about CI/CD practices through a straightforward setup.

## Project Structure

```
my-fullstack-app
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components
│   │       └── HelloWorld.js
│   ├── public
│   │   └── index.html
│   └── package.json
├── backend
│   ├── src
│   │   ├── server.js
│   │   └── routes
│   │       └── api.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

   The application will be running on `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the Node.js server:
   ```
   npm start
   ```

   The server will be running on `http://localhost:5000`.

## Usage

- The frontend communicates with the backend through API endpoints defined in the backend application.
- You can modify the frontend and backend code to explore different functionalities and learn about CI/CD practices.

## License

This project is open-source and available under the MIT License.