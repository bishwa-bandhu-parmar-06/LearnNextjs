"use client" // This is a client component
// "use server" // This is a server component

import React, { useState } from 'react';
export default function Home() {
  const [count, setCount] = useState(0);
  // console.log("Hey I am Bishwa")
  return (
    <div>
      i am A component 
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Increament</button>
      </div>
    </div>
  );
}
