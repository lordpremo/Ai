import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

function getBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { message } = getBody(req);

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const reply = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    });

    res.status(200).json({
      brand: "BROKEN LORD",
      type: "chat",
      reply: reply.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
