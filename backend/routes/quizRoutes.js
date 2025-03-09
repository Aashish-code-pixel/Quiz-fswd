const express = require('express');
const Quiz = require('../models/Quiz');

const router = express.Router();

router.get('/', async (req, res) => {
    const quizzes = await Quiz.find();
    res.json(quizzes);
