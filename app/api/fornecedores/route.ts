export const runtime = 'edge';
export async function POST(req: Request) {
  const requestBody = await req.json();
  console.log("Request Body: ", requestBody);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/fornecedores`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}
