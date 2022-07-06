import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        let client;

        try {
            client = await MongoClient.connect(process.env.MONGO_URI);
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database' });
        }

        const db = client.db();

        try {
            const result = await db
                .collection('messages')
                .insertOne(newMessage);
            newMessage._id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Could not store message' });
            return;
        }

        client.close();

        res.status(201).json({
            message: 'Message saved successfully!',
            resultData: newMessage,
        });
    }
}

export default handler;
