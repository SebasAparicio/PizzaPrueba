import React from "react";
import {Button} from '../wrappers/button.js';
import {Form} from '../wrappers/form.js';
import css from './cart-form.module.css';

export function CartForm({id,className}) {
  const buttonClass = className && `${css.button} ${className}` || css.button
  return (
    <Form>
      <input type="hidden" value={id} />
      <Button className={buttonClass} label="AÑADIR AL CARRITO"/>
    </Form>
  );
}
