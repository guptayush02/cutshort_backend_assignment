import { Router } from 'express';
import bodyParser from 'body-parser';
import { checkToken, checkUserAction } from '../middlewares';
import { signup, login } from '../controllers/Auth';
import { create, edit, deleteTodo, getTodos } from '../controllers/Todo';

const api = Router();

// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
api.use(bodyParser.json());

api.post('/register', signup);
api.post('/login', login);

// Todos
api.post('/todo', checkToken, checkUserAction, create);
api.put('/todo/:id', checkToken, checkUserAction, edit);
api.delete('/todo/:id', checkToken, checkUserAction, deleteTodo);
api.get('/todos', checkToken, getTodos);

module.exports = api
