import { useState } from "react";
import './Card.css';
import { Button, QuantityArrow} from '../index.js';
import { CartIcon } from "../../assets/index.js";

/*--------------------------------------------------------------
# Card: Component created to display the different 
  game items that are sold
--------------------------------------------------------------*/

const Card = (props) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <div className="card">
      <div className="card-header">
        <div className="product-status">
          <div className="on-sale">
            <div
              className={`${props.isOnSale ? "on-sale-point" : "hidden"}`}
            ></div>
            <span className={`${props.isOnSale ? "on-sale-text" : "hidden"}`}>
              On Sale
            </span>
          </div>
          <div className={`${props.isInStock ? "in-stock" : "hidden"}`}>
            <span className="in-stock-text">In stock</span>
          </div>
        </div>
        <label htmlFor={`quantity${props.idInput}`} className="quantity">
          <input
            id={`quantity${props.idInput}`}
            type="text"
            className="quantity-input"
            autoComplete="off"
            value={itemQuantity}
            onChange={(e) => {
              setItemQuantity(
                e.target.value !== "" && parseInt(e.target.value)
                  ? parseInt(e.target.value)
                  : ""
              );
            }}
          />
          <div className="change-quantity">
            <QuantityArrow
              className="arrow-up"
              onClick={() => {
                if (itemQuantity < 999)
                  setItemQuantity(parseInt(itemQuantity) + 1);
              }}
            />
            <QuantityArrow
              className="arrow-down"
              onClick={() => {
                if (itemQuantity > 1)
                  setItemQuantity(parseInt(itemQuantity) - 1);
              }}
            />
          </div>
        </label>
      </div>
      <div className="card-img">
        <img
          className="item-img"
          width={50}
          src={props.path}
          alt={props.image}
        />
      </div>
      <div className="card-info">
        <div className="x">
          <span className="item-name">{props.name}</span>
          <div className="game-content-img">
            <img
              className="game-img"
              width={36}
              height={14}
              src={props.pathIcon}
              alt={props.imageIcon}
            />
          </div>
        </div>
        <div className="price-content">
          <span className="price">{props.price ? "$" + props.price : ""}</span>
          <span className="last-price">
            {props.lastPrice ? "$" + props.lastPrice : ""}
          </span>
        </div>
        <span className="description">{props.description}</span>
      </div>
      <div className="card-buttons">
        <Button title="Details" bgcolor={3} isCard/>
        <Button title="Add" bgcolor={2} path={CartIcon} isCard isFontW/>
      </div>
    </div>
  );
}

export default Card