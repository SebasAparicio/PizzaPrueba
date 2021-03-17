import React from "react";
import css from "./button.module.css"

export function Button(props) {
  const { className, label} = props;
  return (
    <button className={css.button}>
      {label}
    </button>
  );
}

