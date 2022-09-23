import { CartProducts,userDataCart } from "../../../../../../data/arrUsers.js"


//funcion que evalua si el usuario se logueó para habilitar o no el carrito.

export const allowCart=(event)=>{
 
    event.preventDefault()

    const allowPermission=localStorage.getItem('logged')
    const addToCartButtonPopUp=document.querySelector("#buttonAddToCartPopUp")

   if(allowPermission=='true'){

    Swal.fire({
        title:'Are you sure to add this item to cart?',
        showDenyButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((res)=>{
        if(res.isConfirmed){
            let pictureToCart=addToCartButtonPopUp.parentNode.parentNode.parentNode.firstElementChild.src
            let titleToCart=addToCartButtonPopUp.parentNode.firstElementChild.innerText
            let priceToCart=addToCartButtonPopUp.parentNode.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerText
            let garmentSize=document.querySelector("#garmentSizeSelector")
            let sizeToCart= garmentSize.options[garmentSize.selectedIndex].text
            let idElement=addToCartButtonPopUp.parentNode.lastElementChild.innerText

            console.log(idElement)

            new CartProducts(pictureToCart, titleToCart,sizeToCart ,priceToCart, idElement ).setItemsCart()

            Swal.fire({
                icon:'success',
                title:'successfully added',
                timer:1300,
                timerProgressBar: true
            })
        }
    })

   }else{
    Swal.fire({
        title:'Please, loggin!',
        icon:'error'
    }).then((res)=>{
        res.isConfirmed&&(window.location.href="../pages/login/login.html")

        
    })
   }
    
}
