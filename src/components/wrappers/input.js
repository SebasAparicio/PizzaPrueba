import React from "react";

export function Input(props) {
  const { classname, label, ...rest } = props;
  return (
    <div className={classname}>
      <label>
        <span>{label}</span>
      </label>
      <input {...rest} />
    </div>
  );
}
