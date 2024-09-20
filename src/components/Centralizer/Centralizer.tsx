import React from "react";
import "./Centralizer.css";

type CentralizerParam = { children: React.ReactNode };

export default function Centralizer(params: CentralizerParam) {
  return <div className="Centralizer">{params.children}</div>;
}
