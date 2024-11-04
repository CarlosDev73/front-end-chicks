import React from 'react'
import './Pagination.css'

const Pagination = () => {
  return (
    <div className="pagination">
              <a href="#goback" className="arrow">
                ❮
              </a>
              <div className="number-buttons">
                <a href="#1" className="number-button number-button-active">
                  1
                </a>
                <a href="#2" className="number-button">
                  2
                </a>
                <a href="#3" className="number-button">
                  3
                </a>
                <a href="#4" className="number-button">
                  4
                </a>
                <a href="#x" className="number-button no-hover">
                  ...
                </a>
                <a href="#11" className="number-button">
                  11
                </a>
              </div>
              <a className="arrow">
                ❯
              </a>
            </div>
  )
}

export default Pagination