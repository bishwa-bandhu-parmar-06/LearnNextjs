"use client";

import React from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
//   console.log("Pathname : ", pathname);
  return <div>
    <div>Navbar</div>
    <div>Your are Inside : {pathname}</div>
  </div>;
};

export default Navbar;
