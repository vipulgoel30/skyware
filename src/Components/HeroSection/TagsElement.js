import React, { PureComponent } from "react";
function TagsElement(props) {
  return (
    <span
      className={` `}
      style={{
        color: props.color,
      }}
    >
      {props.data}
    </span>
  );
}
export default TagsElement;
