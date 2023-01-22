import editTodo from '../../src/controllers/Todo/EditController';
import { mockResponse, mockTodoFindOneAndUpdate, mockTodoFindOne } from '../utils/mock';

describe("Edit Todo:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 missing params', async() => {
    await editTodo({body: { "userId": "63cb939ea487e16bff04467a" }}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 todo update successfully', async() => {
    mockTodoFindOneAndUpdate();
    mockTodoFindOne({});
    await editTodo({body: { "task": "xyz1", "userId": "63cb939ea487e16bff04467a" }, params: { id: '63cbcdcd177271d9915614f3' }}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  // Todo markComplete
  it('should return 200 todo update successfully TODO Mark as complete', async() => {
    mockTodoFindOneAndUpdate();
    mockTodoFindOne({markComplete: true});
    await editTodo({body: { "task": "xyz1", "userId": "63cb939ea487e16bff04467a", "markComplete": true }, params: { id: '63cbcdcd177271d9915614f3' }}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
