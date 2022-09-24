
import { minimunPriceInput,filterPriceBtnInput, maxPriceInput} from "../../../Data/dataForFilter/inputs.js"
//Se encarga de filtrar el producto por el precio
export const filterProductsMerch=()=>{   
    const productToFilter=document.querySelectorAll(".containerProductCard")
    
    const elementsToFilter= []

    for(const products of productToFilter){
        elementsToFilter.push(products)
    }

    evalueInputsFilter()

    filterPriceBtnInput.addEventListener('click',()=>{

        let maxPriceUser=maxPriceInput.value
        let minPriceUser=minimunPriceInput.value 

        const newToDelete=elementsToFilter.filter((element)=>(((element.lastElementChild.firstElementChild.lastElementChild.innerText).substring(1,Infinity))<`${minPriceUser}`)+(((element.lastElementChild.firstElementChild.lastElementChild.innerText).substring(1,Infinity))>`${maxPriceUser}`) )
            
        const newToShow=elementsToFilter.filter((element)=>((element.lastElementChild.firstElementChild.lastElementChild.innerText)>`$${minPriceUser}`)+((element.lastElementChild.firstElementChild.lastElementChild.innerText)<`$${maxPriceUser}`))
          
        newToDelete.map((product)=>product.classList.add("filterDataProducts"))

        minimunPriceInput.addEventListener('input',()=>{
            newToShow.map((product)=>product.classList.remove('filterDataProducts'))
        })
        maxPriceInput.addEventListener('input',()=>{
            newToShow.map((product)=>product.classList.remove('filterDataProducts'))
        })
    
    })
    
  
}

const evalueInputsFilter=()=>{
    maxPriceInput.addEventListener('input',()=>{
        if(isNaN(minimunPriceInput.value)||isNaN(maxPriceInput.value)){
           filterPriceBtnInput.setAttribute('disabled', '')
        }else{
            filterPriceBtnInput.removeAttribute('disabled', '')
        }
    })
    minimunPriceInput.addEventListener('input', ()=>{
        if(isNaN(minimunPriceInput.value)||isNaN(maxPriceInput.value)){
            filterPriceBtnInput.setAttribute('disabled', '')
        }else{
            filterPriceBtnInput.removeAttribute('disabled', '')
        }
    })

  
}