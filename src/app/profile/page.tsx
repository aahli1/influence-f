"use client";
import MainNav from '@/components/main-nav';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { MdArrowBack } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditableInput from '@/components/EditableInput';

export default function Home() {
  return (
    <div className="w-full lg:w-3/5 bg-gray-50 mx-auto lg:mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="flex justify-between items-center mb-6">
        <MdArrowBack size={24} className="text-gray-500 cursor-pointer" />
        <h1 className="text-lg font-semibold text-purple-500">Profile</h1>
        <FiSettings size={24} className="text-gray-500 cursor-pointer" />
      </div>

      {/* Avatar Section */}
      <div className="flex justify-center mb-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      {/* Brief Introduction */}
      <div className="text-center mb-6">
        <h2 className="text-md font-semibold mb-2">Brief Introduction</h2>
        <div className="mx-auto w-full max-w-sm justify-center">
          <EditableInput />
        </div>
      </div>

      {/* Age and Diagnostic Information */}
      <div className="grid grid-cols-3 gap- mb-6 text-center">
        <div>
          <h3 className="text-sm font-semibold">Age</h3>
          <p className="text-lg">19</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">AUDUAD</h3>
          <p className="text-lg">Primary Diagnostic</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Following</h3>
          <p className="text-lg">39</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <h2 className="text-md font-semibold mb-2">My Bio</h2>
        <div className="border-b border-gray-300 my-2"></div>
        <EditableInput />
      </div>

      {/* My Story Section */}
      <div className="mb-6">
        <h2 className="text-md font-semibold mb-2">My Story</h2>
        <div className="border-b border-gray-300 my-2"></div>
        <EditableInput />
      </div>

      {/* Interests Section */}
      <div className="mb-6">
        <h2 className="text-md font-semibold mb-2">Stuff I'm Into</h2>
        <div className="border-b border-gray-300 my-2"></div>
        <EditableInput />
      </div>
    </div>
  );
}
