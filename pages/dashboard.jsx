import React from 'react';
import SearchBar from '../components/SearchBar';
import Mentions from '../components/sections/Mentions';
import ProfileCard from '../components/sections/ProfileCard';
import SideBar from '../components/SideBar';

const Dashboard = ({}) => {
  return (
    <div>
      <SearchBar />
      <main className="main">
        <div className="container mx-auto px-10">
          <div className="flex">
            <SideBar />
            <div className="content w-full px-6 pt-10 bg-gray-50">
              <ProfileCard>
                <div className="tabs pt-12 pb-5 flex gap-x-8">
                  <a href="">Timeline</a>
                  <a href="" className="border-b-2 border-primary">
                    About
                  </a>
                  <a href="">Mentors (500)</a>
                  <a href="">Photos</a>
                </div>
              </ProfileCard>
            </div>
            <Mentions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
