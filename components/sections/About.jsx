import React from 'react';

import LoginIcon from '../../assets/login.svg';
import GroupIcon from '../../assets/group.svg';
import ConnectIcon from '../../assets/connect.svg';

const About = ({}) => {
  return (
    <div className="bg-white py-32">
      <div className="container mx-auto px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-primary">Engage</span> with IdeaHub
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mx-auto mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam, ratione dolor ipsum
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-7xl mx-auto mt-16">
          <div className="text-center">
            <div className="flex justify-center">
              <LoginIcon height="280" />
            </div>
            <h1 className="text-2xl mt-2 font-semibold capitalize text-gray-700">Simple Registration</h1>
            <p className="text-md mt-2 px-10 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni harum adipisci, nam perferendis aut
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <GroupIcon height="280" />
            </div>
            <h1 className="text-2xl mt-2 font-semibold capitalize text-gray-700">Get paried with</h1>
            <p className="text-md mt-2 px-10 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Natus magni harum adipisci, nam perferendis aut
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <ConnectIcon height="280" />
            </div>
            <h1 className="text-2xl mt-2 font-semibold capitalize text-gray-700">Connect with others</h1>
            <p className="text-md mt-2 px-10 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Natus magni harum adipisci, nam perferendis aut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
