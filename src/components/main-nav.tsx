"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Bell, Star, History, Search } from "lucide-react";
import Favourites from './favourites';

export default function MainNav() {
  const [activeTab, setActiveTab] = useState('favourites');

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-4 border-b-2">
        <div className="col-span-1 sm:col-span-8 p-4">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-blue-600 transition-colors duration-300`}
            >
              <Settings />
              <span>Settings</span>
            </Button>
            <Button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'notifications' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-blue-600 transition-colors duration-300`}
            >
              <Bell />
              <span>Notifications</span>
            </Button>
            <Button
              onClick={() => setActiveTab('favourites')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'favourites' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-blue-600 transition-colors duration-300`}
            >
              <Star />
              <span>Favourites</span>
            </Button>
            <Button
              onClick={() => setActiveTab('history')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'history' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-blue-600 transition-colors duration-300`}
            >
              <History />
              <span>History</span>
            </Button>
          </div>
       
        </div>
        <div className="col-span-1 sm:col-span-4 p-4">
          <div className="relative mb-4">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 p-4 bg-white rounded-md shadow-md mt-4">
        {activeTab === 'settings' && <div>Settings Content</div>}
        {activeTab === 'notifications' && <div>Notifications Content</div>}
        {activeTab === 'favourites' && <div><Favourites /></div>}
        {activeTab === 'history' && <div>History Content</div>}
      </div>
    </>
  );
}
