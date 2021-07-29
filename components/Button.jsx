import React from 'react';

const Button = ({ className, children }) => (
  <button className={`${className} px-7 py-2.5 text-base border-2 font-semibold rounded-lg`}>{children}</button>
);

export default Button;
