

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
