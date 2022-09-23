import { allowCart } from "./allowCart/allowCart.js"

import { mainMerch } from "../../../../Data/containerProducts.js"

//Se encarga de generar y evaluar los datos dentro del popUp

export const generatePopUpCart=(...dataInPopUp)=>{
    
    function getSizeToPopUp(element){
        const indexToGetSize = element.findIndex((title)=>title.title==dataInPopUp[1]) //Devuelve en que posicion se encuentra
    
         const products=element
         
    
         return products[indexToGetSize].size
    
     }
     
    mainMerch.insertAdjacentHTML("afterbegin", `
    <div class="popUpProducts" id="PopUpProducts">
     

      <img src="${dataInPopUp[0]}" alt="${dataInPopUp[1]}" id="imgPopUpProductsId">

      <div class="containerInfoCart">

          <div class="containerFlexClosePopUp">
              <div class="closePopUp" id="closePopUp">
                  <div id="child-1"></div>
                  <div id="child-2"></div>
              </div>
          </div>

          <form action="" id="formSizePopUp">
              
              <h4 id="titlePopUp">${dataInPopUp[1]}</h4>

              <div class="containerInfoProductPopUP">

                  <div class="containerSizePopUp">
                  
                      <span>Size: </span>
                        <select name="" id="garmentSizeSelector">
                            <option value disabled>Select Size</option>
                            <option value>${getSizeToPopUp(JSON.parse(localStorage.getItem('Products')))}</option>
                           
                        </select>
                     
                  </div>
                  
                  <span id="priceProductPopUp">${dataInPopUp[2]}</span>
                  
              </div>
            
              <input type="button" form="formSizePopUp" value="Add to cart" id="buttonAddToCartPopUp" style="margin-left:1.2vw;">
              <span style="display:none;"> ${dataInPopUp[3]} </span>
          </form>

      </div>

    
    </div>
    `)

    const cruzToCLose= document.querySelector("#closePopUp")
    cruzToCLose.addEventListener('click',()=>{
            const closeCruz=document.querySelectorAll(".popUpProducts")

            for(const childs of closeCruz){
                mainMerch.removeChild(childs)
            }
        
    
            document.querySelector(".containerProducts").classList.remove("blurContainerProducts")
    })

    const addToCartButtonPopUp=document.querySelector("#buttonAddToCartPopUp")
    addToCartButtonPopUp.addEventListener('click', allowCart)
    

}


 