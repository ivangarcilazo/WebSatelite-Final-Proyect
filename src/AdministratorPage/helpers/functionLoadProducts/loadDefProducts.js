import { newProducts } from "../../Data/ProductsToAdd.js"


//función que carga en el array los elementos necesarios.

export const loadDefProducts= async ()=>{

    if( !localStorage.getItem('firstTimeLoad')){
        
     await fetch('./JSON/dataProducts/dataProducts.json')
        .then((data)=>data.json())
        .then((data)=>{
            Object.entries(data).forEach((key)=>{
                newProducts.push(key[1])
            })
        })  

        localStorage.setItem('Products', JSON.stringify(newProducts))

        localStorage.setItem('firstTimeLoad', true)

    }else{
        
       const products= JSON.parse(localStorage.getItem('Products'))

       for(const product of products){
         newProducts.push(product)
       }
        
    }
    
}

