import React from "react";

const ButtonMenu = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="buttonMenu">
      <img src="src\assets\cardapio.png" alt="" />
    </button>
  );
};

export default ButtonMenu;
