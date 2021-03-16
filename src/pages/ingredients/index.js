import React from "react";
import { Page, IngredientList } from "../../components";
import "../../styles";
import { IngredientAdd } from "./components/ingredient-form/ingredient-form";
import css from './index.module.css'

function Ingredients({ ingredients }) {
  return (
    <Page className = {css.page}>
      <main className = {css.main}>
        <h1 className = "visually-hidden">Todos los ingredientes</h1>
        <IngredientList ingredients={ingredients} />
        <IngredientAdd />
      </main>
    </Page>
  );
}
export default Ingredients;
