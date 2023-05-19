# Todo App

This is a Todo App project built using React.js, Node.js, Express.js, and MongoDB. The application allows users to create, update, and delete tasks, as well as mark them as completed.

## Features
- Create Todo: Users can create new tasks by providing a title and optional description.
- Update Todo: Users can edit the title, description, and completion status of existing tasks.
- Delete Todo: Users can remove tasks from their list.
- Mark as Completed: Users can mark tasks as completed once they are finished.

## Technologies Used
- React.js: A JavaScript library for building user interfaces.
- Node.js: A runtime environment for executing JavaScript code outside of a web browser.
- Express.js: A fast and minimalist web application framework for Node.js.
- MongoDB: A NoSQL document database used for storing task data.
- RESTful API:(MVC architecture) The backend utilizes RESTful APIs for communication between the client and server.

## Installation
To run the Todo App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/HafeezullahKakar/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install the dependencies for the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..

   # Install backend dependencies
   cd backend
   npm install
   ```

4. Configure the environment variables:

   - Create a `.env` file in the `server` directory.
   - Provide the necessary environment variables such as `MONGODB_URI` for connecting to your MongoDB database.

5. Start the development server:

   ```bash
   # Start the frontend server
   cd ../frontend
   npm start

   # Start the backend server
   cd ../backend
   nodemon Server.js
   Or 
   node Server.js

   ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the Todo App.

## Folder Structure

The project structure is organized as follows:

```plaintext
todo-app/
├── frontend/              # Frontend React application
│   ├── public/          # Public assets and index.html
│   ├── src/             # React components and application logic
│   └── package.json     # Frontend dependencies and scripts
└── backend/              # Backend Node.js and Express.js application
    ├── controllers/     # Route handlers and business logic
    ├── models/          # Mongoose models for MongoDB
    ├── routes/          # API routes
    ├── Server.js         # Entry point for the server
    └── package.json     # Backend dependencies and scripts
```

Thank you for using the Todo App! If you have any questions or feedback, please don't hesitate to reach out.