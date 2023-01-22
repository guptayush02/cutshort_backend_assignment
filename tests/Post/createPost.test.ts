import createPost from '../../src/controllers/Post/CreateController';
import { mockResponse, mockNewPost } from '../utils/mock';

describe("Create Post:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 userId not found', async() => {
    await createPost({body: {}, user: {}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 comment create successfully', async() => {
    mockNewPost();
    await createPost({body: {"post": "hey there 1", "userId": "63cb939ea487e16bff04467a"}, user: {_id: '63cb939ea487e16bff04467a'}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
