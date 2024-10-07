import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    console.log(receiverId);
    
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      partcipants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        partcipants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({ senderId, receiverId, message });

    if (newMessage) conversation.messages.push(newMessage._id);

    // TODO: SocketIo functionality will go here!!

    // await conversation.save();
    // await newMessage.save(); 

    await Promise.all([conversation.save(), newMessage.save()])

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMesasge Controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
