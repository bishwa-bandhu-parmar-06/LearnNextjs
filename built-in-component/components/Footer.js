import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container flex items-center justify-around mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Facebook, Inc. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Facebook is a social media platform that connects people around the world.
        </p>
      </div>
    </footer>
  )
}

export default Footer