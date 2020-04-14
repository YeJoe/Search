import {
    openMessage
} from "./message.func.js";

import {
    setStorageBefore
} from './animation.func.js';

import {
    getStorage,
    setStorage
} from './storage.func.js';

import {
    body
} from "./dom.constant.js";

import {
    removeElement
} from "./global.func.js";
//切换ui风格
function changeUI(uiName, value) {
    if (getStorage("uistyle") == value) {
        openMessage({
            title: "提示",
            type: "error",
            content: "请勿重复选择UI风格！！！"
        })
        return;
    }
    let setHref = () => {
        uiTag.href = value;
        removeElement("#customFillet");
    }
    setStorageBefore(setHref, uiName, value);
}

function customFillet(value) {   
    let style = document.createElement("style");   
    style.setAttribute("id", "customFillet");
    style.setAttribute("type", "text/css");
    let styles = `
        .search-group,
        .search-group::before {
            border-radius: ${value}px;               
        }
        .capsule {
            border-radius: ${value*0.625}px;           
        }
        .setlist,
        .about-content {
            border-radius: ${value*0.375}px;        
        }
        .search-option,
        .search-option::after {
            border-radius: ${value*0.5}px;          
        }
        #searchList {
            border-radius: ${value*0.6}px;         
        }
        #searchList li {
            border-radius: ${value*0.5}px;
        }`;
  
       style.innerHTML = styles;
             if (document.querySelector("#customFillet") == undefined) {
                body.appendChild(style);
             } else {           
                 document.querySelector("#customFillet").innerHTML =styles;  
                
             }
        setStorage("customFilletValue", value);
       
     }
       
     function customOpacity(value) {   
        let style = document.createElement("style");   
        style.setAttribute("id", "customFillet");
        style.setAttribute("type", "text/css");
        let opacitys = `
            .search-group,
            .search-group::before {
                opacity: ${value};           
            }
            .capsule {
                opacity: ${value};    
            }
            .setlist,
            .about-content {
                opacity: ${value};     
            }
            .search-option,
            .search-option::after {
                opacity: ${value};     
            }
            #searchList {
                opacity: ${value};     
            }
            #searchList li {
                opacity: ${value};  
            }
            #commonUse{
                opacity: ${value};   
            }`;
          
           style.innerHTML = opacitys;
                 if (document.querySelector("#customFillet") == undefined) {
                    body.appendChild(style);
                 } else {           
                     document.querySelector("#customFillet").innerHTML =opacitys;  
                  
                 }
            setStorage("customOpacityValue",value);
            setStorage("customFilletValue", value);
         }

export{
    changeUI,
    customFillet,
    customOpacity
}