import * as React from "react";

export const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={` tab_btn ${isActive ? "bdr_1 fw_600" : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);
