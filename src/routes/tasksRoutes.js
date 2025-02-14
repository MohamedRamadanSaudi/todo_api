const express = require('express');
const { getTasks, getTask, createTask, updateTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask)
router.patch('/:id', updateTask)

module.exports = router;