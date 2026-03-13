import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function IntegrationFloatingButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/integrations"
            className="fixed bottom-12 right-28 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 border border-primary/20 p-2"
            aria-label="Ver Integrações"
          >
            <Image
              src="/images/logo-trillennium.png"
              alt="Trillennium"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="mb-2">
          <p className="text-sm font-medium">https://trillennium.inf.br/</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
