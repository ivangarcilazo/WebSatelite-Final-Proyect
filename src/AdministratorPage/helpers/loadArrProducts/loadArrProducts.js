import { newProducts } from "../../Data/ProductsToAdd.js"

export const loadArrProducts=async()=>{
    const productsAPI= await fetch('../../JSON/dataProducts/dataProducts.json')
    
    const data =await productsAPI.json()

    Object.entries(data).forEach((key)=>{
        newProducts.push(key[1])
    })

}