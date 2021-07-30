import React from 'react';
import Image from 'next/image';

import ExploreIcon from '../../assets/explore.svg';
import BulbIcon from '../../assets/bulb.svg';
import BookIcon from '../../assets/book.svg';
import ChatIcon from '../../assets/chat.svg';
import IQIcon from '../../assets/development.svg';

const Explore = () => {
  return (
    <section className="bg-white mt-44 py-16">
      <div className="container mx-auto px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold">
            Let's <span className="text-primary">Explore</span> Together
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mx-auto mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam, ratione dolor ipsum
          </p>
        </div>
        <div className="grid grid-cols-2 mt-6 gap-x-20">
          <div>
            <ExploreIcon />
          </div>
          <div className="flex mt-16 gap-x-12 flex-wrap gap-y-2">
            <div className="w-60 h-52 px-6 py-2.5 text-center border-2 rounded-2xl border-dotted hover:border-primary hover:border-solid explore-card">
              <BulbIcon width={80} height={80} className="mx-auto mt-1" />
              <h1 className="text-xl mt02 font-semibold text-gray-700 group-hover:text-white">Ideas</h1>
              <p className="text-sm text-gray-400 group-hover:text-white">Fine tune and share your business ideas</p>
            </div>
            <div className="w-60 h-52 px-6 py-2.5 text-center border-2 rounded-2xl border-dotted hover:border-primary hover:border-solid explore-card">
              <BookIcon width={80} height={80} className="mx-auto mt-1" />
              <h1 className="text-xl mt-2 font-semibold text-gray-700">Mentorship</h1>
              <p className="text-sm text-gray-400">Get business mentorship and development processes</p>
            </div>
            <div className="w-60 h-52 px-6 py-2.5 text-center border-2 rounded-2xl border-dotted hover:border-primary hover:border-solid explore-card">
              <ChatIcon width={80} height={80} className="mx-auto mt-1" />
              <h1 className="text-xl mt-2 font-semibold text-gray-700">Forum</h1>
              <p className="text-sm text-gray-400">Connect with enterpreneurs and mentors</p>
            </div>
            <div className="w-60 h-52 px-6 py-2.5 text-center border-2 rounded-2xl border-dotted hover:border-primary hover:border-solid explore-card">
              <IQIcon width={80} height={80} className="mx-auto mt-1" />
              <h1 className="text-xl mt-2 font-semibold text-gray-700">Mentorship</h1>
              <p className="text-sm text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
