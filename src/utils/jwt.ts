import jwt from "jsonwebtoken";

interface TokenData {
  token: string;
  expiresIn: number;
}


interface DataStoredInToken {
  _id: string;
}

interface UserData {
  _id: string;
  username: string;
  email: string;
}

const createToken = (user: UserData): TokenData => {
  const expiresIn = 1440 * 60; // an hour
  const secret:string = process.env.JWT_SECRET!;
  const dataStoredInToken: DataStoredInToken = {
    _id: user._id,
  };
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
  };
}

const decodeToken = async (token: TokenData) => {
  try {
    const secret:string = process.env.JWT_SECRET!;
    return jwt.verify(token.token, secret);
  } catch (error) {
    return error;
  }
}

export { createToken, decodeToken };
