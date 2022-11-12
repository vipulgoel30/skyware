import React from "react";
function TagsMain(props) {
  return (
    <span
      className={`bg-${props.color}-500 text-white p-1 px-2 rounded-lg `}
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.data}
    </span>
  );
}
export default TagsMain;
