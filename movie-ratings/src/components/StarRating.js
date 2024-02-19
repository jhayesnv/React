import React, { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

const starContainerStyle = {
  display: "flex",
};

function StarRating({ maxRating = 10, color = '#fcc419', size = 48, className = '', setRating, userRating}) {
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    marginLeft: `${1}rem`,
    color,
    fontSize: `${size / 1.5}px`
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : userRating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || userRating || ""}</p>
    </div>
  );
}

export default StarRating;
