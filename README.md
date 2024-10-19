# ChatGPT Node Express API

This is a simple Node.js Express API that sends a prompt to the OpenAI API (ChatGPT) and returns the response. The API accepts a POST request with a body that contains the `prompt` field. 

## Features

- Accepts a POST request with a JSON body `{ "prompt": "your prompt" }`, path: `/api/questoin`
- Sends the prompt to the OpenAI API (ChatGPT).
- Returns the response from the OpenAI API.

## Requirements

- Node.js (version 14 or higher)
- OpenAI API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatgpt-api.git
   cd chatgpt-api
