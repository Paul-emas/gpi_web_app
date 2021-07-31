import React from 'react';

import LoginIcon from '../../assets/login.svg';
import GroupIcon from '../../assets/group.svg';
import ConnectIcon from '../../assets/connect.svg';

const aboutData = [
  {
    title: 'Simple Registration',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni harum adipisci, nam perferendis aut',
    icon: LoginIcon,
  },
  {
    title: 'Get paried with',
    content: 'Lorem ipsum dolor sit amet consectetur. Natus magni harum adipisci, nam perferendis aut',
    icon: GroupIcon,
  },
  {
    title: 'Connect with others',
    content: 'Lorem ipsum dolor sit amet consectetur. Natus magni harum adipisci, nam perferendis aut',
    icon: ConnectIcon,
  },
];

const About = ({}) => {
  return (
    <div id="about" className="bg-white py-32">
      <div className="container mx-auto px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-primary">Engage</span> with IdeaHub
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mx-auto mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam, ratione dolor ipsum
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-y-10 max-w-7xl mx-auto mt-16">
          {aboutData.map(({ title, content, icon }) => {
            const Icon = icon;
            return (
              <div className="text-center">
                <div className="flex justify-center">
                  <Icon height="280" />
                </div>
                <h1 className="text-2xl mt-2 font-semibold capitalize text-gray-700">{title}</h1>
                <p className="text-md mt-2 px-10 text-gray-500">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
