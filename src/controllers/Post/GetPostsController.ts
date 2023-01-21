import Post from '../../models/post';
import { success, error } from '../../../src/utils';

async function getPosts(req: any, res: any) {
  try {
    const { user, query } = req;

    let id = user._id;
    if (Object.keys(query).length) {
      id = query.userId;
    }

    const posts = await Post.find({userId: id});
    if (posts.length) {
      return success(res, {status: true, message: 'Create Post Successfully', data: posts});
    }
    return error(res, {status: false, message: 'Post not found', data: posts});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default getPosts;
