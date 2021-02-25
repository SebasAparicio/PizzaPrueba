import React from 'react';
import {Input,Form} from '../../../../components';
import css from './search.module.css';
export function Search(){
    return(
        <Form className={css.form}>
            <Input placeholder="Busca tu pizza favorita"></Input>
            <Input placeholder="Filtrar"></Input>
            <Input placeholder="Ordenar"></Input>
        </Form>
    )
}