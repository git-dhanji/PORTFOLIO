import React, { useEffect, useState } from 'react';

const ScrollComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
 

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  return (
    <div>
      <p className='scroll'>Scroll Position: {scrollY}</p>
      {/* Your other content */}
    </div>
  );
};

export default ScrollComponent;
