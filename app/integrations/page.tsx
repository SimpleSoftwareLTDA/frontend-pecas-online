import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Settings, Target } from "lucide-react";

export default function IntegrationsPage() {
  return (
    <section className="bg-background body-font overflow-hidden min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 mt-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-foreground">
            Integrações
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-primary font-medium">
            Peças por Código agora é integrado ao Sistema Trillennium!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-muted p-8 rounded-2xl shadow-sm border">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Temos o prazer de anunciar que o portal Peças por Código possui integração total com as soluções de gestão da Trillennium. Essa parceria foi desenhada para eliminar processos manuais e dar total autonomia ao lojista.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Com esta nova funcionalidade, você não precisa mais perder tempo enviando arquivos de estoque manualmente. Agora, tudo funciona de forma 100% automática: o próprio cliente configura a integração uma única vez e o sistema se encarrega de manter as informações atualizadas em tempo real.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Fim dos uploads manuais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-md">
                Esqueça a rotina de exportar e importar planilhas ou arquivos. Automatize seu fluxo de trabalho.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Sincronização em tempo real</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-md">
                Seu estoque no site reflete exatamente o que você tem na prateleira, sem atrasos ou discrepâncias.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Configuração Simplificada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-md">
                O processo é intuitivo e feito diretamente pelo menu do sistema Trillennium. Configure uma vez e esqueça.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Foco no que importa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-md">
                Menos tempo no processo operacional e mais tempo fechando vendas e atendendo seus clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-20 max-w-3xl mx-auto">
          <p className="text-xl font-medium text-foreground italic">
            &quot;Unimos a inteligência do Peças por Código com a robustez da Trillennium para que sua única preocupação seja atender bem o seu cliente.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
