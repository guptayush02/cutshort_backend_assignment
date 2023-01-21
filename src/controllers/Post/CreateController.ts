import Post from '../../models/post';
import { success, error } from '../../../src/utils';

async function createPost(req: any, res: any) {
  try {
    const { body, user } = req;
    const options = {
      ...body,
      userId: user._id
    }

    const newPost = new Post(options);
    const result = await newPost.save();
    return success(res, {status: true, message: 'Create Post Successfully', data: result});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default createPost;
