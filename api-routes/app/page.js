
"use client";
export default function Home() {
  const data = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  const handleClick = async () => {
    let a = await fetch("api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data})
    });
    let response = await a.json();
    console.log("Response:", response);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Nextjs Api Routes Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
