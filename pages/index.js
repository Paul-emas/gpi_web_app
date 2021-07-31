import Head from 'next/head';
import Button from '../components/Button';
import NavBar from '../components/Navbar';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Explore from '../components/sections/Explore';
import Partners from '../components/sections/Partners';
import CTA from '../components/sections/CTA';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <NavBar align="justify-between">
        <div className="flex gap-x-7">
          <a href="/#explore" className="hover:text-gray-600">
            Explore
          </a>
          <a className="hover:text-gray-600">FAQs</a>
          <a href="/#about" className="hover:text-gray-600">
            About us
          </a>
          <a className="hover:text-gray-600">Contact us</a>
        </div>
        <div className="flex gap-x-4">
          <Link href="/login">
            <a>
              <Button className="bg-primary border-primary text-white">Login</Button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <Button className="border-primary text-primary">Register</Button>
            </a>
          </Link>
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
