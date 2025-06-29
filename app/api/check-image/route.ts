import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Prediction ID is required" }, { status: 400 })
    }

    // Check if we have a Replicate API token
    const replicateApiToken = process.env.REPLICATE_API_TOKEN

    if (!replicateApiToken) {
      return NextResponse.json({ error: "Replicate API token is not configured" }, { status: 500 })
    }

    // Call Replicate API to check prediction status
    const response = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${replicateApiToken}`,
        "Content-Type": "application/json",
      },
    })

    const prediction = await response.json()

    if (response.status !== 200) {
      return NextResponse.json(
        { error: prediction.error || "Failed to check image status" },
        { status: response.status },
      )
    }

    return NextResponse.json(prediction)
  } catch (error) {
    console.error("Error checking image status:", error)
    return NextResponse.json({ error: "Failed to check image status" }, { status: 500 })
  }
}

