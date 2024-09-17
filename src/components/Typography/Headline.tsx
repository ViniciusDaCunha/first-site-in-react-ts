import React from "react";
import "./Headline.css";

type SizeHeadline = "h1" | "h2" | "h3" | "h4";
type ColorHeadline = "black" | "grey" | "primary" | "white";

type HeadlineParams = {
  size: SizeHeadline;
  color: ColorHeadline;
  children: React.ReactNode;
};

type GetClassParams = {
  size: SizeHeadline;
  color: ColorHeadline;
};

function getClassNames(params: GetClassParams) {
  return "Headline-" + params.size + " " + params.color;
}

function Headline(params: HeadlineParams) {
  return (
    <h1
      className={getClassNames({
        size: params.size,
        color: params.color,
      })}
    >
      {params.children}
    </h1>
  );
}

export default Headline;
