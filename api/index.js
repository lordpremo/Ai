export default function handler(req, res) {
  res.status(200).json({
    brand: "BROKEN LORD MEGA AI API 👑",
    message: "Karibu kwenye BROKEN LORD MEGA AI API — Powered by OpenAI",
    endpoints: {
      video: "/api/generate-video",
      image: "/api/generate-image",
      audio: "/api/generate-audio",
      chat: "/api/chat",
      all_in_one: "/api/all-in-one"
    },
    example_requests: {
      video: { prompt: "Tengeneza video ya jua linachomoza baharini" },
      image: { prompt: "Chora simba mwenye taji ya dhahabu" },
      audio: { text: "Hii ni sauti ya Broken Lord AI" },
      chat: { message: "Habari yako Broken AI?" },
      all_in_one: { mode: "video", prompt: "Robot anacheza muziki" }
    }
  });
}
