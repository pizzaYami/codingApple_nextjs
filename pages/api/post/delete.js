import { connectDB } from "../../../src/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.body);

  if (req.method == "DELETE") {
    let db = (await connectDB).db("next");
    let deletes = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
    return res.status(200).json("성공");
  }
}
