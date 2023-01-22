import create from '../../src/controllers/Todo/CreateController';
import { mockResponse, mockModel } from '../utils/mock';
import Todo from '../../src/models/todo';

describe("Todo Create:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 missing params', async() => {
    await create({body: { "status": "Create", "userId": "63cb939ea487e16bff04467a" }, user: {_id: '63cb939ea487e16bff04467a'}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 successfully create todo', async() => {
    mockModel(Todo, 'save');
    await create({body: { "task": "xyz", "status": "Create", "userId": "63cb939ea487e16bff04467a" }, user: {_id: '63cb939ea487e16bff04467a'}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });  
});
