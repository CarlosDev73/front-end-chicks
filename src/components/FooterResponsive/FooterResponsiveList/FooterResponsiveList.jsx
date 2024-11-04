import React from 'react'
import { useState } from 'react';
import './FooterResponsiveList.css'
import { ArrowWhiteIcon } from '../../../assets';

/*--------------------------------------------------------------
#  FooterResponsiveList: An internal menu component designed to 
  present dropdown lists in a structured and user-friendly manner, 
  enhancing navigation and accessibility within the interface.
--------------------------------------------------------------*/

const FooterResponsiveList = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="responsive-menu-item-footer">
      <div
        className="responsive-menu-footer-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{props.title}</span>
        <img
          className={`arrow-img ${isOpen ? "arrow-img-rotate" : ""}`}
          width={12}
          src={ArrowWhiteIcon}
          alt="arrow-down"
        />
      </div>
      <div
        className={`responsive-menu-footer-sublist${isOpen ? " responsive-menu-footer-sublist-visible" : ""
          }`}
      >
        {props.subList.map((item) => {
          return (
            <a key={item.id} href={`#${item.name}`} className="item">
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterResponsiveList