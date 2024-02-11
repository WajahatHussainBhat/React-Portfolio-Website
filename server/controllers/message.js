
import Message from "../models/message.js";

export const message = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();

        res.status(201).json({ message: "Message sent successfully", data: newMessage });
    } catch (error) {
        res.status(500).json({ message: "Message not sent", error: error });
    }
};
