import React from 'react'
import './MenuResponsive.css'
import { Button, SearchBar } from '../index.js';
import { CloseIcon } from '../../assets/index.js';
import MenuResponsiveList from './MenuResponsiveList/MenuResponsiveList.jsx';

/*--------------------------------------------------------------
#  MenuResponsive: A component designed to display the navigation 
  menu on mobile devices or smaller screens, ensuring an optimized 
  and user-friendly interface for compact viewports.
--------------------------------------------------------------*/

const MenuResponsive = (props) => {

  /*--------------------------------------------------------------
  # navItems is an array of objects that defines the items in 
    the navigation menu. 
  --------------------------------------------------------------*/

  const navItems = [
    { id: 1, name: "Currency" },
    { id: 2, name: "Items" },
    { id: 3, name: "Accounts" },
    { id: 4, name: "Services" },
    { id: 5, name: "Swap" },
    { id: 6, name: "Sell" },
    { id: 7, name: "USD" },
  ];

  return (
    <div className={`responsive-menu ${props.isVisible ? " visible" : ""}`}>
      <div className="responsive-menu-header">
        <Button
          title="Close"
          path= {CloseIcon}
          bgcolor={1}
          font={1}
          isLeftImage
          onClick={() => props.onVisibilityChange()}
          isNotHover
        />
        <SearchBar/>
      </div>
      <div className="responsive-menu-list">
        {navItems.map((navItem) => {
          return (
            <MenuResponsiveList
              key={navItem.id}
              title={navItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuResponsive