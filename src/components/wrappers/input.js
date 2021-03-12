import React from "react";

export function Input(props) {
  const { classname, label, ...rest } = props;
  return (
    <div className={classname}>
      <label>
        <div>{label}</div>
      </label>
      <input {...rest} />
    </div>
  );
}
