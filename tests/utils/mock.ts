import User from '../../src/models/user';
import Todo from '../../src/models/todo';
import Post from '../../src/models/post';
import { createToken } from '../../src/utils';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const mockResponse = () => {
  const res:any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

const mockNotExistModal = (Model: any, functionName: string) => {
  return jest.spyOn(Model, functionName).mockReturnValueOnce(null);
}

const mockJwt = () => {
  return jest.spyOn(jwt, 'sign').mockReturnValueOnce();
}

const mockBcryptCompare = () => {
  return jest.spyOn(bcrypt, 'compare').mockImplementation((result) => (result ? true : false));
}

const mockBcryptGenSaltSync = () => {
  return jest.spyOn(bcrypt, 'genSaltSync').mockReturnValueOnce('sddjjffjfjfjfjri');
}

const mockBcryptHashSync = () => {
  return jest.spyOn(bcrypt, 'hashSync').mockReturnValueOnce('sddjjffjfjfjfjri23dffjrui3owieieieiw3o');
}

const mockCreateUser = () => {
  return jest.spyOn(User.prototype, 'save').mockReturnValueOnce({"username": "ayush1", "email": "tahmid+6@gmail.com"} as Object);
}

const mockTodoFindOneAndUpdate = () => {
  return jest.spyOn(Todo, 'findOneAndUpdate').mockImplementation((result) => (result ? true : false));
}

const mockTodoFindOne = (object:Object) => {
  let response = { "task": "xyz1", "userId": "63cb939ea487e16bff04467a", "markComplete": false };
  if (Object.keys(object).length) {
    response.markComplete = true;
  }
  return jest.spyOn(Todo, 'findOne').mockReturnValueOnce(response as Object);
}

const mockTodoFind = () => {
  return jest.spyOn(Todo, 'find').mockReturnValueOnce([{}]);
}

const mockNewPost = () => {
  return jest.spyOn(Post.prototype, 'save').mockReturnValueOnce({} as Object);
}

const mockPostDelete = () => {
  return jest.spyOn(Post, 'findOneAndDelete').mockImplementation((result) => (result ? true : false));
}

// TODO
const mockPostsGet = () => {
  return Post.find().getPostsById().then((result:any) => result);
}

const mockModel = (Model: any, functionName: string) => {
  if (functionName === 'save') {
    return jest.spyOn(Model.prototype, functionName).mockReturnValueOnce([{}]);
  } else if (functionName.includes('Delete')) {
    return jest.spyOn(Model.prototype, functionName).mockImplementation((result) => (result ? true : false));
  } else {
    return jest.spyOn(Model, functionName).mockReturnValueOnce([{}]);
  }
  
}

export {
  mockResponse,
  mockNotExistModal,
  mockJwt,
  mockBcryptCompare,
  mockBcryptGenSaltSync,
  mockBcryptHashSync,
  mockCreateUser,
  mockTodoFindOneAndUpdate,
  mockTodoFindOne,
  mockTodoFind,
  mockNewPost,
  mockPostDelete,
  mockPostsGet,
  mockModel,
};
