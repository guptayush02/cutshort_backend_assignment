import Reply from '../../models/replyComment';
import { success, error } from '../../../src/utils';

export default async function replyConnent(req:any, res:any) {
  try {
    const { body, user } = req;

    const options = {
      ...body,
      userId: user._id
    };
    const newComment = new Reply(options);
    const result = await newComment.save();
    return success(res, {status: true, message: 'Reply On Comment Successfully', data: result});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}
