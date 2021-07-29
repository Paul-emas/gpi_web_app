import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

const NavBar = ({}) => {
  return (
    <div className="w-full py-1.5  inset-0">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <Image src="/images/logo.png" width={250} height={40} className="object-cover" />
            </a>
          </Link>
          <div className="inline-flex gap-x-5 text-base font-medium text-gray-500 items-center">
            <div className="flex gap-x-7">
              <a className="hover:text-gray-600">About</a>
              <a className="hover:text-gray-600">Explore</a>
              <a className="hover:text-gray-600">Partners</a>
            </div>
            <div className="flex gap-x-4">
              <Button className="bg-primary border-primary text-white">Login</Button>
              <Button className="border-primary text-primary">Register</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
