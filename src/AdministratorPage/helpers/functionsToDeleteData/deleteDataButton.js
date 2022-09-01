

import { deleteElementArray } from "./deleteElementArray.js"
//Hace todo el proceso del DOM y elimina del array el elemento

export function getDeleteButonAP(){


    
    const deleteIconAP=document.querySelectorAll(".imgDeleteIconAP")
   

    for(const deleteIcon of deleteIconAP){

        deleteIcon.addEventListener('click', ()=>{
           
            const fatherNodeData=deleteIcon.parentNode.parentNode
            const idProductToDelete=deleteIcon.parentNode.parentNode.firstChild.firstChild.nextSibling.innerText

            Swal.fire({
                title:'Are you sure you want to delete this item?',
                cancelButtonText: 'Cancel',
                showCancelButton: 'true',
                confirmButtonText:'Yes',
                showConfirmButtonText:'true',

                background:'linear-gradient(52deg, rgba(109,120,218,1) 22%, rgba(29,6,83,1) 71%)',
                color:'white'

                

            }).then((result)=>{
                if(result.isConfirmed){

                    Swal.fire({
                        icon:'success',
                        footer:'Deleted :)',

                        timer:3000,
                        timerProgressBar:'true',

                    })

                    deleteElementArray(idProductToDelete)

                    fatherNodeData.remove()
                

                }else{
                    Swal.close()
                }
            })
        })
    }
}
