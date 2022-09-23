import { pictureAP } from "../../Data/imageArray/imgArr.js"


export const loadFileImg=()=>{

    const loadFile=document.querySelector("#pictureAP")

    loadFile.addEventListener('change',p=>{
        const formData=new FormData()

        formData.append('image', p.target.files[0])

        fetch("https://api.imgur.com/3/image/", {
            method:'POST',
            headers:{
                Authorization:"Client-ID 5e59d6aae1753af"
            },
            body:formData
        }).then((data)=>data.json())
        .then((data)=>{pictureAP.push(data.data.link)})
        .catch(()=>alert('Error'))
    })



}

