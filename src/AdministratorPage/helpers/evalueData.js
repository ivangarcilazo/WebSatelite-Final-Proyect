import { idElement } from "../Data/ToEvalue.js"
import { UserPrice } from "../Data/ToEvalue.js"
import { newProducts } from "../Data/ProductsToAdd.js"

//Evalua la información y devuelve si es correcta o no
export function evalueData(){

    const messageRetry=document.querySelector("#retryIdMessage")
    newProducts.some((id)=>id.id==idElement.value)?
      messageRetry.innerHTML="<strong class='messageRetry'>ID repeated</strong>"
      :
      messageRetry.innerHTML="<strong class='messageRetry'></strong>"
    
  
    let isNaNError=document.querySelector('#isNaNError')
    isNaN(parseInt(UserPrice.value)) ?
      isNaNError.innerHTML="<strong class='messageRetry'>Enter a number</strong>"
      :
      isNaNError.innerHTML="<strong class='messageRetry'>✔️</strong>"
    
  }