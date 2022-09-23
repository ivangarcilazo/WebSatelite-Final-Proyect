
import { loadDefProducts } from "./helpers/functionLoadProducts/loadDefProducts.js"

import { evalueData } from "./helpers/evalueData.js"
import { sendFormAp } from "./helpers/sendFormAp.js"

import {idElement} from "./Data/ToEvalue.js"
import {UserPrice} from "./Data/ToEvalue.js"
import { loadFileImg } from "./helpers/functionLoadFileAP/loadFileImg.js"




//Data & evalue
idElement.addEventListener('input', evalueData)
UserPrice.addEventListener('input', evalueData)

//Send Form
export const formAP=document.querySelector('#formAP')

formAP.addEventListener('click', sendFormAp)


//Cuando carga la página cargan los productos
window.addEventListener('load', loadDefProducts)

document.body.addEventListener('click', loadFileImg)





   











