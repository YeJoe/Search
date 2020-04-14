import {
    stopPropagation
} from "./global.func.js";

import {
    scrollContent,
    sideBar
} from "./dom.constant.js";

import {
    createWebsite
} from "./website.func.js";

import {
    createSetting
} from "./setting.func.js";

import {
    createToDo
} from "./todo.func.js";

import{
    createAbout
} from "./about.func.js"

//依据选中id渲染侧边栏内容函数
function renderSideBarContent(id) {
    switch (id) {
        case "ToDo":
            scrollContent.innerHTML = createToDo();
            break;
        case "Website":
            scrollContent.innerHTML = createWebsite();
            break;
        case "Setting":
            scrollContent.innerHTML = createSetting();
            break;
        case "About":
            scrollContent.innerHTML = createAbout();
            break;
   

       
    }
    sideBar.className = "moveLeft";
    stopPropagation();
}
export {
    renderSideBarContent
}