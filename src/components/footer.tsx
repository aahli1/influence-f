"use client";

import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="grid grid-cols-12 items-center bg-gray-100 p-4 shadow-md">
      <div className="col-span-6 flex justify-start">
        <Image src={logo} alt="logo-img" />
      </div>
      <div className="col-span-6 flex justify-end">
        <p>© 2077 Mainnet Design. All rights reserved.</p>
      </div>
    </div>
  );
}
