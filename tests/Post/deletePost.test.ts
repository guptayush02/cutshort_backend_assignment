import deletePost from '../../src/controllers/Post/DeletePostController';
import { mockResponse, mockPostDelete } from '../utils/mock';

describe("Delete Post:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 parameter missing', async() => {
    await deletePost({params: {}}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return 200 Post Deleted successfully', async() => {
    mockPostDelete();
    await deletePost({body: {"userId": "63cb939ea487e16bff04467a"}, params: {id: '63cbd49472a7e1c277f0eb10'}}, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
