import { logOutAllow } from "./logOutAllow/logOutAllow.js"
import { runCart } from "./cart/cartF.js"

//evalua si el usuario entró, y permite que pueda ejecutar acciones de usuario logeado
export const allowUser=()=>{
    
    const pLoginAccess=  document.querySelector(".containerCartLoginMerch")
    const loginInner=document.querySelector("#loginMerchSide")
    let allow=localStorage.getItem('logged')
    
    
    if(allow=='true'){
        loginInner.innerText=`¡Bienvenid@ ${JSON.parse(localStorage.getItem('nameUser'))}!`

        pLoginAccess.insertAdjacentHTML('afterbegin', ` <img src="../assets/pages/merchandising/containerInfoProducts/iconExxit.png" alt="" class="loggOutMerchIMG">`)
        pLoginAccess.insertAdjacentHTML(`beforeend`, `
                <div class="containerCartMerch">
                    <img id="cartUserIcon" src="../assets/pages/merchandising/containerInfoProducts/cartWhite.png" alt="">
                </div>
        `)
       logOutAllow()

       runCart()
        
    }  
}
