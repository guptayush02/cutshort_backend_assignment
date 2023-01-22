import getPosts from '../../src/controllers/Post/GetPostsController';
import { mockResponse, mockPostsGet } from '../utils/mock';

describe("Get Post:", () => {

  let res:any = {};
  beforeEach(() => {
    res = mockResponse();
  })

  it('should return 404 parameter missing', async() => {
    await getPosts({}, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  // TODO Will do later
  // it('should return 200 Posts Get successfully', async() => {
  //   mockPostsGet();
  //   await getPosts({query: {"userId": "63cb939ea487e16bff04467a"} }, res);
  //   expect(res.status).toHaveBeenCalledWith(200);
  // });
});
