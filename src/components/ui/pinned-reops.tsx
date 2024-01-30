"use client"

import { useEffect, useState } from "react";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "./button";
import { getPinnedRepos_v2 as getGithubPinnedRepositories } from "@kentaylorappdev/get-pinned-repos";

const githubPinnedReposSchema = z.array(
    z.object({
        repo: z.string(),
        description: z.string(),
    })
);

type GithubPinnedRepos = z.infer<typeof githubPinnedReposSchema>;

export function PinnedRepos() {
  const [pinnedRepos, setPinnedRepos] = useState<GithubPinnedRepos>([]);

  getGithubPinnedRepositories("PaoloProdossimoLopes").then((repos) => {
    setPinnedRepos(repos);
  });

  return (
    <div className="flex gap-4">
      {pinnedRepos.map((repo) => {
        return (
            <Card className="max-w-80" key={repo.repo}>
                <CardHeader>
                    <CardTitle className="flex gap-2">
                    <Command />
                    {repo.repo.split("/")[1]}
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-2">
                    <p>{repo.description}</p>

                    <div className="flex justify-end">
                    <Button variant="outline">
                        <a
                        className="flex gap-2 items-center"
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
