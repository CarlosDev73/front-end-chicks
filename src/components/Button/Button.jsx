import "./Button.css";

/*--------------------------------------------------------------
# Button: Configurable that can include an icon and a notification 
  badge. Allows you to adjust the background color, font size, icon position, 
  and hover effects, it is versatile and adapts to different 
  presentation needs in the interface.
--------------------------------------------------------------*/

const Button = (props)=> {
  const bgColors = { 1: "bg-transparent", 2: "bg-secondary", 3: "bg-third" };
  const fonts = { 1: "font-small" };

  return (
    <div
      className={`button${props.bgcolor ? " " + bgColors[props.bgcolor] : ""}${props.isLeftImage ? " left-img" : ""
        }${props.isNotHover ? " no-hover" : ""}${props.isLogin ? " button-login" : ""}${props.isCard ? " button-card" : ""}`}
      onClick={props.onClick}
    >
      <span
        className={`button-title${props.font ? " " + fonts[props.font] : ""}${props.isNotification ? " button-title-notification" : ""
          }${props.isFontW ? " font-weight-bold" : ""}`}
      >
        {props.title}
      </span>

      <div className={`${props.path ? "bg-img" : "hidden"}`}>
        <img
          className="button-image"
          src={props.path}
          alt={props.path}
        />
        <div className={`${props.isNotification ? "notification" : "hidden"}`}>
          5
        </div>
      </div>
    </div>
  );
}

export default Button