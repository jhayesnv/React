import React from "react";

export default function ListBox({setIsOpen1, isOpen1, children}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        children
      )}
    </div>
  );
}
