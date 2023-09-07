import { connectDB } from "../../../src/app/util/database";

export default async function Handler(req, res) {
  if (req.method == "POST") {
    //next데이터
    let db = (await connectDB).db("next");
    //next안에 post데이터
    let result = await db.collection("post").find().toArray();
    //req.body.id가 있으면 저장됨
    let idCheck = await db.collection("post").findOne({ id: req.body.id });
    // idCheck가 있다면 400서버에 보내서 저장안됨
    if (idCheck) {
      return res.status(400).json("중복된 아이디입니다.");
    }
    // 저장됨
    let insert = db.collection("post").insertOne(req.body);
    return res.status(200).json("성공");
  }
}
