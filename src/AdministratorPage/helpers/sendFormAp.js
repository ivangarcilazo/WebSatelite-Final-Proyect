import { Products } from "../Data/ProductsToAdd.js";
import { newProducts } from "../Data/ProductsToAdd.js";

import { evalueData } from "./evalueData.js";

import {idElement} from "../Data/ToEvalue.js"
import {UserPrice} from "../Data/ToEvalue.js"

import { toShowData } from "./functionsToAddProducts/toShowData.js";
import { getDeleteButonAP } from "../helpers/functionsToDeleteData/deleteDataButton.js";

export function sendFormAp(){

    event.preventDefault()

    let UserPicture=document.querySelector("#pictureAP").value

    let garmentValue = document.querySelector("#garmentSelectorAP");
    let selectGarment = garmentValue.options[garmentValue.selectedIndex].text;

    let UserSize=document.querySelector("#sizeAP").value

    evalueData()

    const sentForm=document.querySelector('#checkMessage')


    //Intenté aplicar el operador ternario ? pero por alguna razón me salta error. 
    
    if(newProducts.some((id)=>id.id==idElement.value)||(isNaN(parseInt(UserPrice.value)))){
        evalueData()
        sentForm.className=""
        sentForm.innerHTML='<span class="checkSimbolSubmit"></span>'
    }else{
        newProducts.push(new Products(UserPicture, idElement.value, selectGarment, UserSize, UserPrice.value))//carga los valores en el array
        sentForm.className="animationSent"
        sentForm.innerHTML='<span class="checkSimbolSubmit">✔️</span>'

        localStorage.setItem('Products', JSON.stringify(newProducts)) //los suma a los ya creados

        toShowData()

        getDeleteButonAP()
    
       
    }
   
}