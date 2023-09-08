import { connectDB } from "../util/database";
import Link from "next/link";

export default async function List() {
  let db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        // eslint-disable-next-line react/jsx-key
        <div className="list-item">
          <Link href={"/detail/" + result[i]._id}>
            <h4>{a.title}</h4>
          </Link>
          <Link href={"/edit/" + result[i]._id}>수정하기</Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
