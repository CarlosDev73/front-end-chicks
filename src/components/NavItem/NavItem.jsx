import "./NavItem.css";
import { ArrowDown } from "../index.js";

/*--------------------------------------------------------------
# NavItem: Component that renders a custom navigation item
--------------------------------------------------------------*/

export default function NavItem(props) {
  return (
    <div className={`nav-item${props.isNoHoverItem ? " no-hover-item" : ""}`}>
      <span className="nav-item-title">{props.title}</span>
      <ArrowDown className="nav-item-arrow"></ArrowDown>
    </div>
  );
}
