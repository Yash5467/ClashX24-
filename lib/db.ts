import mongoose from 'mongoose'
export default async function ConnectDB() {
    if (!process.env.MONGO_URI)
        throw new Error("DB_URI is required");
    await mongoose.connect(process.env.MONGO_URI);
}