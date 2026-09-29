import { config } from "dotenv";
config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";


const model = new ChatGoogleGenerativeAI({
  model: "models/gemini-2.5-flash",
  maxOutputTokens: 2048,
  temperature: 0.7,
  apiKey: process.env.GOOGLE_API_KEY,
});


const prompt = PromptTemplate.fromTemplate(
  "Explain the concept of {topic} to a beginner."
);

const chain = new LLMChain({
  llm: model,
  prompt: prompt,
});

const res = await chain.run("quantum computing");
console.log("🤖 Gemini Response:\n", res);