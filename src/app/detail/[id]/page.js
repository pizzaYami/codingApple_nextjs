import Link from "next/link";
import { connectDB } from "../../util/database";

export default async function Detail(props) {
  let db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
