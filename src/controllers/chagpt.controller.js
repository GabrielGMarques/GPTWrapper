
const ChatGPTService = require('../services/chatgpt.service');
class ChatGPTController {
  static async getAnswer(req, res) {
    try {
      const { prompt } = req.body;
      const response = await ChatGPTService.CreateConversation(prompt);
      res.status(200).send({ response });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = ChatGPTController;
