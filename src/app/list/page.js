import ListItem from "./ListItem";
import { connectDB } from "../util/database";

export default async function List() {
  let db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
    </div>
  );
}
