"use client"

import { Menu } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AdminNavbar = ({ toggleSidebar }) => {
    
  return (
    <div className="h-16 shadow-md bg-gradient-to-tr from-gray-100 to-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          onClick={toggleSidebar}
          className="p-1 bg-white rounded-md hover:bg-main shadow-md cursor-pointer group"
        >
          <Menu className="text-main group-hover:text-white hover:text-white transition duration-200" />
        </div>
        <Image width={500} height={500} src="/assets/logo.png" alt="Logo" className="w-40" />
      </div>
    </div>
  );
};

export default AdminNavbar;
