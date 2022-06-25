import mongoose from "mongoose"

 
export default async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Connected to ${connection.host} successfully`)
    } catch (err) {
        console.log("Failed to connect to MongoDB database ", err)
        process.exit(1)
    }
}

