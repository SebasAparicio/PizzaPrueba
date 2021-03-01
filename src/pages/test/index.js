import React from "react";
import css from "./index.module.css";

export default function Test(props) {
  return <div className={css.test}>{JSON.stringify(props.todos)}</div>;
}
