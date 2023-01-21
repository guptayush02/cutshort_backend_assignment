import { success, error } from '../../src/utils';

export default async function checkAction(req: any, res: any, next: any) {
  try {
    if (JSON.stringify(req.body.userId) === JSON.stringify(req.user._id)) {
      return next();
    }

    return error(res, {status: false, message: 'You are not allow to perform this action'});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}
