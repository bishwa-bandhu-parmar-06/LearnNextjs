"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl("")
        setShortUrl("")
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Generate your short URLs
        </h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Original URL
            </label>
            <input
              type="text"
              id="url"
              placeholder="https://example.com/long-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="shortUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Short Url
            </label>
            <input
              type="text"
              id="shortUrl"
              placeholder="your-custom-text"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
            />
          </div>
          
          <button
            onClick={handleGenerate}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors cursor-pointer mt-2"
          >
            Generate Short URL
          </button>
        </div>

      </div>
        {/* Generated link display */}
      {generated && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <span className="font-bold text-lg">Your Short Link: </span>
          <code className="block mt-2">
            <Link 
              href={generated} 
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {generated}
            </Link>
          </code>
        </div>
      )}

    </div>
  );
};

export default Shorten;