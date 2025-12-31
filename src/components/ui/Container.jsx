import React from 'react';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
