export const filterSearch=()=>{
    const inputSearch=document.querySelector("#searchProductsMerch")
    const productToFilter=document.querySelectorAll(".containerProductCard")

    inputSearch.addEventListener('input', ()=>{
        for( const products of productToFilter){
            ((products.lastElementChild.firstElementChild.firstElementChild.innerText).toLowerCase()).includes((inputSearch.value).toLowerCase())?products.classList.remove('filterDataProducts'):products.classList.add('filterDataProducts')
}})
}
