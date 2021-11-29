import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <aside
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        transform: "translateY(300px)",
      }}
    >
      <div className="loader">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </aside>
  );
};

export default Loading;
