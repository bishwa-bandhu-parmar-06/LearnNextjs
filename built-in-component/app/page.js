import Image from "next/image";
export default function Home() {
  return (
    <div>

      <h1>I am Home Page.</h1>
      {/* <Image width={200} height={300} src="https://picsum.photos/200/300" alt="" /> */}
      <div className="relative w-64 h-96">
        <Image fill="true" src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  );
}
