import mongoose from "mongoose";

const connectDB = (uri) => {

    mongoose.connect(uri).then(()=>{
      console.log('Database connected successfully'); 
    }).catch(()=>{
      console.error('Error connecting to database:', err);
      process.exit(1); 
    }); 

};

export {connectDB};