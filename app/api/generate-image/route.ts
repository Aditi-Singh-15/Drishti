// import { NextResponse } from "next/server"

// export async function POST(request: Request) {
//   try {
//     const { prompt } = await request.json()

//     if (!prompt) {
//       return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
//     }

//     const apiKey = process.env.GEMINI_API_KEY

//     if (!apiKey) {
//       return NextResponse.json({ error: "Gemini API key is missing on server" }, { status: 500 })
//     }

//     const enhancedPrompt = `A positive, inspiring, and hopeful visualization of: ${prompt}. Show a bright, optimistic future scene with vibrant colors. Focus on empowerment, education, and progress. Style: realistic, detailed, bright lighting.`

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: `Generate an image based on this description: ${enhancedPrompt}`,
//                 },
//               ],
//             },
//           ],
//           generationConfig: {
//             temperature: 0.4,
//             topK: 32,
//             topP: 1,
//             maxOutputTokens: 4096,
//           },
//         }),
//       },
//     )

//     const data = await response.json()

//     if (!response.ok) {
//       return NextResponse.json(
//         { error: data.error?.message || "Failed to generate image" },
//         { status: response.status },
//       )
//     }

//     let imageUrl = null

//     try {
//       const text = data.candidates[0].content.parts[0].text
//       const urlMatch = text.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif)/i)
//       if (urlMatch) {
//         imageUrl = urlMatch[0]
//       } else {
//         const base64Match = text.match(/data:image\/(jpeg|png|gif);base64,[^\s]+/i)
//         if (base64Match) {
//           imageUrl = base64Match[0]
//         }
//       }
//     } catch (err) {
//       console.error("Error parsing Gemini response:", err)
//     }

//     if (!imageUrl) {
//       return NextResponse.json({
//         imageUrl: "/placeholder.svg?height=512&width=512",
//         message: "Gemini did not return an image. Using placeholder instead.",
//       })
//     }

//     return NextResponse.json({ imageUrl })
//   } catch (error) {
//     console.error("Error generating image:", error)
//     return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
//   }
// }


import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { prompt, apiKey } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key is required" }, { status: 400 })
    }

    // Enhanced prompt for positive future visualization
    const enhancedPrompt = `A positive, inspiring, and hopeful visualization of: ${prompt}. Show a bright, optimistic future scene with vibrant colors. Focus on empowerment, education, and progress. Style: realistic, detailed, bright lighting.`

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
                  text: `Generate an image based on this description: ${enhancedPrompt}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            topK: 32,
            topP: 1,
            maxOutputTokens: 4096,
          },
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Failed to generate image" },
        { status: response.status },
      )
    }

    // Extract image URL from response
    let imageUrl = null

    try {
      // Attempt to find an image in the response
      // Note: Gemini might return the image in different formats
      // This is a simplified approach - in production, you'd need more robust parsing
      const text = data.candidates[0].content.parts[0].text

      // Look for image URLs in the response
      const urlMatch = text.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif)/i)
      if (urlMatch) {
        imageUrl = urlMatch[0]
      } else {
        // If no direct URL, the response might contain base64 encoded image
        const base64Match = text.match(/data:image\/(jpeg|png|gif);base64,[^\s]+/i)
        if (base64Match) {
          imageUrl = base64Match[0]
        }
      }
    } catch (err) {
      console.error("Error parsing Gemini response:", err)
    }

    if (!imageUrl) {
      // If we couldn't extract an image, return a placeholder
      return NextResponse.json({
        imageUrl: "/placeholder.svg?height=512&width=512",
        message: "Gemini did not return an image. Using placeholder instead.",
      })
    }

    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error("Error generating image:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}