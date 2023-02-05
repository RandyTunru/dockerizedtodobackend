const express = require('express');
const router = express.Router();
const handler = require('./handler');

router.use(express.json());

router.post('/todo', handler.addToDo);

// router.get('/todo', handler.getToDo);

// router.get('/todo/:id', handler.getToDoById);

// router.put('/todo/:id', handler.updateToDo);

// router.delete('/todo/:id', handler.deleteToDo);

module.exports = router;