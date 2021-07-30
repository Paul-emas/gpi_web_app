import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

const NavBar = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div className={`${scrolled ? 'bg-white border-b z-10' : ''} w-full py-1.5 fixed left-0 top-0`}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <Image src="/images/logo.png" width={250} height={40} className="object-cover" />
            </a>
          </Link>
          <div className="inline-flex gap-x-5 text-base font-medium text-gray-500 items-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
