// src/components/Nav/NavMenu.jsx
import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link'; // Use HashLink instead of Link

// Styled component for the glowing button
const GlowButton = styled.a`
  color: #fff;
  background-color: #333;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 
              0 0 10px rgba(0, 255, 255, 0.5),
              0 0 15px rgba(0, 255, 255, 0.5);
  transition: all 0.3s ease;
  height: 40px;
  margin: 10px;
  line-height: 40px;
  padding: 0 20px;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 255, 1), 
                0 0 20px rgba(0, 255, 255, 1),
                0 0 25px rgba(0, 255, 255, 1);
    transform: translateY(-2px);
  }
`;

const NavMenu = () => {
  return (
    <div>
      
    </div>
  );
};

export default NavMenu;