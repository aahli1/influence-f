"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CirclePlus, Settings } from "lucide-react";
import profil from '../assets/profile.png';
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="logo-img" />
          <nav className="hidden sm:flex space-x-4">
            <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="/explore" className="text-gray-800 hover:text-gray-600">Explore</a>
            <a href="/campaigns" className="text-gray-800 hover:text-gray-600">Campaigns</a>
            <a href="/profile" className="text-gray-800 hover:text-gray-600">Profile</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 rounded-md">
          <Button className="text-white hover:text-gray-400 sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </Button>
          <Button className="text-gray-800 hover:text-gray-600 sm:inline-flex bg-gray-200 p-2 hidden hover:bg-gray-300 transition-colors duration-300">
            <CirclePlus className="text-gray-800 hover:text-gray-600" />
          </Button>
          <Image src={profil} alt="profile-img" className="w-10 h-10 rounded-full bg-gray-200 p-2" />
          <Button className="text-gray-800 hover:text-gray-600 sm:inline-flex bg-gray-200 p-2 hidden hover:bg-gray-300 transition-colors duration-300">
            <Settings className="text-gray-800 hover:text-gray-600" />
          </Button>
        </div>
      </header>
      <div className={`transition-max-height duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden sm:hidden`}>
        <nav className="flex flex-col space-y-2 mt-2 bg-gray-100 p-4 rounded-md shadow-md">
          <a href="/" className="text-gray-800 p-2 rounded-md bg-white hover:bg-gray-200 transition-colors duration-300">Home</a>
          <a href="/explore" className="text-gray-800 p-2 rounded-md bg-white hover:bg-gray-200 transition-colors duration-300">Explore</a>
          <a href="/campaigns" className="text-gray-800 p-2 rounded-md bg-white hover:bg-gray-200 transition-colors duration-300">Campaigns</a>
          <a href="/profile" className="text-gray-800 p-2 rounded-md bg-white hover:bg-gray-200 transition-colors duration-300">Profile</a>
        </nav>
      </div>
    </>
  );
}
