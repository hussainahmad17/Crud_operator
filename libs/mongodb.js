import mongoose from "mongoose"
 const connectionDB =async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectionDB