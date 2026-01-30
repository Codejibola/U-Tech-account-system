import * as Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  const { receiverId, content } = req.body;

  const message = await Message.sendMessage(
    req.user.id,
    receiverId,
    content
  );

  res.status(201).json(message);
};

export const getUserMessages = async (req, res) => {
  const messages = await Message.getUserMessages(req.user.id);
  res.json(messages);
};
