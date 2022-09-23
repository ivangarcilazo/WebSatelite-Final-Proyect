
import { pictureAP } from "../Data/imageArray/imgArr.js";

import { Products } from "../Data/ProductsToAdd.js";
import { newProducts } from "../Data/ProductsToAdd.js";

import { evalueData } from "./evalueData.js";

import {idElement} from "../Data/ToEvalue.js"
import {UserPrice} from "../Data/ToEvalue.js"

import { toShowData } from "./functionsToAddProducts/toShowData.js";
import { getDeleteButonAP } from "../helpers/functionsToDeleteData/deleteDataButton.js";

export async function sendFormAp(){

    event.preventDefault()

    const titleAP=document.querySelector("#titleAP").value
    const lastPicture= await pictureAP[pictureAP.length-1]

    let garmentValue = document.querySelector("#garmentSelectorAP");
    let selectGarment = garmentValue.options[garmentValue.selectedIndex].text;

    let UserSize=document.querySelector("#sizeAP").value

    evalueData() //Funcion que evalua si los datos ingresados por el usuario son válidos

    const sentForm=document.querySelector('#checkMessage')

    
    if(newProducts.some((id)=>id.id==idElement.value)||(isNaN(parseInt(UserPrice.value)))){
        evalueData()
        sentForm.className=""
        sentForm.innerHTML='<span class="checkSimbolSubmit"></span>'
    }else{
        newProducts.push(new Products(titleAP,lastPicture, idElement.value, selectGarment, UserSize, UserPrice.value))//carga los valores en el array
        sentForm.className="animationSent"
        sentForm.innerHTML='<span class="checkSimbolSubmit">✔️</span>'

        console.log(newProducts)

        localStorage.setItem('Products', JSON.stringify(newProducts)) //los suma a los ya creados

        toShowData()

        getDeleteButonAP()

        console.log(newProducts)
    
       
    }
   
}