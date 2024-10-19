const { default: axios } = require('axios');
const chatgptKey = require('../../env-config').openIaKey;
const OpenAIApi = require('openai');
const _openai = new OpenAIApi.OpenAI({ apiKey: chatgptKey });
const FormData = require('form-data');
const fs = require('fs');

class ChatGPTService {


  static async CreateConversation(prompt, model = 'gpt-4', instructions = []) {
    try {
      const completions = await _openai.chat.completions.create({
        model,
        messages: [
          ...instructions.map(message => ({ content: message, role: 'system' })),
          { content: prompt, role: 'user' }
        ]
      });

      return completions?.choices[0]?.message?.content;
    } catch (error) {
      console.error('Error in API request:', error);
    }
  }
  
  static async CreateConversationWithImage(prompt, imageBuffer, model = 'gpt-4o-mini') {
    try {
      // Convert the image buffer to base64
      const base64Image = imageBuffer.toString('base64');

      // Construct the payload with the text prompt and base64 image data
      const response = await _openai.chat.completions.create({
        model: model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,  // Include the base64 encoded image
                },
              },
            ],
          },
        ],
      });

      return response.choices[0]?.message?.content;

    } catch (error) {
      console.error('Error in API request:', error);
      throw error;
    }
  }
}


module.exports = ChatGPTService;
