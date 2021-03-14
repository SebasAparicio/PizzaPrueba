
import {urlApi, authorize, api, resolveUrl} from '../api';

export class PizzaService{
    static async getAll(query){
        const url = resolveUrl('pizzas', urlApi, query);
        const pizzas = await api(url).get()
        return {
            pizzas
        }
    }
    static async edit(id){
        const url = resolveUrl(`pizzas/$(id)`, urlApi, query);
        const pizza = await api(url).get()
        return {
            pizza
        }
    }
}

