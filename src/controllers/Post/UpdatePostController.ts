import Post from '../../models/post';
import { success, error } from '../../utils';

async function UpdatePostController(req: any, res: any) {
  try {
    const { params, body } = req;

    const option = { post: body.post };
    const where = { _id: params.id }

    if (!Object.keys(body).length) {
      return error(res, {status: false, message: 'Parameters missing'});
    }

    await Post.findOneAndUpdate(where, option);
    const posts = await Post.find(where);
    if (posts.length) {
      return success(res, {status: true, message: 'Update Post Successfully', data: posts});
    }
    return error(res, {status: false, message: 'Post not found', data: posts});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default UpdatePostController;
