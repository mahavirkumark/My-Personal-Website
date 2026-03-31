import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import 'dotenv/config'; // Add this: npm install dotenv

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); 

// Use process.env.OPENAI_API_KEY instead of hardcoding
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; 

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o", // Changed from gpt-5
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    
    // Check for OpenAI specific errors
    if (data.error) {
        return res.status(500).json({ error: data.error.message });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server connection failed" });
  }
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
