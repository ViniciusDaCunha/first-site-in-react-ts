import React from "react";
import "./ButtonCustom.css";

type SizeButton = "small" | "medium" | "normal";
type AppearenceButton = "primary" | "secondary" | "tertiary";

type ButtonParams = {
  title: string;
  size: SizeButton;
  appearence: AppearenceButton;
  children: React.ReactNode;
};

type GetClassParams = {
  size: SizeButton;
  appearence: AppearenceButton;
};

function getClassNames(params: GetClassParams) {
  return (
    "ButtonCustom appeareance-" + params.appearence + " size-" + params.size
  );
}

function ButtonCustom(params: ButtonParams) {
  return (
    <button
      className={getClassNames({
        size: params.size,
        appearence: params.appearence,
      })}
      title={params.title}
    >
      {params.children}
    </button>
  );
}

export default ButtonCustom;
