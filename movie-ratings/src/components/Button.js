import React from "react";

function Button({setIsOpen, children}) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {children}
    </button>
  );
}

export default Button;
