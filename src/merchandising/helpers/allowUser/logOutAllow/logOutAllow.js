export const logOutAllow=()=>{
    document.querySelector(".loggOutMerchIMG").addEventListener('click', ()=>{
        localStorage.removeItem('logged')
        window.location.reload()
    })
    

}
