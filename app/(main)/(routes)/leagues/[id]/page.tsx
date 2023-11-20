"use client";

async function getData(id: string) {
  const res = await fetch(
    `https://api.football-data.org/v4/competitions/${id}/standings`,
    {
      method: "GET",
      headers: {
        "X-Auth-Token": "d6ada350127b4ca7863ed0d9f5c451a1",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

interface pageProps {
  params: {
    id: string;
  };
}

const LeaguePage = ({ params }: pageProps) => {
  getData(params.id.toUpperCase());

  return <div>test</div>;
};

export default LeaguePage;
