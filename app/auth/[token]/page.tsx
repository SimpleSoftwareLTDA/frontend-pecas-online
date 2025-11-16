export const runtime = 'edge';
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage({ params }: { params: { token: string } }) {
  const { token } = params;
  const router = useRouter();

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      router.push("/");
    }
  }, [token, router]);

  return <div></div>;
}
