import React from 'react';
import{Input,Form} from '../../../../components';

export function IngredientAdd(){
    return(
        <Form>
            <label>
                Añadir un nombre
            <Input placeholder = "Nombre"/>
            </label>
            <label>
                Añadir un precio
            <Input placeholder = "Precio"/>
            </label>
            <button>Crea un nuevo ingrediente</button>
        </Form>
    )
}