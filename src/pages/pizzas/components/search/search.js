import React from 'react';
import {Input,Form} from '../../../../components';
import css from './search.module.css';
export function Search(){
    return(
        <Form className={css.form}>
            <Input placeholder="Busca tu pizza favorita" className={css.search}></Input>
            <Input placeholder="Filtrar" className={css.filter}></Input>
            <Input placeholder="Ordenar" className={css.arrange}></Input>
        </Form>
    )
}