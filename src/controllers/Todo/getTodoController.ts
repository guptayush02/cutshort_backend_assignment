// Edit and mark as complete
import Todo from '../../models/todo';
import { success, error } from '../../../src/utils';

async function getTodos(req: any, res: any) {
  try {
    const { user } = req;

    const where = { userId: user._id };
    const todos = await Todo.find(where);
    return success(res, {status: true, message: 'Todos', data: todos});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default getTodos;
