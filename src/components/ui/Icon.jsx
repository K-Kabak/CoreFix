import React from 'react';

const Icon = ({ name, className = '', ...props }) => {
  // This component will load SVGs from src/assets/icons/
  // For now, we'll use a simple img tag or inline SVG if we had them as components
  // Since they are .svg files in assets, we can use them as src
  
  const iconPath = `/src/assets/icons/${name}.svg`;

  return (
    <img 
      src={iconPath} 
      alt={`${name} icon`} 
      className={`w-6 h-6 ${className}`} 
      {...props} 
    />
  );
};

export default Icon;
