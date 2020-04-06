import React from "react";

const Container = ({ children, color }) => {
  return (
    <div
      style={{
        transition: "all 500ms",
        backgroundColor: `${color}`,
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
