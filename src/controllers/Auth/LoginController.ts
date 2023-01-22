import User from '../../models/user';
import bcrypt from 'bcryptjs';
import { createToken, success, error } from '../../../src/utils';

async function login(req: any, res: any) {
  try {
    const { body } = req;

    const checkUser = await User.findOne({email: body.email});
    if (!checkUser) {
      return error(res, {status: false, message: 'Email not exist'});
    }

    if (body.password.length > 7) {
      return error(res, {status: false, message: 'Password should be 6 character'});
    }

    const comparePassword = await bcrypt.compare(body.password, checkUser.password);
    if (!comparePassword) {
      return error(res, {status: false, message: 'Incorrect Password'});
    }

    const token = await createToken(checkUser);
    return success(res, {status: true, message: 'Login Successfully', data: token.token});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default login;
