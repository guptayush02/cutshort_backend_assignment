import { error } from '../../src/utils';

export default async function checkAction(req: any, res: any, next: Function) {
  try {
    const { body } = req;

    if (!body.userId) {
      return error(res, {status: false, message: 'UserId is missing in body'});
    }

    if (JSON.stringify(body.userId) === JSON.stringify(req.user._id)) {
      return next();
    }

    return error(res, {status: false, message: 'You are not allow to perform this action'});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}
