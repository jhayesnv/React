import React from "react";

function WatchedBox({
  setIsOpen2,
  isOpen2,
  children
}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
          children
      )}
    </div>
  );
}

export default WatchedBox;
