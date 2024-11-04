import React from 'react'
import './MenuResponsiveList.css'
import { useState } from 'react';
import { ArrowWhiteIcon } from '../../../assets/index.js';


/*--------------------------------------------------------------
#  MenuResponsiveList: An internal menu component designed to 
  present dropdown lists in a structured and user-friendly manner, 
  enhancing navigation and accessibility within the interface.
--------------------------------------------------------------*/

const MenuResponsiveList = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-responsive-list">
      <div
        className="menu-responsive-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{props.title}</span>
        <img
          className={`arrow-img ${isOpen ? "arrow-img-rotate" : ""}`}
          width={12}
          src={ArrowWhiteIcon}
          alt="arrow-white-up"
        />
      </div>
    </div>
  );
}

export default MenuResponsiveList