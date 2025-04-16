import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema({
    title: String,
    description: String
}, { timestamps: true })


const Topics = mongoose.models.Topics || mongoose.model("Topics" , TopicSchema)
export default Topics