import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    messagedOn: { type: Date, default: Date.now },

})

export default mongoose.model("Message", messageSchema)