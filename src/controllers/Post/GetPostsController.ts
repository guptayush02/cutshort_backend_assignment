import Post from '../../models/post';
import { success, error } from '../../../src/utils';
const mongoose = require("mongoose");

async function getPosts(req: any, res: any) {
  try {
    const { user, query } = req;

    let id = user._id;
    if (Object.keys(query).length) {
      id = mongoose.Types.ObjectId(query.userId);
    }

    const posts:any = await getPostsById(id);
    if (posts.length) {
      return success(res, {status: true, message: 'Create Post Successfully', data: posts});
    }
    return error(res, {status: false, message: 'Post not found', data: posts});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

const getPostsById = async (id:string) => {
  return await new Promise((resolve, reject) => {
    const posts = Post.aggregate([
      {
        $match: {
          userId: id
        }
      },
      { $sort: { createdAt: -1 } },
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'postId',
          as: 'comments',
          pipeline: [{
            $lookup: {
              from: 'replycomments',
              localField: '_id',
              foreignField: 'commentId',
              as: 'replies',
              pipeline: [
                { $sort: { createdAt: -1 } }
              ]
            }
          },
          { $sort: { createdAt: -1 } }]
        } 
      }
    ]);
    resolve(posts);
  })
}

export default getPosts;