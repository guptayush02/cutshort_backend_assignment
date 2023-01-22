import login from '../../src/controllers/Auth/LoginController';
import User from '../../src/models/user';
import { mockResponse, mockNotExistModal, mockModel, mockBcryptCompare, mockJwt } from '../utils/mock';

describe("Post Login", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 email not exists', async() => {
    mockNotExistModal(User, 'findOne');
    await login({body: {"email": "tahmid+3@gmail.com","password": "123456"}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 404 Password should be 6 character', async() => {
    mockModel(User, 'findOne');
    await login({body: {"email": "tahmid+1@gmail.com","password": "1234567"}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 404 Incorrect Password', async() => {
    mockModel(User, 'findOne');
    await login({body: {"email": "tahmid+1@gmail.com","password": "12345"}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 Successfully Login', async() => {
    mockModel(User, 'findOne');
    mockBcryptCompare();
    mockJwt();
    await login({body: {"email": "tahmid+1@gmail.com","password": "123456"}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
