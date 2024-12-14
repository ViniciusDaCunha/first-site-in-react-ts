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

function getClassNames( { appearence, size } : GetClassParams) {
  return (
    "ButtonCustom appeareance-" + appearence + " size-" + size
  );
}

function ButtonCustom( { appearence = "primary", size = "normal", title = "", children } : ButtonParams) {
  return (
    <button
      className={getClassNames({
        size: size,
        appearence: appearence,
      })}
      title={title}
    >
      {children}
    </button>
  );
}

export default ButtonCustom;
