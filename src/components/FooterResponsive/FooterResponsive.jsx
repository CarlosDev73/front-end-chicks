import React from 'react'
import './FooterResponsive.css'
import FooterResponsiveList from './FooterResponsiveList/FooterResponsiveList';

const FooterResponsive = () => {

  /*--------------------------------------------------------------
  # navItems is an array of objects that defines the items in 
    the navigation footer. 
  --------------------------------------------------------------*/
  const navItems = [
    {
      id: 1,
      name: "Chicks Gold",
      subList: [
        { id: 1, name: "Games" },
        { id: 2, name: "About Us" },
        { id: 3, name: "Blog" },
        { id: 4, name: "Sitemap" },
      ],
    },
    {
      id: 2,
      name: "Support",
      subList: [
        { id: 1, name: "Contact Us" },
        { id: 2, name: "FAQ" },
      ],
    },
    {
      id: 3,
      name: "Legal",
      subList: [
        { id: 1, name: "Privacy Policy" },
        { id: 2, name: "Terms of Services" },
        { id: 3, name: "Copy Right Policy" },
      ],
    },
  ];
  return (
    <div className="responsive-menu-footer">
      <div className="responsive-menu-footer-list">
        {navItems.map((navItem) => {
          return (
            <FooterResponsiveList
              key={navItem.id}
              title={navItem.name}
              subList={navItem.subList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FooterResponsive