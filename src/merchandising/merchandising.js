
import { shippingCalc } from "./helpers/promotionTime/freeshipping.js";

//PopUps

import { cartId } from "./Data/CartId.js";

import { closePopUpProducts } from "./Data/popUp.js";

import { closePopUp, generatePopUpCart } from "./helpers/popUpCart.js";

import { addDataPopUp } from "./helpers/popUpDataFunctions.js";




for(const objects of cartId){
    objects.addEventListener('click', generatePopUpCart) //para todos cada uno de esos objetos, un evento    
    objects.addEventListener('click', addDataPopUp) 
}

closePopUpProducts.addEventListener('click', closePopUp )

