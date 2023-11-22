import axios from "axios";

export async function getData(reqBody) {
  try {
    const res = await axios.post(process.env.API_URL, reqBody);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
