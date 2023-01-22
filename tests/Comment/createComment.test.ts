import createComment from '../../src/controllers/Comment/CreateCommentController';
import { mockResponse, mockModel } from '../utils/mock';
import Comment from '../../src/models/comment'

describe("Create Comment:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 missing parameter', async() => {
    await createComment({body: {}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 comment create successfully', async() => {
    mockModel(Comment, 'save');
    await createComment({body: {"comment": "hey there 1", "postId": "a139ca9ea487e16bff04467a"}, user: {_id: '63cb939ea487e16bff04467a'}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
