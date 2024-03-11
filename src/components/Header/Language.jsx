import flag from './images/usa-flag.png';
import arroow from './images/arrow.png';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Changelanguage from './Changelanguage';

const ParentContainer = styled.div`
  position: relative;
  & .changelanguage{
    display: flex;
    height: 35px;
    align-items: center;
  } & .imgflag{
    width: 27px;
  } & .en{
    color: white;
    margin-left: 4px;
  } & .enarrowimg{
    width: 10px;
    height: 7px;
    margin-top: 5px;
  } form {
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    padding:0 0 90px 12px;
  }

`;

const DROPDOWN = styled.div`
display: flex;
flex-wrap: wrap;
  position: absolute;
  left: 5;
  top: 35;
  background-color: white;
  width: 220px;
  height: 420px;
  border: 1px solid gray;
  border-radius: 5px;
  z-index: 1;

`

const Language = () => {
  const [DropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  const handleDropdownMouseOver = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseOut = () => {
    setDropdownOpen(false);
  };

  return (
    <ParentContainer>
      <div className='changelanguage'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={flag} alt=""  className='imgflag' />
        <span className='en'>EN</span>
        <img 
        className='enarrowimg'
          src={arroow}
          alt=""
          
        />
      </div>

      {DropdownOpen && (
        <DROPDOWN   onMouseOver={handleDropdownMouseOver}
        onMouseOut={handleDropdownMouseOut}>
          
         

         
    <Changelanguage/>
         
         
        </DROPDOWN>
      )}
    </ParentContainer>
  );
};

export default Language;
