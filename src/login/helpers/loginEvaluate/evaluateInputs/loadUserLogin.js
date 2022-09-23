import { inputUserName, inputUserPassword } from "../../../data/dataForm/elementsLogin.js"


export const evaluateDataUserLoginInputs=(event)=>{
    console.log()
    event.preventDefault()

    if((inputUserName.value!="")&&(inputUserPassword.value!="")){
        
        localStorage.setItem('logged', 'true')
        localStorage.setItem('nameUser', JSON.stringify(inputUserName.value))
      
       
        window.location.href="../merchandising.html"

      
        if(localStorage.getItem(`cartOf${inputUserName.value}`)==null){
            
            localStorage.setItem(`cartOf${inputUserName.value}`, 'false')
        }
        
    }
    
    else{
        Swal.fire({
            title:'Datos no validos',
            icon:'error'
        })
    }
      

}