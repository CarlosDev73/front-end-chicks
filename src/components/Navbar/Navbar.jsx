import './Navbar.css';
import { Button, NavItem, MenuResponsive } from '../index.js';
import { Logo, MenuIcon, CartIcon, UserIcon } from '../../assets/index.js';
import React from 'react';
import { useState } from 'react';


/*--------------------------------------------------------------
#                           Navbar
--------------------------------------------------------------*/

const Navbar = () => {

  const [isVisibleAccordionMenu, setIsVisibleAccordionMenu] = useState(false);

  const handleVisibilityChange = () => {
    setIsVisibleAccordionMenu(!isVisibleAccordionMenu);
  };


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
  ];

  return (
    <nav className="navbar">
      <div className="nav-menu-logo">
        <div className="menu-button-container">
          <img
            width={24}
            src={MenuIcon}
            alt="chicks-logo-large"
            onClick={() => {
              setIsVisibleAccordionMenu(true);
            }}
          />
        </div>
        <div className="nav-logo-container">
          <img
            className="nav-logo"
            src={Logo}
            alt="chicks-logo-large"
          />
        </div>
      </div>
      <div className="nav-main-content">
        <div className="nav-items">
          {navItems.map((navItem) => {
            return <NavItem key={navItem.id} title={navItem.name}></NavItem>;
          })}
        </div>
        <div className="nav-preferences">
          <NavItem title="USD" isNoHoverItem></NavItem>
          <Button
            title="cart (5)"
            bgcolor={1}
            path={CartIcon}
            isLeftImage
            isNotification
            isNotHover
          />
          <Button title="Sign In" path={UserIcon} isFontW isLogin/>
        </div>
      </div>
      <MenuResponsive
        isVisible={isVisibleAccordionMenu}
        onVisibilityChange={handleVisibilityChange}
      />
    </nav>
  );
}

export default Navbar