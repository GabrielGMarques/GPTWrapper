const { default: axios } = require("axios");
const chatgptKey = require('../../env-config').openIaKey;

const OpenAIApi = require('openai');
const _openai = new OpenAIApi.OpenAI({ apiKey: chatgptKey });

class ChatGPTService {
  static async CreateConversation(prompt, model = "gpt-4o", instructions = []) {
    try {
      const completions = await _openai.chat.completions.create({
        model,
        messages: [
          ...instructions.map(message => ({ content: message, role: "system" })),
          { content: prompt, role: "user" }
        ]
      });
      
      return completions?.choices[0]?.message?.content;
    } catch (error) {
      console.error("Error in API request:", error);
    }
  }
}

module.exports = ChatGPTService;
