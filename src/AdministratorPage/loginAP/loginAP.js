
alert('Name: admin,  password:12345')


let login=document.querySelector('#formLogin')
let message=document.querySelector('#messageError')

localStorage.getItem('nombreAdmin')=='admin' && localStorage.getItem('passwordAdmin')=='12345' ?

    window.location.href="../administratorPage.html"
    :
    login.addEventListener('submit', sendForm);



function sendForm(){
        event.preventDefault()
        
        const nombreAdmin= document.querySelector('#nameLogin').value
        const passwordAdmin=document.querySelector('#passwordLogin').value
    
        localStorage.setItem('nombreAdmin', nombreAdmin)
        localStorage.setItem('passwordAdmin', passwordAdmin)
        
    
        nombreAdmin=='admin' && passwordAdmin=='12345'?
            window.location.href="../administratorPage.html" 
            :
            message.innerHTML='<span class="messageError"><b>Revise los datos introducidos ❌</b></span>'
        
}


    


