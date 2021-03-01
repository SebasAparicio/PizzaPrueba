import Pizzas from './index';


Pizzas.route = '/';
Pizzas.getData = async(params,query)=>{
    const getPizzas = await fetch ('http://localhost:3000/pizzas');
    return {
        pizzas: await getPizzas.json()
    };   
}
export default Pizzas
