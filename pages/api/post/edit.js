import { connectDB } from "../../../src/app/util/database";

export default async function Handler(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("next");
    let result = await db.collection("post").find().toArray();
    let change = await db
      .collection("post")
      .updateOne({ _id: props.params.id }, { $set: req.body });
  }
}

//id값어떻게 가져옴
