import { success, error } from '../../src/utils';
import { decodeToken } from '../../src/utils';
import User from '../models/user';

interface userDataInterface {
  _id: string;
}

async function authentication(req:any, res:any, next: any) {
  try {
    const { headers } = req;

    if (!headers.token) {
      return error(res, {status: false, message: 'Token not found'});
    }

    const decodedData:any = await decodeToken(headers);
    if (Object.keys(decodedData).includes("_id")) {
      const user = await User.findOne({_id: decodedData._id});
      if (!user) {
        return error(res, {status: false, message: 'Invalid User'});
      }

      delete user.password;
      req.user = user;
      return next();
    }

    return error(res, {status: false, message: 'Invalid User'});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default authentication;
