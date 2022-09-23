import { newProducts } from "../../Data/ProductsToAdd.js"
import { toCreateContainersData } from "./functionsToCreateElements.js"

//Function que carga los datos correctos para que se muestre en el display
export function toShowData(){ 
    
        const lastProduct=newProducts.slice(-1) //Muestra el ultimo producto agregado

        for(const products of lastProduct){
            const {title, picture, id, garment, price, size}= products
            toCreateContainersData(title, picture, id, garment, price , size) 
        }

}