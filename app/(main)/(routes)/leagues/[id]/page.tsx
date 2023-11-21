"use client";

import { useEffect, useState } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const LeaguePage = ({ params }: pageProps) => {
  const [leagueData, setLeagueData] = useState(null);

  useEffect(() => {
    const fetchLeagueData = async () => {
      const res = await fetch(`/api/standings?id=${params.id}`);
      const data = await res.json();

      setLeagueData(data);
    };

    fetchLeagueData();
  }, []);

  if (leagueData === null) {
    return <div>Loading</div>;
  }

  console.log(leagueData);

  return <div>{params.id}</div>;
};

export default LeaguePage;
