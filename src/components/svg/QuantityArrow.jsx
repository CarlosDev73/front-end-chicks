import React from 'react';

const QuantityArrow = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 51.19 27.5"
      fill="#FFFFFF"
    >
      <polygon points="0 0 51.19 0 25.59 27.5 0 0" />
    </svg>
  );
}

export default QuantityArrow