import Todo from '../../models/todo';
import { success, error } from '../../../src/utils';

async function deleteTodo(req: any, res: any) {
  try {
    const { id } = req.params;

    const where = { _id: id };
    await Todo.findOneAndDelete(where);
    return success(res, {status: true, message: 'Delete todo Successfully'});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default deleteTodo;
