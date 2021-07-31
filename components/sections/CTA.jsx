import Link from 'next/link';
import React from 'react';

import Button from '../Button';

const CTA = ({}) => {
  return (
    <div className="py-10 px-10">
      <div className="container mx-auto px-10 banner rounded-2xl overflow-hidden">
        <div className="w-full h-56 px-10 rounded-2xl">
          <div className="flex justify-between">
            <h1 className="text-white text-5xl mt-10 max-w-xl leading-snug font-bold">
              Ready to get started? Sign up now!
            </h1>
            <div>
              <Link href="/register">
                <a>
                  <Button className="bg-primary px-10 py-3 text-xl mt-20 border-primary text-white">Get Started</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
