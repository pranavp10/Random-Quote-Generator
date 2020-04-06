import React from "react";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{
        transition: "all 500ms",
        border: "none",
        backgroundColor: `${color}`,
        color: "#fff",
        padding: "10px",
        borderRadius: "10px",
        width: "auto",
        marginTop: "20px",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
