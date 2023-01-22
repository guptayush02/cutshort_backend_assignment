import updatePost from '../../src/controllers/Post/UpdatePostController';
import { mockResponse, mockTodoFindOneAndUpdate, mockModel } from '../utils/mock';
import Post from '../../src/models/post'

describe("Update Post:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 missing params', async() => {
    await updatePost({body: { }, params: {}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 Post update successfully', async() => {
    mockModel(Post, 'findOneAndUpdate');
    mockModel(Post, 'find');
    await updatePost({body: { "post": "update post", "userId": "63cb939ea487e16bff04467a" }, params: { id: '63cbcdcd177271d9915614f3' }}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

});
