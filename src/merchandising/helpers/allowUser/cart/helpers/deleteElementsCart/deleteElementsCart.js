export const deleteElemetsCart=()=>{
    const cartElements=JSON.parse(localStorage.getItem(`cartOf${JSON.parse(localStorage.getItem('nameUser'))}`))
    const deleteBtn=document.querySelectorAll("#deleteItemCartBtn")
        for(const btn of deleteBtn){

            btn.addEventListener('click',()=>{
                Swal.fire({
                    title:'Are you sure you want to delete this item?',
                    background:'gray',
                    color:'white',
                    showCancelButton: true,
                    confirmButtonText: 'Yes!'
                }).then((r)=>{
                    if(r.isConfirmed){
                        
                        const productToDelete=btn.parentNode.parentNode // para cambiar el display
                        const elementId=productToDelete.firstElementChild.innerText
                        const findIndex=cartElements.findIndex((id)=>id.idElement==elementId)
                        
                        cartElements.splice(findIndex,1)
            
                        localStorage.setItem(`cartOf${JSON.parse(localStorage.getItem('nameUser'))}`, JSON.stringify(cartElements))
            
                        productToDelete.style.display="none"
                    }
                })
            })

        }




    
   
}