import Comment from '../../models/comment';
import { success, error } from '../../../src/utils';

export default async function createConnent(req:any, res:any) {
  try {
    const { body, user } = req;

    const options = {
      ...body,
      userId: user._id
    };
    const newComment = new Comment(options);
    const result = await newComment.save();
    return success(res, {status: true, message: 'Create Comment Successfully', data: result});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}
