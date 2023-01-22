import getTodo from '../../src/controllers/Todo/getTodoController';
import { mockResponse, mockTodoFind } from '../utils/mock';

describe("Get Todo:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 userId not found', async() => {
    await getTodo({}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 todo get successfully with query params', async() => {
    mockTodoFind();
    await getTodo({query: { "userId": "63cb939ea487e16bff04467a" }, user: { _id: '63cb939ea487e16bff04467a' }}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should return 200 todo get successfully without query params', async() => {
    mockTodoFind();
    await getTodo({query: {}, user: { _id: '63cb939ea487e16bff04467a' }}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
