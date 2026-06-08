// aiExtractor.js

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function extractRecipe(content) {
  const res = await openai.chat.completions.create({
    model: "gpt-5",
    messages: [
      { role: "system", content: "Expert DrevmCook" },
      { role: "user", content }
    ]
  });

  return JSON.parse(res.choices[0].message.content);
}