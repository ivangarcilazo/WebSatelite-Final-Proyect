import { inputSubmitLogin } from "./data/dataForm/elementsLogin.js";
import { evaluateDataUserLoginInputs } from "./helpers/loginEvaluate/evaluateInputs/loadUserLogin.js";
import { changeThemeFocus } from "./helpers/inputsChanges.js"; //Cambia el tema del login

changeThemeFocus()

inputSubmitLogin.addEventListener('click', evaluateDataUserLoginInputs)


