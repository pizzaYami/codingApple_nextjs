import { connectDB } from "../../src/app/util/database";

export default async function handler(req, res) {
  let db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();
  const date = new Date();
  // res.status(200).json(result);
  res.status(200).json(date);
}
