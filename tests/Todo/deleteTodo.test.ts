import deleteTodo from '../../src/controllers/Todo/DeleteController';
import { mockResponse, mockModel } from '../utils/mock';
import Todo from '../../src/models/todo'

describe("Todo Delete:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 missing params', async() => {
    await deleteTodo({body: { "userId": "63cb939ea487e16bff04467a" }}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 todo delete successfully', async() => {
    mockModel(Todo, 'findOneAndDelete');
    await deleteTodo({body: { "userId": "63cb939ea487e16bff04467a" }, params: { id: '63cbc001898dcf4a6d1d4549' }}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });  
});
