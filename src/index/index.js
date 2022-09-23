
import { loadDefProducts } from "../AdministratorPage/helpers/functionLoadProducts/loadDefProducts.js";
import { imagesInfoIdx } from "./Data/imageInfo.js";


for(const images of imagesInfoIdx){

    images.addEventListener('click', ()=>{
        Swal.fire({
           imageUrl:`${images.src}`,
           padding:'2vw',
           background:'rgba(0, 0, 0, 0.75)',
           backdrop:'blur(6px)'
        })
    })
   
}

//Cuando carga la página cargan los productos
window.addEventListener('load', loadDefProducts)