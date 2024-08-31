"use client";

import React from "react";

const BtnClientSide = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default BtnClientSide;
