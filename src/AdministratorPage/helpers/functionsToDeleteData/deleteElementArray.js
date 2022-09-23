import { newProducts } from "../../Data/ProductsToAdd.js"
//funcion que se encarga de eliminar el elemento del array y actualizar el localStorage
export function deleteElementArray(elementToDelete){

    let indexDelete=newProducts.findIndex((element)=>element.id==elementToDelete)

    newProducts.splice(indexDelete, 1)

    localStorage.setItem('Products', JSON.stringify(newProducts))

}
