import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "./button";
import { getPinnedRepos_v2 as getGithubPinnedRepositories } from "@kentaylorappdev/get-pinned-repos";

export async function PinnedRepos() {
  const pinnedRepos = await getGithubPinnedRepositories("PaoloProdossimoLopes")

  return (
    <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {pinnedRepos.map((repo) => {
        return (
            <Card className="max-w-80" key={repo.repo}>
                <CardHeader>
                    <CardTitle className="flex gap-2">
                    <Code />
                    {repo.repo.split("/")[1]}
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-4">
                    <p>{repo.description}</p>

                    <div className="flex justify-end">
                    <Button variant="outline">
                        <a
                        className="flex gap-2 items-center"
                        target="_blank"
                        href={`https://github.com/${repo.repo}`}
                        >
                        Ver mais
                        <ArrowRight />
                        </a>
                    </Button>
                    </div>
                </CardContent>
            </Card>
        )
      })}
    </div>
  );
}
