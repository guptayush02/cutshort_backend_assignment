import Post from '../../models/post';
import { success, error } from '../../utils';

async function deletePost(req: any, res: any) {
  try {
    const { id } = req.params;

    const where = { _id: id };
    await Post.findOneAndDelete(where);
    return success(res, {status: true, message: 'Delete post Successfully'});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default deletePost;
