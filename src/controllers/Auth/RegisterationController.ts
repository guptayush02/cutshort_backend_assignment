import User from '../../models/user';
import bcrypt from 'bcryptjs';
import { success, error } from '../../../src/utils';

async function signup(req: any, res: any) {
  try {
    const { body } = req;

    // Check user
    const checkUser = await User.findOne({email: body.email});
    if (checkUser) {
      return error(res, {status: false, message: 'Email already exist'});
    } else if (body.password !== body.confirmationPassword) {
      return error(res, {status: false, message: 'Password not match'});
    } else if (body.password.length > 6) {
      return error(res, {status: false, message: 'Password should be 6 character'});
    }

    // encrypt password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);

    // Update body
    body.password = hash;
    delete body.confirmationPassword;

    // Create user
    const newUser = new User(body);
    const result = await newUser.save();
    if (result) {
      return success(res, {status: true, message: 'User create successfully'});
    }
    return error(res, {status: false, message: 'Something went wrong, Please try again later'});
  } catch (err) {
    return error(res, {status: false, message: err});
  }
}

export default signup;
