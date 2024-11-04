import React from 'react'
import { BackGround, ItemBagIcon, FeatherIcon, FilterIcon } from '../../assets/index.js'
import ItemsData from '../../data/items.js'
import './Items.css'
import {
  Navbar,
  GameSelector,
  SearchBar,
  GenericFilter,
  DoubleFilter,
  Card,
  Pagination,
  Footer,
} from '../../components'

/*--------------------------------------------------------------
# Items: Dedicated 'Items' page section designed to facilitate 
  the browsing and searching of items for sale, 
  providing a streamlined and user-friendly interface for an 
  enhanced shopping experience.
--------------------------------------------------------------*/

const Items = () => {

  return (
    <div>
      <Navbar />
      <img
        className="background"
        src={BackGround}
        alt="background-default"
      />
      <main className="main">
        <div className="articles">
          <h1>Condimentum consectetur</h1>
          <div className="articles-filters">
            <div className="container-select-game">
              <GameSelector />
            </div>
            <SearchBar id="games" />
            <div className="filters">
              <DoubleFilter
                path1={ItemBagIcon}
                name1={"Price"}
                data1={"All"}
                path2={FeatherIcon}
                name2={"Item Type"}
                data2={"All"}
              />
            </div>
          </div>

          <div className="content-cards">
            <div className="info-filter">
              <span className="show-cards">Showing 20 - from 125</span>
              <div className="filter-sort-by">
                <GenericFilter
                  name="Sort By"
                  data="Featured"
                  path={FilterIcon}
                />
              </div>
            </div>
            <div className="cards">
              {ItemsData.map((item) => {
                return (
                  <Card
                    key={item.id}
                    idInput={item.id}
                    name={item.name}
                    price={item.price}
                    lastPrice={item.lastPrice}
                    description={item.description}
                    image={item.image}
                    path={item.path}
                    imageIcon={item.imageIcon}
                    pathIcon={item.pathIcon}
                    isOnSale={item.onSale}
                    isInStock={item.inStock}
                  />
                );
              })}
            </div>
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Items