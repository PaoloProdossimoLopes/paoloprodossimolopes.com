import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PinnedRepos } from "@/components/ui/pinned-reops";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import profileImageUrl from '../../public/images/profile-image.jpeg'
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className="grid gap-8">
        <div className="flex gap-4 items-center max-lg:grid">
          <Card className="overflow-hidden h-52 w-52 p-1">
            <div className="h-full w-full rounded-sm overflow-hidden ">
              <Image
                className="rounded-sm"
                style={{objectFit: "cover"}}
                src={profileImageUrl}
                alt=""
              />
            </div>
          </Card>

          <div className="grid justify-between gap-4">
            <div className="grid gap-2">
              <p className="text-xl">
                Olá{" "}
                <span className="font-bold text-muted-foreground">{"<T>"}</span>
                ,
              </p>
              <p>
                Sou <span className="font-bold">Paolo Prodossimo Lopes</span>, Atuo como <span className="font-bold">Engenheiro de Software iOS</span>
                <br />
                especializado em criar experiências de usuário intuitivas e
                envolventes
                <br />
                desde 2020. Atuamente curso <span className="font-bold">Ciencia da computação</span>.
              </p>
            </div>

            <div className="flex gap-2 max-sm:grid">
              <Button variant="outline">
                <a
                  className="flex gap-2 items-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/paoloprodossimolopes/"
                >
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline">
                <a
                  className="flex gap-2 items-center"
                  target="_blank"
                  href="https://github.com/PaoloProdossimoLopes"
                >
                  <Github />
                  Github
                </a>
              </Button>

              <Button asChild variant="outline">
                <a
                  className="flex gap-2 items-center"
                  target="_blank"
                  href="mailto:paolo.prodossimo.lopes@gmail.com"
                >
                  <Mail />
                  Envirar email
                </a>
              </Button>

              <Button asChild>
                <Link
                  className="flex gap-2 items-center"
                  href="/files/resume.pdf"
                  target="_blank"
                  locale={false}
                >
                  <Download />
                  Baixar curriculo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <h2 className="text-lg font-bold">Projetos</h2>

          <PinnedRepos />
        </div>
      </div>
    </main>
  );
}
