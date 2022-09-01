//Esta funcion crea el contenido y administra lo que se mostrará o no.
export function toCreateContainersData(...dataOfProducts){
  
    const forAlingDataProductsAP=document.querySelector("#alingDataProductsAP")


    const containerDataProductsAP=document.createElement("div")
    containerDataProductsAP.className="containerDataProductsAP" //colocar este en el padre

    const dataProductsAP=document.createElement("div")
    dataProductsAP.className="dataProductsAP"
    dataProductsAP.innerHTML=`
        <span class="idOfProductsAP" >${dataOfProducts[0]}</span>
        <span>${dataOfProducts[1]}</span>
        <span>${dataOfProducts[2]}</span>
        <span>${dataOfProducts[3]}</span>
        `


    const containerDeleteIconAP=document.createElement("div")
    containerDeleteIconAP.className="containerDeleteIconAP"
    containerDeleteIconAP.innerHTML=`<img class="imgDeleteIconAP" src="../../assets/pages/administratorPage/deleteIcon.png" alt="" >`
    


    forAlingDataProductsAP.appendChild(containerDataProductsAP)

    containerDataProductsAP.appendChild(dataProductsAP)

    containerDataProductsAP.appendChild(containerDeleteIconAP)

}