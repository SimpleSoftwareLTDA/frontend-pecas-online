import { revalidatePath } from "next/cache";

export async function GET(_req: Request) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
    const response = await fetch(`${backendUrl}/banner`);

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const bannerUrl = await response.text();
    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "no-store");
    revalidatePath("/api/banners");
    return new Response(bannerUrl, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    console.error("Failed to fetch banner:", error);
    return new Response("", { status: 200 });
  }
}
