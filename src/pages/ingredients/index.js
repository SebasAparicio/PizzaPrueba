import React from "react";
import { Page } from "../../components";
import "../../styles";
import { IngredientList } from "./components/ingredient/ingredient-list";
import { IngredientAdd } from "./components/ingredient/ingredient-add";
import css from './index.module.css'
function Ingredients({ ingredients }) {
  return (
    <Page>
      <main className = {css.main}>
        <h1 className = "visually-hidden">Todos los ingredientes</h1>
        <IngredientList ingredients={ingredients} />
        <IngredientAdd />
      </main>
    </Page>
  );
}
export default Ingredients;
