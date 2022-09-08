//Funciones que agregan o quitan elementos del popUp

import { imgPopUpProductsId, containerProductCard } from "../Data/popUpData.js";


import { priceProductPopUpId } from "../Data/popUpData.js";
import { titlePopUpId } from "../Data/popUpData.js";

import { containerDataProductId } from "../Data/merchData.js";

//Función que agrega la información al popUp
export function addDataPopUp(){

  

    for(const child of containerProductCard){

        const imageCartPopUP=child.querySelector('img').src //obtenemos el src completo de cada imagen de ropa
        
        child.addEventListener('click', ()=>{
            imgPopUpProductsId.src=`${imageCartPopUP}`
        })
    }

    for(const child of containerDataProductId){

        const titleProductPopUp=child.querySelector(".containerTextInfo").querySelector("h4")
        const priceProductPopUp=child.querySelector(".containerTextInfo").querySelector("span")
        
        child.addEventListener('click', ()=>{
            titlePopUpId.innerText=`${titleProductPopUp.innerText}`
            priceProductPopUpId.innerText=`${priceProductPopUp.innerText}`
        })
        
    }

}

