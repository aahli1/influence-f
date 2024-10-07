"use client";
import MainNav from '@/components/main-nav';
import React from 'react';
import { MdArrowBack} from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {


  return (



    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

    <MdArrowBack size={24} />
    Profile
    <FiSettings size={24} /> 
    
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

      <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  </div>


  );
}
