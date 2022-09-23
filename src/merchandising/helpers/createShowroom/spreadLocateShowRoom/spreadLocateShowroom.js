
import { containerProducts } from "../../../Data/containerProducts.js"

import { mainMerch } from "../../../Data/containerProducts.js"

import { loadElementsCart } from "../loadElements/loadElementsCart.js"


//Crea los contenedores donde irán a mostrarse los productos

export const spreadLocateShowRoom=(...dataForShowRoom)=>{
    console.log(dataForShowRoom)
    const containerProductCard=document.createElement("div")
    containerProductCard.className="containerProductCard"

    containerProductCard.innerHTML=`
          
            <img src="${ dataForShowRoom[0].picture }" alt="${dataForShowRoom[0].title}">

            <div class="containerDataProduct">

                <div class="containerTextInfo">
                    <h4 class="titleProductMerch">${ dataForShowRoom[0].title }</h4>
                    <span class="priceProductMerch">$${ dataForShowRoom[0].price }</span>
                </div>
            
                <div class="radiusCart" id="uno">
                    <img src="../assets/pages/merchandising/containerInfoProducts/icone-de-panier-noir.png" alt="">
                </div>

                <span style="display:none;">${dataForShowRoom[0].id}</span>

            </div>
        
    `
    mainMerch.appendChild(containerProducts)
    containerProducts.appendChild(containerProductCard)

   loadElementsCart()
 
 
}

