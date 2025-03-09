# Quiz fswd

A full-stack quiz application built with **React.js** for the frontend and **Node.js + Express + MongoDB** for the backend.

## Features
- User authentication (register/login)
- Take quizzes with multiple-choice questions
- Track and store scores
- Responsive UI

## Tech Stack
- Frontend: React.js, CSS
- Backend: Node.js, Express.js, MongoDB
- Database: MongoDB Atlas
- Authentication: JWT (JSON Web Token)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies for backend:
   ```sh
   cd backend
   npm install
   ```
3. Install dependencies for frontend:
   ```sh
   cd frontend
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the **backend** folder:
     ```sh
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
5. Start the backend:
   ```sh
   npm run dev
   ```
6. Start the frontend:
   ```sh
   npm start
   ```

## API Endpoints
- `GET /api/quiz` - Fetch all quiz questions
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

// Example content for db.js (Database connection)
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database Connection Error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

// Example content for authMiddleware.js (JWT Authentication)
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = authMiddleware;
