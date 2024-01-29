import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Command, Download, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="grid min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex gap-4">
        <Card>
          <Avatar  className="h-52 w-52"/>
        </Card>

        <div className="grid justify-between">
          <div className="grid">
            <p className="text-lg">Hi, <span className="font-bold">T</span></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
              reprehenderit saepe ipsum ullam, incidunt harum amet asperiores 
              rerum neque nulla optio sapiente at velit! Dolorum necessitatibus 
              doloremque aspernatur? Distinctio, eum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
              reprehenderit saepe ipsum ullam, incidunt harum amet asperiores 
              rerum neque nulla optio sapiente at velit! Dolorum necessitatibus 
              doloremque aspernatur? Distinctio, eum!
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-2">
              <Linkedin />
              LinkedIn
            </Button>

            <Button variant="outline" className="flex gap-2">
              <Github />
              Github
            </Button>

            <Button className="flex gap-2">
              <Download />
              Baixar curriculo
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sobre</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
            reprehenderit saepe ipsum ullam, incidunt harum amet asperiores 
            rerum neque nulla optio sapiente at velit! Dolorum necessitatibus 
            doloremque aspernatur? Distinctio, eum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
            reprehenderit saepe ipsum ullam, incidunt harum amet asperiores 
            rerum neque nulla optio sapiente at velit! Dolorum necessitatibus 
            doloremque aspernatur? Distinctio, eum!
          </p>

          <div className="flex gap-4">
            <div className="grid items-center justify-center">
              <Card className="h-12 w-12 flex items-center justify-center">
                <Command className="h-6 w-6" />
                </Card>
              <p className="text-center">Swift</p>
            </div>

            <div className="grid items-center justify-center">
              <Card className="h-12 w-12 flex items-center justify-center">
                <Command className="h-6 w-6" />
                </Card>
              <p className="text-center">Swift</p>
            </div> 

            <div className="grid items-center justify-center">
              <Card className="h-12 w-12 flex items-center justify-center">
                <Command className="h-6 w-6" />
                </Card>
              <p className="text-center">Swift</p>
            </div> 

            <div className="grid items-center justify-center">
              <Card className="h-12 w-12 flex items-center justify-center">
                <Command className="h-6 w-6" />
                </Card>
              <p className="text-center">Swift</p>
            </div>

            <div className="grid items-center justify-center">
              <Card className="h-12 w-12 flex items-center justify-center">
                <Command className="h-6 w-6" />
                </Card>
              <p className="text-center">Swift</p>
            </div>     
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-2">
        <h2 className="text-lg font-bold">Projetos</h2>
        <div className="flex gap-4">
          <Card className="max-w-80">
            <CardHeader>
              <CardTitle className="flex gap-2">
                <Command/>
                Venuz
              </CardTitle>              
            </CardHeader>

            <CardContent className="grid gap-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                eaque quas earum distinctio nesciunt dolore iste voluptates totam
                explicabo consequatur tempora deserunt quam minima modi odit 
                culpa enim, autem quisquam!
              </p>

              <div className="flex justify-end">
                <Button variant="outline">
                  Acessar
                  <ArrowRight />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
