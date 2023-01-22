import mongoose from 'mongoose';

export default async function dbConnect() {

  const dbUrl:string = process.env.DB_URL!;

  type ConnectionOptions = {
    useCreateIndex: boolean,
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean
  }
  
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  mongoose.set('strictQuery', false);
  mongoose.connect(dbUrl).then(()=>console.log("DB Connected"))
  .catch((err)=>console.log(err))
}
