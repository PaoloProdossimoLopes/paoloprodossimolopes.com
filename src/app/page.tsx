"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Command, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="grid min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex gap-4 items-center">
        <Card className="overflow-hidden h-52 w-52 p-1">
          <Avatar className="h-full w-full rounded-sm">
            <AvatarImage className="rounded-sm" src="https://media.licdn.com/dms/image/C5603AQEN25g65QdpBA/profile-displayphoto-shrink_400_400/0/1603466446875?e=1712188800&v=beta&t=h4LsF2w4WqndfPMyXERohEBQh82fwWvSI-YHfmk3AGw" alt="Paolo Prodossimo Lopes" />
            <AvatarFallback className="rounded-sm">PPL</AvatarFallback>
          </Avatar>
        </Card>

        <div className="grid justify-between gap-4">
          <div className="grid gap-2">
            <p className="text-xl">
              Olá <span className="font-bold text-muted-foreground">{"<T>"}</span>,
            </p>
            <p>
              Sou Paolo Prodossimo Lopes, um engenheiro de software iOS<br />
              especializado em criar experiências de usuário intuitivas e envolventes<br />
              desde 2020. Atuamente curso Ciencia da computação.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <a className="flex gap-2 items-center" href="https://www.linkedin.com/in/paoloprodossimolopes/">
                <Linkedin />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline">
              <a className="flex gap-2 items-center" href="https://github.com/PaoloProdossimoLopes">
                <Github />
                Github
              </a>
            </Button>

            <Button asChild variant="outline">
              <a className="flex gap-2 items-center" href="mailto:paolo.prodossimo.lopes@gmail.com">
                <Mail />
                Envirar email
              </a>
            </Button>

            <Button asChild>
              <Link href="/files/resume.pdf" target="_blank" locale={false}>
                <Download />
                  Baixar curriculo
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <h2 className="text-lg font-bold">Projetos</h2>
        <div className="flex gap-4">
          <Card className="max-w-80">
            <CardHeader>
              <CardTitle className="flex gap-2">
                <Command />
                Venuz
              </CardTitle>
            </CardHeader>

            <CardContent className="grid gap-2">
              <p>
                É um <span>Design System</span> baseado em tokens que te permite
                criar interfaces de usuário com flexibilidade e estilo em
                cada composição.
              </p>

              <div className="flex justify-end">
                <Button variant="outline">
                  <a className="flex gap-2 items-center" href="https://github.com/PaoloProdossimoLopes/venuz">
                    Ver mais
                    <ArrowRight />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}