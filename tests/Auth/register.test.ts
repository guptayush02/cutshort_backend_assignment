import signup from '../../src/controllers/Auth/RegisterationController';
import { mockResponse, mockModel, mockNotExistModal, mockBcryptGenSaltSync, mockBcryptHashSync } from '../utils/mock';
import User from '../../src/models/user';

describe("Post Login", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 email already exists', async() => {
    mockModel(User, 'findOne');
    await signup({body: {"username": "ayush1", "email": "tahmid+1@gmail.com", "password": "123456", "confirmationPassword": "123456"}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 404 Password not match', async() => {
    mockModel(User, 'findOne');
    await signup({body: {"username": "ayush1", "email": "tahmid+6@gmail.com", "password": "1234a6", "confirmationPassword": "123456"}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 404 Password should be less then 7 character', async() => {
    mockModel(User, 'findOne');
    await signup({body: {"username": "ayush1", "email": "tahmid+6@gmail.com", "password": "123456sd", "confirmationPassword": "123456"}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 Successfully signup', async() => {
    mockNotExistModal(User, 'findOne');
    mockBcryptGenSaltSync();
    mockBcryptHashSync();
    mockModel(User, 'save');
    await signup({body: {"username": "ayush1", "email": "tahmid+6@gmail.com", "password": "sgdhr", "confirmationPassword": "sgdhr"}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
