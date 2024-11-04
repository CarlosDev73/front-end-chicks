import React from 'react';
import './GenericFilter.css';
import { ArrowWhiteIcon } from '../../assets/index.js';


/*--------------------------------------------------------------
# GenericFilter: filtering component
--------------------------------------------------------------*/

const GenericFilter = (props) => {
  return (
    <div className="genericfilter">
      <img
        className="filter-img"
        width={18}
        src={props.path}
        alt="arrow-white-up"
      />
      <div className="filter-info">
        <span className="filter-name">{props.name}</span>
        <span className="filter-data">{props.data}</span>
      </div>
      <img
        className="filter-arrow"
        width={12}
        src={ArrowWhiteIcon}
        alt="arrow-white-up"
      />
    </div>
  )
}

export default GenericFilter