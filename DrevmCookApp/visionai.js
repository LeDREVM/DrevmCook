import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true
});

export async function analyzeFoodImage(base64Image) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: `
Analyse ce plat et retourne :

1. ingrédients probables
2. méthode de cuisson
3. style de cuisine
4. structure de recette complète DrevmCook (JSON)

Format strict :
{
  "ingredients": [],
  "cooking_method": "",
  "recipe_guess": "",
  "steps": [],
  "health_score": {
    "protein": 0,
    "anti_inflammatory": 0,
    "energy": 0
  }
}
`},
          {
            type: "image_url",
            image_url: { url: base64Image }
          }
        ]
      }
    ]
  });

  return JSON.parse(response.choices[0].message.content);
}