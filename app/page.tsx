import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen text-2xl">
      <div className="sign mb-10 text-purple-600">Sign in</div>
      <div className="user mb-10">
        <input type="text" placeholder="メールアドレス" className="border border-gray-400 rounded px-2 py-1" />
      </div>
      <div className="pass mb-10">
        <input type="text" placeholder="パスワード" className="border border-gray-400 rounded px-2 py-1" />
      </div>
      <button className="bg-purple-600  text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        ログイン
      </button>
    </div>
    </>
  );
}
