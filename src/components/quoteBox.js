import React from "react";

const QuoteBox = ({ children }) => {
  return (
    <div
      id="QuoteBox"
      style={{
        backgroundColor: "#fff",
        maxWidth: "600px",
        maxHeight: "450px",
        padding: "30px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default QuoteBox;
