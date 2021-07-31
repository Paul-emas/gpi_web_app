import React from 'react';

import TeamIcon from '../../assets/team.svg';
import BlobIcon from '../../assets/blob.svg';
import Button from '../Button';
import Link from 'next/link';

const Header = ({}) => {
  return (
    <section className="header top-16">
      <BlobIcon className="blob" />
      <div className="container mx-auto xl:px-10 pt-32 2xl:pt-32">
        <div className="grid xl:grid-cols-2">
          <div className="mt-36 2xl:mt-44">
            <h1 className="text-7xl text-gray-800 font-bold max-w-xl leading-snug">
              We Bring <span className="text-primary">Ideas</span> to <span className="text-primary">Market</span>Place
            </h1>
            <p className="text-xl font-medium text-gray-500 lg:leading-snug max-w-lg mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas odit consectetur, voluptate commodi
            </p>
            <Link href="/register">
              <a>
                <Button className="bg-primary text-xl px-14 py-4 border-white text-white mt-10">Get Started</Button>
              </a>
            </Link>
          </div>
          <div>
            <TeamIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
