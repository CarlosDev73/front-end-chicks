import React from 'react';
import './DoubleFilter.css';
import { ArrowWhiteIcon } from '../../assets/index.js';

/*--------------------------------------------------------------
# DoubleFilter: Component of two filters joined together for a 
  price range and item
--------------------------------------------------------------*/

const DoubleFilter = ({ name1, data1, path1, name2, data2, path2, }) => {
  return (
    <div className="double-filter">
      {/* First Filter */}
      <div className="filter-item">
        <img className="filter-icon" width={18} src={path1} alt="icon1" />
        <div className="filter-info">
          <span className="filter-label">{name1}</span>
          <span className="filter-value">{data1}</span>
        </div>
        <img
          className="filter-arrow"
          src={ArrowWhiteIcon}
          alt="arrow1"
        />
      </div>
      {/* Divider */}
      <div className="filter-divider" />
      {/* Second Filter */}
      <div className="filter-item">
        <img className="filter-icon" width={18} src={path2} alt="icon2" />
        <div className="filter-info">
          <span className="filter-label">{name2}</span>
          <span className="filter-value">{data2}</span>
        </div>
        <img
          className="filter-arrow"
          src={ArrowWhiteIcon}
          alt="arrow2"
        />
      </div>
    </div>
  );
}

export default DoubleFilter