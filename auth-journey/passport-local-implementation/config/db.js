import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Connected to ${connection.host} successfully`)
    } catch (err) { console.log(err) }
}

export default connectDB