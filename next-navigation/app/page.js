"use client"
import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <div>
      Hey!, This is from Home Page.

    </div>
  );
}
