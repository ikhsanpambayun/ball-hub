"use client";

import { LeagueStyle } from "@/components/logos";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { table } from "console";

interface pageProps {
  params: {
    id: string;
  };
}

const LeaguePage = ({ params }: pageProps) => {
  const [leagueData, setLeagueData] = useState(null);
  const style = LeagueStyle(params.id);

  useEffect(() => {
    const fetchLeagueData = async () => {
      const res = await fetch(`/api/standings?id=${params.id}`);
      const data = await res.json();

      setLeagueData(data.data);
    };

    fetchLeagueData();
  }, []);

  if (leagueData === null || leagueData === undefined) {
    return <div>Loading</div>;
  }

  interface LeagueTableProps {
    draw: number;
    form: any;
    goalDifference: number;
    goalsAgainst: number;
    goalsFor: number;
    lost: number;
    playedGames: number;
    points: number;
    position: number;
    won: number;
    team: {
      crest: string;
      id: number;
      name: string;
      shortName: string;
      tla: string;
    };
  }

  interface LeagueTablesProps {
    group: string;
    stage: string;
    type: string;
    table: Array<LeagueTableProps>;
  }

  console.log(leagueData);

  const leagueTables = leagueData["standings"] as Array<LeagueTablesProps>;

  console.log(leagueTables);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative w-full">
        <div className={cn("w-full league-card overflow-hidden", style)}>
          <div className="relative h-full w-full isolate md:pt-32 pt-20 md:pb-10 pb-5 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5 before:bg-[url('/assets/bg/standing-bg.svg')] before:absolute before:-z-[1] before:w-full before:h-full before:left-0 before:top-0 before:opacity-20">
            <div className="flex flex-col md:gap-5 gap-2">
              <Image
                src={leagueData["competition"]["emblem"]}
                width={100}
                height={100}
                alt="league emblem"
                className="w-20 object-contain aspect-square"
              />
              <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm: sm:text-3xl text-2xl font-bold dark:text-background lg:max-w-none max-w-[70vw]">
                {leagueData["competition"]["name"]}
              </h1>
              <div className="flex gap-2 items-center">
                <Image
                  src={leagueData["area"]["flag"]}
                  width={30}
                  height={30}
                  alt="league flag"
                  className=""
                />
                <p className="font-medium dark:text-background">
                  {leagueData["area"]["name"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5 py-5 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5 text-sm text-muted-foreground">
        <div className="flex-1 flex-col border bg-background/20 p-4 rounded-xl backdrop-blur-sm">
          <p>Type</p>
          <p className="text-foreground font-semibold">
            {leagueData["competition"]["type"]}
          </p>
        </div>
        <div className="flex-1 flex-col border bg-background/20 p-4 rounded-xl backdrop-blur-sm">
          <p>Season</p>
          <p className="text-foreground font-semibold">2023</p>
        </div>
        <div className="flex-1 flex-col border bg-background/20 p-4 rounded-xl backdrop-blur-sm">
          <p>Matchday</p>
          <p className="text-foreground font-semibold">
            {leagueData["season"]["currentMatchday"]}
          </p>
        </div>
        <div className="flex-1 flex-col border bg-background/20 p-4 rounded-xl backdrop-blur-sm">
          <p>Start Date</p>
          <p className="text-foreground font-semibold">
            {leagueData["season"]["startDate"]}
          </p>
        </div>
        <div className="flex-1 flex-col border bg-background/20 p-4 rounded-xl backdrop-blur-sm">
          <p>End Date</p>
          <p className="text-foreground font-semibold">
            {leagueData["season"]["endDate"]}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:py-20 py-10 gap-5 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5">
        {leagueTables.map((leagueTable, index) => {
          return (
            <div
              key={index}
              className="bg-background/20 md:p-5 rounded-xl backdrop-blur-sm"
            >
              {leagueTable.group && (
                <p className="mb-2 font-semibold">{leagueTable.group}</p>
              )}
              <Table className="sm:text-sm text-xs">
                <TableHeader>
                  <TableRow>
                    <TableHead className="md:w-[100px] md:p-4 md:pl-0 p-0 pl-1">
                      <span className="md:block hidden">Position</span>
                    </TableHead>
                    <TableHead className="w-full md:p-4 p-1">Club</TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2">
                      <span className="md:block hidden">Played</span>
                      <span className="md:hidden">Pl</span>
                    </TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2">
                      <span className="md:block hidden">Won</span>
                      <span className="md:hidden">W</span>
                    </TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2">
                      <span className="md:block hidden">Draw</span>
                      <span className="md:hidden">D</span>
                    </TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2">
                      <span className="md:block hidden">Lost</span>
                      <span className="md:hidden">L</span>
                    </TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2 lg:table-cell hidden">
                      <span>GF</span>
                    </TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2 lg:table-cell hidden">
                      <span>GA</span>
                    </TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2">GD</TableHead>
                    <TableHead className="md:w-[50px] md:p-4 p-2">
                      <span className="md:block hidden">Points</span>
                      <span className="md:hidden">Pts</span>
                    </TableHead>
                    <TableHead className="md:w-[100px] md:p-4 p-2 lg:table-cell hidden">
                      <span>Form</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leagueTable.table.map((data, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="md:p-4 md:pl-0 p-0 pl-1">
                          {data.position}
                        </TableCell>
                        <TableCell className="w-full md:p-4 p-2">
                          <div className="gap-2 2xl:flex hidden items-center">
                            <Image
                              src={data.team.crest}
                              width={20}
                              height={20}
                              alt="team logo"
                              className="object-contain"
                            />
                            {data.team.name}
                          </div>
                          <div className="gap-2 2xl:hidden md:flex hidden items-center">
                            <Image
                              src={data.team.crest}
                              width={20}
                              height={20}
                              alt="team logo"
                              className="object-contain"
                            />
                            {data.team.shortName}
                          </div>
                          <div className="gap-2 md:hidden flex items-center">
                            <Image
                              src={data.team.crest}
                              width={20}
                              height={20}
                              alt="team logo"
                              className="object-contain"
                            />
                            {data.team.tla}
                          </div>
                        </TableCell>
                        <TableCell className="md:p-4 p-2">
                          {data.playedGames}
                        </TableCell>
                        <TableCell className="md:p-4 p-2">{data.won}</TableCell>
                        <TableCell className="md:p-4 p-2">
                          {data.draw}
                        </TableCell>
                        <TableCell className="md:p-4 p-2">
                          {data.lost}
                        </TableCell>
                        <TableCell className="lg:table-cell hidden">
                          {data.goalsFor}
                        </TableCell>
                        <TableCell className="lg:table-cell hidden">
                          {data.goalsAgainst}
                        </TableCell>
                        <TableCell className="md:p-4 p-2">
                          {data.goalDifference}
                        </TableCell>
                        <TableCell className="md:p-4 p-2">
                          {data.points}
                        </TableCell>
                        <TableCell className="lg:table-cell hidden">
                          TBA
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaguePage;
