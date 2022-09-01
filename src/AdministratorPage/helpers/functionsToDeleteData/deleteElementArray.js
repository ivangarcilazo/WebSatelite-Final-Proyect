import { newProducts } from "../../Data/ProductsToAdd.js"
//funcion que se encarga de eliminar el elemento del array

export function deleteElementArray(elementToDelete){

    let indexDelete=newProducts.findIndex((element)=>element.id==elementToDelete)

    newProducts.splice(indexDelete, 1)

    console.log(newProducts)
}
