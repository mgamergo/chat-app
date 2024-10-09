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

export const getMessages = async (req, res) => {
  try {
    const {id: userToChatId} = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      partcipants: {$all: [userToChatId, senderId]}
    }).populate('messages')

    if(!conversation) return res.status(200).json([])

    const {messages} = conversation

    res.status(200).json(messages)
    
  } catch (error) {
    console.log("Error in getMessages Controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getLastMessages = async (req, res) => {
  try {
    const {id: userToChatId} = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      partcipants: {$all: [userToChatId, senderId]}
    }).populate({
        path: 'messages',
        options: { sort: { createdAt: -1 }, limit: 1 },
        select: 'message createdAt',
      })

      if (!conversation || conversation.messages.length === 0) {
        return res.status(200).json([]);
      } 

      return res.status(200).json(conversation.messages[0]);

  } catch (error) {
    console.log("Error in getMessages Controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}