// import { IngredientService } from '../../services/ingredient-service';
// import { PizzaService } from '../../services/pizza-service';
import PizzaDetails from './index';


PizzaDetails.route = '/';
PizzaDetails.getData = async function (parms, query) {
        return await PizzaService.getAll(pizzas)
    };   

export default PizzaDetails