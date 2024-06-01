import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 500,
    temperature: 0.7,
    topP: 0.6,
    topK: 16,
  };
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig});

export async function POST(request: NextRequest) {
  console.log(request)
	let {messages} = await request.json();
  console.log(messages)

	//const prompt = messages[messages.length - 1].content;
	
  const result = await model.generateContent(messages);
  console.log(result.response.text())
	return NextResponse.json({response:result.response.text()} , { status: 200 });
}