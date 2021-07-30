import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FaceBook from '/assets/facebook.svg';
import Twitter from '/assets/twitter.svg';
import Youtube from '/assets/youtube.svg';

const routes = [
  { name: 'What we do', link: '/#wedo' },
  { name: 'About us', link: '/about' },
  { name: 'FAQS', link: '/#faq' },
  { name: 'Blog', link: '/' },
  { name: 'Contact', link: '/about/#contact' },
];

const Footer = ({}) => {
  return (
    <div className="bg-lightBlue py-16 lg:py-20">
      <div className="container mx-auto space-y-14 px-10">
        <div className="relative my-3.5 max-w-xl flex justify-center mx-auto">
          <Link href="/">
            <div>
              <Image src="/images/logo.png" width={250} height={40} className="object-cover" />
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center mt-14 text-lg text-gray-500 font-medium items-center gap-y-5 gap-x-14">
          {routes.map(({ name, link }) => (
            <Link href={link} key={link}>
              <a>{name}</a>
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-x-16">
          <FaceBook className="h-7" />
          <Twitter className="h-7" />
          <Youtube className="h-7" />
        </div>
        <p className="text-lg text-gray-500 text-center font-medium">
          © 2020 All Rights Reserved. Lagos Innovates IdeaHub
        </p>
      </div>
    </div>
  );
};

export default Footer;
