import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.trhh4.mongodb.net/nextjs-auth?retryWrites=true&w=majority`
    );

    return client;
};