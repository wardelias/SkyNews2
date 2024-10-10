'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-600 hover:text-[#C00]">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-2 z-50">
          <ul className="flex flex-col items-center">
            <li><a href="#" className="block py-2 px-4 text-gray-600 hover:text-[#C00]">الرئيسية</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-600 hover:text-[#C00]">اقتصاد</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-600 hover:text-[#C00]">رياضة</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-600 hover:text-[#C00]">تكنولوجيا</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-600 hover:text-[#C00]">صحة</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-600 hover:text-[#C00]">فن وثقافة</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}