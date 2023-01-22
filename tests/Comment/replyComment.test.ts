import replyComment from '../../src/controllers/Comment/ReplyCommentController';
import { mockResponse, mockModel } from '../utils/mock';
import Reply from '../../src/models/replyComment'

describe("Create Comment Reply:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 missing parameter', async() => {
    await replyComment({body: {}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 comment reply create successfully', async() => {
    mockModel(Reply, 'save');
    await replyComment({body: {"reply": "hey there 1", "commentId": "a139ca9ea487e16bff04467a"}, user: {_id: '63cb939ea487e16bff04467a'}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
