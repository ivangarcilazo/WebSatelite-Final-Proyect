import { newProducts } from "../../Data/ProductsToAdd.js"


//función que carga en el array los elementos necesarios.

export const loadDefProducts= async ()=>{

    if( !localStorage.getItem('firstTimeLoad')){

        const productsAPI= await fetch('../../JSON/dataProducts/dataProducts.json')
    
        const data =await productsAPI.json()

        Object.entries(data).forEach((key)=>{
            newProducts.push(key[1])
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


