import Hero from "@/components/Hero";
import axios from "axios";
import About from "@/components/About";

async function getData() {
  try {
    const api = process.env.API_URL || "";
    const res = await axios.post(api, {
      query: "page('home')",
      select: {
        images: {
          select: {
            url: true,
            type: true,
          },
        },
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const {
    result: { images },
  } = await getData();

  console.log(await getData());

  return (
    <>
      <Hero images={images} />
      <About />
    </>
  );
}
