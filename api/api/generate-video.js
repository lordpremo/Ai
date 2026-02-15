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

  const { prompt } = getBody(req);

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const video = await client.videos.generate({
      model: "gpt-4o-mini-tts",
      prompt
    });

    res.status(200).json({
      brand: "BROKEN LORD",
      type: "video",
      result: video
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
