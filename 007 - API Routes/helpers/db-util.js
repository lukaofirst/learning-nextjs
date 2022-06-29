import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const client = await MongoClient.connect(process.env.MONGO_URI);

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();

    await db.collection(collection).insertOne(document);

    return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    const db = client.db();

    const documents = await db
        .collection(collection)
        .find(filter) // this changed - we use the "filter" parameter!
        .sort(sort)
        .toArray();

    return documents;
}
