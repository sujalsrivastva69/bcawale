// Returns a few GIF urls for a search phrase. The Giphy key stays on the server.
export async function GET(request) {
  const q = new URL(request.url).searchParams.get("q")?.trim().slice(0, 80);
  const key = process.env.GIPHY_API_KEY;

  if (!q || !key) {
    return Response.json({ urls: [] });
  }

  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${encodeURIComponent(
        key
      )}&q=${encodeURIComponent(q)}&limit=8&rating=pg-13&lang=en`
    );
    if (!res.ok) return Response.json({ urls: [] });

    const data = await res.json();
    const urls = (data.data ?? [])
      .map((g) => g.images?.fixed_height?.url)
      .filter(Boolean);
    return Response.json({ urls });
  } catch {
    return Response.json({ urls: [] });
  }
}
