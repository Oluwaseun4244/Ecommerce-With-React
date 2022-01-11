import React from "react";

function Button({ btnClass, btnText, iconClass, textColor, btnFunc }) {
  return (
    <button style={{ color: textColor || "white" }} className={btnClass} onClick={btnFunc}>
      
      {btnText} <i className={iconClass} />
    </button>
  );
}

export default Button;
