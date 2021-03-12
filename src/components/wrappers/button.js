import React from "react";

export function Button(props) {
  const { classname, label} = props;
  return (
    <button className={classname}>
      {label}
    </button>
  );
}