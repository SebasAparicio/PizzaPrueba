import React from "react";
import { Page } from "../../components";
import "../../styles";
import { IngredientList } from "./components/ingredient/ingredient-list";

function Ingredients({ingredients}){
    return(
        <Page>
            <main>
                <h3>Todos los ingredientes</h3>
               <IngredientList ingredients = {ingredients}/>
            </main>          
        </Page>
    )
}
export default Ingredients