import React from "react";
import "./_Button.scss";

const Button = (props) => {
    
  return (
    <button {...props} className="button">
      {props.children}
    </button>
  );
};

export default Button