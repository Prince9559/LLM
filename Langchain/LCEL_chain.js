import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash", 
    maxOutputTokens: 2048,
    temperature: 0.7,
    apiKey: process.env.GOOGLE_API_KEY,
});


const prompt = PromptTemplate.fromTemplate(
    "You are a helpful assistant. Answer the question: {question}"
);

const chain = prompt.pipe(model);

const response = await chain.invoke({
    question: "What is the future of AI in healthcare?",
});

console.log("Response from LLM:", response.text);