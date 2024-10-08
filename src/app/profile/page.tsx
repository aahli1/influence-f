"use client";
import MainNav from '@/components/main-nav';
import React from 'react';
import { MdArrowBack} from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import './profile.css'; 

export default function Home() {


  return (

<div className="container">

  <div className="row">
    <div className="arrow">←</div>
    <div className="profileText">Profile</div>
    <div className="settings">    <FiSettings size={24} /> </div> 
  </div>

  <div className="avatarRow"> 
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
      </Avatar>
  </div>

  <div className="row">
    <div className="centerText">Item 1</div>
        <div className="centerText">Item 2</div>
        <div className="centerText">Item 3</div>
  </div>

  <div className="textboxRow">
        <input type="text" className="textbox" placeholder="Enter text here" />
  </div>

</div>

  );
}
