import Todo from '../../models/todo';
import { success, error } from '../../../src/utils';

async function create(req: any, res: any) {
  try {
    const { body, user } = req;
    const options = {
      ...body,
      userId: user._id
    }

    const newTodo = new Todo(options);
    const result = await newTodo.save();
    return success(res, {status: true, message: 'Create todo', data: result});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default create;
