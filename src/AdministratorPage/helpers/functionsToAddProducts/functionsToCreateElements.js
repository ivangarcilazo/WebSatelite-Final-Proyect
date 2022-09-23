//Esta funcion crea el contenido y administra lo que se mostrará o no.
export function toCreateContainersData(...dataOfProducts){
    

    const forAlingDataProductsAP=document.querySelector("#alingDataProductsAP")//Raiz


    const containerDataProductsAP=document.createElement("div")
    containerDataProductsAP.className="containerDataProductsAP" //colocar este en el padre

    const dataProductsAP=document.createElement("div")
    dataProductsAP.className="dataProductsAP"
    dataProductsAP.innerHTML=`
        <div class="titleProductAP">${dataOfProducts[0]}</div>

        <div class="containerImgDataProductAP">
            <img class="imgOfProductsAP" src="${dataOfProducts[1]}" alt="${dataOfProducts[0]}"  referrerpolicy="no-referrer">

            <div>
                <span class="indicatorDataAP">Id:</span>
                <span class="idOfProductsAP" >${dataOfProducts[2]}</span>
            </div>

            <div>
                <span class="indicatorDataAP">Garment:</span>
                <span >${dataOfProducts[3]}</span>
            </div>

            <div>
                <span class="indicatorDataAP">Price:</span>
                <span >${dataOfProducts[4]}</span>
            </div>

            <div>
                <span class="indicatorDataAP">Size:</span>
                <span >${dataOfProducts[5]}</span>
            </div>

        </div>
        `


    const containerDeleteIconAP=document.createElement("div")
    containerDeleteIconAP.className="containerDeleteIconAP"
    containerDeleteIconAP.innerHTML=`<img class="imgDeleteIconAP" src="../../assets/pages/administratorPage/deleteIcon.png" alt="" >`
    


    forAlingDataProductsAP.appendChild(containerDataProductsAP)

    containerDataProductsAP.appendChild(dataProductsAP)

    containerDataProductsAP.appendChild(containerDeleteIconAP)

   document.querySelector("#confirmMerchAdded").addEventListener('click', ()=>{
        const containerData=document.querySelectorAll(".containerDataProductsAP")

        for(const elements of containerData){
            elements.style.animationName="confirmAnimation"
          
            setTimeout(  function changeStyle(){
                elements.style.display="none"

                Swal.fire({
                    title:'Success',
                    icon:"success",
                    timer:1000,
                })
            },500)

            
        }
   })
}