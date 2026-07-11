import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";
import { buildPrompt } from "../prompts/crmPrompt.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function extractCRMData(records) {
  const prompt = buildPrompt(records);

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an expert CRM data extraction engine. Always return only valid JSON. Do not include markdown or explanations.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.2,
  });

  let text = completion.choices?.[0]?.message?.content?.trim();

  if (!text) {
    throw new Error("AI returned an empty response.");
  }

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Invalid JSON returned by AI:");
    console.error(text);

    throw new Error("AI returned invalid JSON.");
  }
}