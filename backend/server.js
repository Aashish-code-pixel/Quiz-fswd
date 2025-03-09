const express = require('express');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());

app.use('/api/quiz', quizRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
