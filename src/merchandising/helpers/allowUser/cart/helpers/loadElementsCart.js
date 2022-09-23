import { deleteElemetsCart } from "./deleteElementsCart/deleteElementsCart.js"

//funcion que carga los elementos correspondientes al carrito
export const loadElementsCartMerch=()=>{
    const alingProductsCartMerch=document.querySelector(".alingProductsCartMerch")
    
    const cartElements=JSON.parse(localStorage.getItem(`cartOf${JSON.parse(localStorage.getItem('nameUser'))}`))

    if(cartElements==false){
        Swal.fire({
            position: 'bottom-end',
            backdrop:`
            rgba(0,0,0,0)
            `,
            title: 'Please note that you have not added products yet',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar:true
          })
    }else{
        for(const productsCart of cartElements){

                alingProductsCartMerch.insertAdjacentHTML('afterbegin', `
        
                <div class="containterProductCartMerch">
                            <span style="display:none">${productsCart.idElement}</span>
                            <img src="${productsCart.pictureCart}" alt="${productsCart.titleCart}">
        
                            <div class="containerDataCartMerch">
                                <h4>${productsCart.titleCart}</h4>
                                <span class="sizeCartMerch">Size:${productsCart.sizeCart}</span>
                                
                                <div class="containerPriceCartMerch">
                                    <span class="priceCartMerch">${productsCart.priceCart}</span> 
                                </div>
                              
                                
                            </div>
        
                            <div class="containerDeleteProductCartMerch">
                                <img src="../assets/pages/merchandising/cart/trashIcon.jpg" alt="" id="deleteItemCartBtn">
                            </div>
                </div>
                `
                )

                
           }

        deleteElemetsCart()
        
    }
   
}