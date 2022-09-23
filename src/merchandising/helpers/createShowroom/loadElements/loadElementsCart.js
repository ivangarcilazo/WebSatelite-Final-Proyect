
import { generatePopUpCart } from "./helpers/generatePopUpCart.js"

//Carga los elementos en el popUp para que puedan ser utilizados

export const loadElementsCart=()=>{

    const cartId=document.querySelectorAll('.radiusCart')

    for(const objects of cartId){

        objects.addEventListener('click', ()=>{

            //Obtiene los datos del objeto al cual se le hizo click
            const padreRaiz=objects.parentNode.parentNode //Raiz
            const imageToPopUP=padreRaiz.firstElementChild.src
            const titleInfoPopUp=padreRaiz.lastElementChild.firstElementChild.firstElementChild.innerText
            const pricePopUp=padreRaiz.lastElementChild.firstElementChild.lastElementChild.innerText
            const idElement=padreRaiz.lastElementChild.lastElementChild.innerText

            generatePopUpCart(imageToPopUP, titleInfoPopUp, pricePopUp, idElement)

            document.querySelector(".containerProducts").className="blurContainerProducts containerProducts"
            
        })
        
    }

}
