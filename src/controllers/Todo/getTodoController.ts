import Todo from '../../models/todo';
import { success, error } from '../../../src/utils';

async function getTodos(req: any, res: any) {
  try {
    const { user, query } = req;

    let userId = user._id;
    if (Object.keys(query).length) {
      userId = query.userId
    }

    const where = { userId };
    const todos = await Todo.find(where);
    return success(res, {status: true, message: 'Todos', data: todos});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default getTodos;
