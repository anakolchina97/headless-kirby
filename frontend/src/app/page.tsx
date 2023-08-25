import Grid from "@/components/Grid";
import axios from "axios";

async function getData() {
  try {
    const api = process.env.API_URL || "";
    const res = await axios.post(api, {
      query: "page('home')",
      select: ["headline", "text"],
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const {
    result: { headline, text },
  } = await getData();

  return <Grid headline={headline} text={text} />;
}
