export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  console.log(id)
    const res = await fetch(
        `http://api.football-data.org/v4/competitions/${id}/standings`,
        {
          headers: {
            "X-Auth-Token": process.env.API_TOKEN? process.env.API_TOKEN : " ",
            "Content-Type": "application/json",
          },
        }
      );
    const data = await res.json()
   
    return Response.json({ data })
  }