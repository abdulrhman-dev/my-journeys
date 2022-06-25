import mongoose from "mongoose"

const UserScehma = mongoose.Schema({
    username: String,
    password: String
})

export default mongoose.model("User", UserScehma)