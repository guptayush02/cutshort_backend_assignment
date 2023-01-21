import mongoose from 'mongoose';

export default async function dbConnect() {

  const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/cutshort_backend_assignment";

  type ConnectionOptions = {
    useCreateIndex: boolean,
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean
  }
  
  const options: any = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  mongoose.connect(dbUrl).then(()=>console.log("DB Connected"))
  .catch((err)=>console.log(err))
}
