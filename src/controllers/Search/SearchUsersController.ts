import User from '../../models/user';
import { success, error } from '../../../src/utils';

export default async function(req: any, res:any) {
  try {
    const { searchquery } = req.query;

    const result = await User.aggregate([
      {
        $match: {
          $or: [
            {username: { $regex: '.*' + searchquery + '.*' }},
            {email: { $regex: '.*' + searchquery + '.*' }}
          ]
        }
      },
      { $unset: ['password'] },
      {
        $lookup: {
          from: 'todos',
          localField: '_id',
          foreignField: 'userId',
          as: 'todos',
        }
      },
      {
        $lookup: {
          from: 'posts',
          localField: '_id',
          foreignField: 'userId',
          as: 'posts',
          pipeline: [{
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
          }]
        }
      }
    ]);

    if (result.length) {
      return success(res, { status: true, message: 'Search Result', data: result });
    }
    return error(res, { status: false, message: 'Search Result Not Found', data: result });
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}
