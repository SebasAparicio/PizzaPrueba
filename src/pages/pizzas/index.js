import React from 'react';
import {Search, PizzaList} from './components';
import {Page} from '../../components';
import '../../styles';
import css from './index.module.css';
export default function Pizzas({pizzas}){
    return(
        <Page>
            <main className={css.main}>
                <h1 className='visually-hidden'>Pizzas</h1>
                <Search/>
                <PizzaList pizzas={pizzas}/>
            </main>
        </Page>
    )
}

Pizzas.route = '/';
Pizzas.getData = async(params,query)=>{
    const getPizzas = await fetch ('http://localhost:3000/pizzas');
    return {
        pizzas: await getPizzas.json()
    };
    
}
