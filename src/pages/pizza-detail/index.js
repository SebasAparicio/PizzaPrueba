import React from "react";
import {Pizza, PizzaIngredients, PizzaComments, CommentForm} from './components';
import { Page } from "../../components";
import css from "./index.module.css"
import "../../styles";

function PizzaDetail({pizza}) {
  return (
    <Page>
      <main className={css.main}>
        <h1 className="visually-hidden">Pizza</h1>
        <Pizza pizza = {pizza}/>
        <PizzaIngredients pizza = {pizza}/>
        <PizzaComments pizza = {pizza}/>
        <CommentForm/>
      </main>
    </Page>
  );
}
export default PizzaDetail;