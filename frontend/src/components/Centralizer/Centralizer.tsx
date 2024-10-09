import React from "react";
import "./Centralizer.css";

type CentralizerParams = { children: React.ReactNode };

export default function Centralizer(params: CentralizerParams) {
  return <div className="Centralizer">{params.children}</div>;
}
