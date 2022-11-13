import React from "react";
function TagsMain(props) {
  return (
    <span
      className={`bg-${props.color}-500 text-white p-1 py-[.1rem] rounded-md `}
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.data}
    </span>
  );
}
export default TagsMain;
