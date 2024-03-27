const express = require('express');
const OpenAI = require ('openai')
require('dotenv').config({path: '../.env'});
let prev = ''


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const textGeneration = async (prompt) => {
    console.log(prompt)
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            //model: "gpt-3.5-turbo-16k-0613",
            //model: "ft:gpt-3.5-turbo-0125:personal:our-blues:979G2mFK"
            messages: [
                {
                  "role": "system",
                  "content": "The following is a conversation with an AI assistant named Sharkie that can have meaningful conversations with users. The assistant is helpful, empathic, and friendly. Its objective is to make the user feel better by feeling heard. With each response, the AI assistant prompts the user to continue the conversation naturally."
                },
                {
                    "role": "system",
                    "content": `${prev}`
                  },
                  {
                      "role": "user",
                      "content": `${prompt}`
                  },
                  {
                    "role": "system",
                    "content": `${prev}`
                  },
                  {
                      "role": "user",
                      "content": `${prompt}`
                  }
              ],
            temperature: 1,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.06,
          });
          prev = response.choices[0].message.content
        return {
            status: 1,
            response: `${response.choices[0].message.content}`
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};


module.exports.AppChatBot = async (req, res) => {
    
    let action = req.body.queryResult.action;
    let queryText = req.body.queryResult.queryText;

    if (action === 'input.unknown') {
        let result = await textGeneration(queryText);
        if (result.status == 1) {
                    return res.json({ status: true, response: result.response })
        } else {
                return res.json({ status: true, response:"Sorry, I'm not able to help with that."  })
        }
    } else if(action == 'input.welcome') {
        res.send({
            fulfillmentText: `Hi, I am your virtual personal mental health assistant. How are you doing today?`
        })
    } else {
        res.send(
            {
                fulfillmentText: `No handler for the action ${action}.`
            }
        );
    }
}

