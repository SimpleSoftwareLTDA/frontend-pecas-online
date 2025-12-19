"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import dynamic from "next/dynamic";

const GrafanaPanel = dynamic(() => import("@/components/application/GrafanaPanel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted animate-pulse" />
  ),
});

export default function GrafanaPlayDemo() {
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve token from localStorage on component mount
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      console.log("Token retrieved from localStorage:", storedToken);
      verifyToken(storedToken); // Verify token immediately
    }
  }, [setToken]);

  const verifyToken = async (token: string | null) => {
    if (!token) {
      setError("Token não encontrado.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/verify?token=${token}`,
        {
          method: "GET",
          headers: {
            accept: "*/*",
          },
        }
      );

      if (response.status === 200) {
        setIsTokenVerified(true);
        setError(null);
      } else {
        setError("Token inválido ou expirado.");
        setIsTokenVerified(false);
        localStorage.removeItem("token");
        setToken(null);
      }
    } catch (error) {
      setError("Erro não esperado. Por favor, tente novamente mais tarde.");
      console.log("Token verification failed:", error);
    }
  };

  // Render nothing or a loading state until the token is verified
  if (!isTokenVerified) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Você não possui acesso... <span className="text-primary">ainda</span>!
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Para visualizar sua curva A e ter insights valiosos para o seu
          negócio, contrate um dos nossos{" "}
          <Link
            href="/pricing"
            className="text-primary font-semibold underline hover:text-primary/80 transition-colors"
          >
            planos
          </Link>
        </p>
      </div>
    );
  }

  // Render the protected content once the token is verified
  return (
    <main className="flex-1 w-full flex flex-col min-h-0">
      {/* Container ensures the panel stretches to available space between header and footer */}
      <div className="flex-1 min-h-0">
        <GrafanaPanel
          baseUrl="https://obs.pecasporcodigo.com.br"
          dashboardUid="e1g5z6a7k"
          panelId="4"
          height="100%"
          theme="dark"
          orgId="1"
          frameless
        />
      </div>
    </main>
  );
}
