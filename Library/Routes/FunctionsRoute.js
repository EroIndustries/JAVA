import { ADD } from "../Functions/Add/Add.js";
import { APPMODE } from "../Functions/App/App.js";
import { BODY } from "../Functions/Body/Body.js";
import { DISPLAY } from "../Functions/Display/Display.js";
import { EVENT } from "../Functions/Event/Event.js";
import { STORE } from "../Functions/Store/Store.js";
import { STYLED } from "../Functions/Style/Style.js";
import { MODULE } from "../Module/Module.js";
import { APPUPDATER } from "../Module/UpdateModule.js";
const FUNCTIONSROUTE=()=>{
    MODULE();
const FUNCTIONS=`const ADD=${ADD.toString()};
const DISPLAY=${DISPLAY.toString()};
const STORE=${STORE.toString()};
const STYLED=${STYLED.toString()};
const BODY=${BODY.toString()};
const EVENT=${EVENT.toString()};
const APPMODE=${APPMODE.toString()};
const APPUPDATER =${APPUPDATER.toString()};
`;
localStorage.setItem("FUNCTIONS",FUNCTIONS);
}
export{FUNCTIONSROUTE}