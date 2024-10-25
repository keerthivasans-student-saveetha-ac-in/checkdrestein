import React, { useState } from 'react';

const NavMenu = () => {
  const [hovered, setHovered] = useState(false);

  // Define the normal styles
  const linkStyle = {
    color: '#fff',
    backgroundColor: '#333',
    boxShadow: hovered
      ? 'inset 0px 2px 4px rgba(0,255,255,0.3), inset 0px 4px 8px rgba(0,255,255,0.3), inset 0px 8px 16px rgba(0,255,255,0.3)'
      : 'none',
    transition: '0.2s',
    transform: hovered ? 'translateY(2px)' : 'none',
    height: '40px',
    margin: '10px',
    lineHeight: '43px',
    padding: '0 40px',
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '5px',
    textDecoration: 'none',
  };

  return (
    <a
      href="#"
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Menu Item
    </a>
  );
};

export default NavMenu;