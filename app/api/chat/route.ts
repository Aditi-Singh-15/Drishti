import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { message, apiKey } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key is required" }, { status: 400 })
    }

    // Enhanced system prompt for financial and business mentoring
    const systemPrompt = `
      You are an AI Business & Financial Mentor specializing in advising women and girls in rural areas.
      Your goal is to provide practical, actionable advice on:
      1. Financial literacy (saving, budgeting, basic financial concepts)
      2. Small business opportunities suitable for rural areas
      3. Educational pathways and skill development
      4. Government schemes and programs available for women entrepreneurs
      5. Digital literacy and technology adoption

      Keep your responses concise, practical, and tailored to the rural context.
      Use simple language and avoid complex financial jargon.
      Provide specific, actionable steps whenever possible.
    `

    // Call Gemini API with the updated model (gemini-1.5-flash)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: systemPrompt,
                },
                {
                  text: message,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Failed to generate response" },
        { status: response.status },
      )
    }

    // Extract response text
    const responseText = data.candidates[0].content.parts[0].text

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

