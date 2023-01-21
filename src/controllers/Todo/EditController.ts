// Edit and mark as complete
import Todo from '../../models/todo';
import { success, error } from '../../../src/utils';

async function edit(req: any, res: any) {
  try {
    const { id } = req.params;
    const { body } = req;

    const where = { _id: id };
    let update = { ...body };
    if (!body.markComplete) {
      update = { ...body, status: 'Edit' };
    }

    await Todo.findOneAndUpdate(where, update);
    const todo = await Todo.findOne(where);
    return success(res, {status: true, message: 'Update todo', data: todo});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default edit;
