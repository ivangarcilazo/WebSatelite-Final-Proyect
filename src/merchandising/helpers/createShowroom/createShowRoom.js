import { filterProductsMerch } from "./filterProductsMerch/filterProductsMerch.js"
import { filterSearch } from "./filterProductsMerch/filterSearch.js"
import { spreadLocateShowRoom } from "./spreadLocateShowRoom/spreadLocateShowroom.js"

//Crea en la página de merchandising los productos agregados o existentes y está atento al filtrador
export const createShowRoom=()=>{


    let productsLSRefreshed=JSON.parse(localStorage.getItem('Products'))
    
     
    for(const products of productsLSRefreshed){
        spreadLocateShowRoom(products)
       
    }

    filterProductsMerch()
    filterSearch()
}

