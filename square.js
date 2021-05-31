import React from "react";

const Square = (props) => {
  return <div onClick={props.click}>{props.state}</div>;
};
export default Square;
