import { Router } from 'express';
import bodyParser from 'body-parser';
import { checkToken, checkUserAction } from '../middlewares';
import { signup, login } from '../controllers/Auth';
import { create, edit, deleteTodo, getTodos } from '../controllers/Todo';
import { createPost, getPosts, updatePost, deletePost } from '../controllers/Post';
import { createComment, replyComment } from '../controllers/Comment';
import { searchUser } from '../controllers/Search';
import { success } from '../utils/response';

const api = Router();

// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
api.use(bodyParser.json());

api.post('/register', signup);
api.post('/login', login);

api.get("/", (req, res) => {
  return success(res, {status: true, message: 'Get Test Cutshort Assignment'});
});

// Todos
api.post('/todo', checkToken, checkUserAction, create);
api.put('/todo/:id', checkToken, checkUserAction, edit);
api.delete('/todo/:id', checkToken, checkUserAction, deleteTodo);
api.get('/todos', checkToken, getTodos);

// Posts
api.post('/post', checkToken, checkUserAction, createPost);
api.get('/posts', checkToken, getPosts);
api.put('/post/:id', checkToken, checkUserAction, updatePost);
api.delete('/post/:id', checkToken, checkUserAction, deletePost);

// Comments
api.post('/comment', checkToken, createComment);
api.post('/comment-reply', checkToken, replyComment);

// Search
api.get('/search', checkToken, searchUser);

module.exports = api
