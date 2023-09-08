export default async function Write() {
  return (
    <div className="p-20">
      <form action="/api/post/new" method="POST">
        <input name="id" placeholder="아이디" />
        <input name="pw" placeholder="비밀번호" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
