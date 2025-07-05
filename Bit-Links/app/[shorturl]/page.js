import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {

    const shorturl = (await params).shorturl;
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");
    const shortUrlExists = await collection.findOne({shortUrl:shorturl})

    if (shortUrlExists){
        redirect(shortUrlExists.url)
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}}`)
    }

  return <p>Your URL Page : {shorturl}</p>;
}