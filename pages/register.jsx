import React from 'react';
import NavBar from '../components/Navbar';

import SpaceIcon from '../assets/register.svg';
import Button from '../components/Button';
import Link from 'next/link';

const Register = ({}) => {
  return (
    <div className="fixed bg-medium h-screen overflow-hidden w-full">
      <NavBar />
      <div className="flex bg-white h-full">
        <div className="w-2/3 pt-32 px-10 2xl:px-24 overflow-y-auto pb-10">
          <h1 className="text-4xl font-bold text-gray-800">Register.</h1>
          <p className="text-xl text-gray-400 mt-3 max-w-sm">
            Sign up now and get the benefits that comes with partnering with us
          </p>

          <form action="" className="mt-20">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 font-semibold">
                Enter Your Email or Username
              </label>
              <input
                type="text"
                placeholder="Enter Your Email or Username"
                className="py-3.5 bg-white px-7 border focus:border-primary outline-none mt-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="email" className="text-gray-600 font-semibold">
                Enter Your Password
              </label>
              <input
                type="password"
                checked
                placeholder="At least 8 characters"
                className="py-3.5 bg-white px-7 border focus:border-primary outline-none mt-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="email" className="text-gray-600 font-semibold">
                Confirm Your Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="py-3.5 bg-white px-7 border focus:border-primary outline-none mt-2 rounded-lg"
              />
            </div>
            <Button className="w-full bg-primary border-primary py-3.5 text-white mt-10">Register</Button>
          </form>
          <div className="py-10 border-b flex flex-col items-center">
            <label class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox relative -top-3 h-5 w-5 border-2 border-primary rounded-lg focus:border-primary text-primary"
              />
              <span class="ml-2 font-medium max-w-xl text-gray-500 text-center">
                By clicking register, you agree to our <span class="text-primary">Terms and Conditions,</span>{' '}
                <span className="text-primary">Privacy Policy,</span> and{' '}
                <span className="text-primary">Mobile Internet Safety Policy</span>
              </span>
            </label>
          </div>
          <div className="flex justify-center">
            <Button className="bg-white border-primary py-3.5 px-12 text-primary mt-10">Sign in</Button>
          </div>
        </div>
        <div className="w-full h-full bg-medium pt-10 2xl:pt-32 px-32 text-center">
          <span className="text-gray-500 font-semibold text-2xl">Want to be part of something great</span>
          <h1 className="text-primary text-6xl font-bold mt-8">Join us now!</h1>
          <SpaceIcon height={570} className="mx-auto mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Register;