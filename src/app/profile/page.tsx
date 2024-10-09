"use client";
import MainNav from '@/components/main-nav';
import React from 'react';
import { MdArrowBack} from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import './profile.css'; 
import EditableInput from '@/components/EditableInput';



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
        <div className="centerText">Brief Introduction</div>
        
  </div>


  <div className="editrow">
        <div> <EditableInput />
        </div>
        
  </div>

  <div className="row">
    <div className="centerText">Age</div>
    <div></div>
        <div className="centerText">AUDUAD</div>
        <div className="centerText">19</div>
  </div>

  <div className="row">
    <div className="centerText">39</div>
    <div></div>
        <div className="centerText">primary diagnostic</div>
        <div className="centerText">Following</div>
  </div>

  
  
  <div className="textboxRow">
        <div>My Bio</div>      
  </div>

  <div style={{
      borderBottom: '1px solid #011', // Adjust thickness and color
      width: '100%', // Adjust width of the line (100% will span across the container)
      margin: '20px 0' // Optional margin for spacing
    }}></div>

  <div className="textbox">
        <div> <EditableInput />
        </div>
        
  </div>

  <div className="textboxRow">
        <div>My Story</div>
        
  </div>

  <div style={{
      borderBottom: '1px solid #011', // Adjust thickness and color
      width: '100%', // Adjust width of the line (100% will span across the container)
      margin: '20px 0' // Optional margin for spacing
    }}></div>


  <div className="textbox">
        <div> <EditableInput />
        </div>
        
  </div>

  <div className="textboxRow">
        <div>Stuff I'm into</div>
        
  </div>

  <div style={{
      borderBottom: '1px solid #011', // Adjust thickness and color
      width: '100%', // Adjust width of the line (100% will span across the container)
      margin: '20px 0' // Optional margin for spacing
    }}></div>

  <div className="textbox">
        <div> <EditableInput />
        </div>
        
  </div>
</div>

  );
}
