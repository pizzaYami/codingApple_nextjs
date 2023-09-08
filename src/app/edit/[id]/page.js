import { connectDB } from "../../../app/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  let db = (await connectDB).db("next");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
