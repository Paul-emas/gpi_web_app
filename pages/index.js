import Head from 'next/head';
import Button from '../components/Button';
import NavBar from '../components/Navbar';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Explore from '../components/sections/Explore';
import Partners from '../components/sections/Partners';
import CTA from '../components/sections/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar>
        <div className="flex gap-x-7">
          <a className="hover:text-gray-600">About</a>
          <a className="hover:text-gray-600">Explore</a>
          <a className="hover:text-gray-600">Partners</a>
        </div>
        <div className="flex gap-x-4">
          <Button className="bg-primary border-primary text-white">Login</Button>
          <Button className="border-primary text-primary">Register</Button>
        </div>
      </NavBar>
      <Header />
      <Explore />
      <Partners />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
