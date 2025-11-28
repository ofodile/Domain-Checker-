export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return Response.json({ error: "No domain provided" });
  }

  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/domain?domain=${domain}`,
      {
        headers: { "X-Api-Key": process.env.API_NINJA_KEY, }, // or use process.env.API_NINJA_KEY
      }
    );

    const data = await res.json();
    console.log(domain, data);

    let available;

if (data.registrar === null || data.registrar === "null") {
  available = false;
} else {
  available = true;
}


    return Response.json({
      available,
      whois: data,
    });

  } catch (error) {
    return Response.json({ error: error.message });
  }
}
