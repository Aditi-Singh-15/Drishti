import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")
    const apiKey = searchParams.get("apiKey")

    if (!query) {
      return NextResponse.json({ error: "Search query is required" }, { status: 400 })
    }

    if (!apiKey) {
      return NextResponse.json({ error: "YouTube API key is required" }, { status: 400 })
    }

    // Enhanced search query for educational content
    const enhancedQuery = `${query} education girls empowerment`

    // Call YouTube API to search for videos
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(enhancedQuery)}&type=video&key=${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "Failed to fetch videos" }, { status: response.status })
    }

    // Get video details (duration, view count, etc.)
    const videoIds = data.items.map((item: any) => item.id.videoId).join(",")

    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    const detailsData = await detailsResponse.json()

    if (!detailsResponse.ok) {
      return NextResponse.json(
        { error: detailsData.error?.message || "Failed to fetch video details" },
        { status: detailsResponse.status },
      )
    }

    // Combine search results with video details
    const videos = data.items.map((item: any) => {
      const details = detailsData.items.find((detail: any) => detail.id === item.id.videoId)

      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        duration: details?.contentDetails?.duration || "Unknown",
        viewCount: details?.statistics?.viewCount || "Unknown",
      }
    })

    return NextResponse.json({ videos })
  } catch (error) {
    console.error("Error fetching videos:", error)
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 })
  }
}

