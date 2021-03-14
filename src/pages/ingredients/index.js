import React from "react";
import { Page } from "../../components";
import "../../styles";
import { IngredientList } from "./components/ingredient-list/ingredient-list";
import { IngredientAdd } from "./components/ingredient-form/ingredient-form";
import css from './index.module.css'
function Ingredients({ ingredients }) {
  return (
    <Page className = {css.page}>
      <main className = {css.main}>
        <h1 className = "visually-hidden">Todos los ingredientes</h1>
        <IngredientList ingredients={ingredients} />
        <section>
        <h1 className = "visually-hidden">Crea un nuevo ingrediente</h1>
        <IngredientAdd />
        </section>
      </main>
    </Page>
  );
}
export default Ingredients;
