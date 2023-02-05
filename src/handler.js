const pool = require('./dbclient');
const { nanoid } = require('nanoid');

const addToDo = (req, res) => {
    const { info, isDone } = req.body;
    const id = nanoid(10);
    pool.query('INSERT INTO todos (id, info, isDone, createdat) VALUES ($1, $2, $3, current_date)', [id, info, isDone], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`ToDo added with ID: ${id}`);
    });
};

const getToDo = (req, res) => {
    pool.query('SELECT * FROM todos ORDER BY createdat ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getToDoById = (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM todos WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

module.exports = { addToDo, getToDo };