import { ObjectId } from "mongodb";
import { connectDB } from "../../../src/app/util/database";

export default async function Handler(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("next");
    let copyData = { title: req.body.title, content: req.body.content };
    let change = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: copyData });
    res.redirect(302, "/list");
  }
}

//id값어떻게 가져옴
