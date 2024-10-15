import React from "react";
import "./Body.css";

type SizeBody = "body1" | "body2" | "body2-0" | "body3" | "body3-0" | "body4";
type WeightBody = "medium" | "regular";
type ColorBody = "grey" | "black" | "white";

type HeadlineParams = {
  size: SizeBody;
  weight: WeightBody;
  color: ColorBody;
  children: React.ReactNode;
};

type GetClassParams = {
  size: SizeBody;
  weight: WeightBody;
  color: ColorBody;
};

function getClassNames(params: GetClassParams) {
  return params.size + " " + params.weight + " " + params.color;
}

function Body(params: HeadlineParams) {
  return (
    <p
      className={getClassNames({
        size: params.size,
        weight: params.weight,
        color: params.color,
      })}
    >
      {params.children}
    </p>
  );
}

export default Body;
