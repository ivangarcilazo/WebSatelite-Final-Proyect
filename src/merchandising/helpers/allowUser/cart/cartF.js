import { loadElementsCartMerch } from "./helpers/loadElementsCart.js"
//funcion que ejecuta el carrito
export const runCart=()=>{
    document.querySelector(".containerCartMerch").addEventListener('click',()=>{

        //first
        const cartApear=document.querySelector(".containerDisplayCartMerch")
        cartApear.classList.remove("closeCartMerch")
        // cartApear.style.width=

        //second
        loadElementsCartMerch()
        
        //third
        document.querySelector("#closeButtonCartMerch").addEventListener('click', ()=>{
            cartApear.className="containerDisplayCartMerch closeCartMerch"

            //cuando el usuario cierra el popup, sus elementos se borran para poder cargar bien si añade algo más.
            const alingProductsCartMerch=document.querySelector(".alingProductsCartMerch")
            alingProductsCartMerch.innerHTML= ``
        })
    })
}