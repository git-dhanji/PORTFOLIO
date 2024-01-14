import React, { useState, useEffect } from 'react';
import './nav.css';

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar desktop ${visible ? '' : 'hidden'}`}>
      <h4 className='nav-logo' >webdhan</h4>
      <div className="nav-list">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="mobile-view">
        {toggle ?
          <i className="fa-solid fa-xmark humberger" style={{ zIndex: "99" }} onClick={() => setToggle(false)} />
          : <i className="fa-solid fa-bars humberger" style={{ zIndex: "99" }} onClick={() => setToggle(true)} />
        }
        {
          toggle && (
            <div className="white scale-up-center">
              <a href="#Home" onClick={() => setToggle(false)}>Home</a>
              <a href="#About" onClick={() => setToggle(false)}>About</a>
              <a href="#Project" onClick={() => setToggle(false)}>Project</a>
              <a href="#Contact" onClick={() => setToggle(false)}>Contact</a>
            </div>
          )
        }
      </div>
    </nav>
  );
}
