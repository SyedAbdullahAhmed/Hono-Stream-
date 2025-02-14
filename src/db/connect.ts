import mongoose from 'mongoose';

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("DB connected sucessfully")
      } catch (error:any) {
        console.log("DB connected failed")
        console.error(error.message);
        process.exit(1);
      }

}

export default dbConnect;
