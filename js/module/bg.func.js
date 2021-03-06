import {
    linkTag
} from "./dom.constant.js";

import {
    setStorage,
    getStorage,
    removeStorage
} from './storage.func.js';

import {
    setStorageBefore
} from "./animation.func.js";

import {
    changeSkin
} from "./skin.func.js";

import {
    openMessage
} from "./message.func.js";

import {
    removeElement
} from "./global.func.js";

import {
    apiData
} from "./all.data.js";
var skin_Transparent = "./css/skin/skin_Transparent.css"; //透明皮肤数据

//设置必应壁纸为背景
function setBingImage(status) {
    if (getStorage("bg") == "setBingImage" && !status) {
        openMessage({
            title: "提示",
            type: "error",
            content: "请勿重复选择！！！"
        })
        return;
    }
    let [clientWidth, clientHeight] = [document.body.clientWidth, document.body.clientHeight];
    let [w, h] = ["", ""];
    if (clientWidth > clientHeight) {
        w = 1920;
        h = 1080;
    } else if (clientWidth < clientHeight) {
        w = 768;
        h = 1280;
    } else {
        w = 1920;
        h = 1200;
    }
    let bingApiData = apiData.find(item => item.apiName == "bingImage");
    let bingApi = `${bingApiData.url}?d=0&w=${w}&h=${h}&callback=${bingApiData.callback}`;
    window.bing = {
        bg: function (data) {
            let func = () => {
                globalImage(data.data.url);
                WoolGlass(data.data.url);
            }
            if (status) {
                globalImage(data.data.url);
                WoolGlass(data.data.url);
            } else {
                setStorageBefore(func);
                changeSkin("skin", skin_Transparent);
            }
        }
    }
    let script = document.createElement("script");
    script.src = bingApi;
    document.querySelector("head").appendChild(script);
    document.querySelector("head").removeChild(script);
    setStorage("bg", "setBingImage");
}

function setCustomizeImage() {
    let input = document.createElement("input");
    let reader = new FileReader();
    let file = "";
    let data = "";
    let func = () => {
        globalImage(data);
        WoolGlass(data);
    }
    input.type = "file";
    input.style.display = "none";
    document.body.appendChild(input);
    input.click();
    input.addEventListener("change", (e) => {
        file = input.files[0];
        console.log(file)
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            openMessage({
                title: "提示",
                type: "error",
                content: `不是有效的图片文件!`
            })
            input.value = "";
            return;
        }
        if (file.size > 3145728) {
            openMessage({
                title: "提示",
                type: "error",
                content: `当前文件大小为${size}MB，建议不超过3MB！`
            })
            input.value = "";
            return;
        }
        // 以DataURL的形式读取文件:
        reader.onload = function (e) {
            data = e.target.result;
            setStorageBefore(func, "bg", data);
            changeSkin("skin", skin_Transparent);
        };
        reader.readAsDataURL(file);
        document.body.removeChild(input);
    })
}

//恢复默认
function setdefault(type) {
    if (type == "changebg" && getStorage("skin") !== './css/skin/skin_SunsetBeach.css') {
        let defaultSkin = () => {
            linkTag.href = './css/skin/skin_SunsetBeach.css';
            removeStorage("bg");
            removeStorage("customOpacityValue");
            removeElement("#globalImage");
            removeElement("#WoolGlass");
            setStorage('skin', './css/skin/skin_SunsetBeach.css');
        }
        setStorageBefore(defaultSkin);
    } else {
        openMessage({
            title: "提示",
            type: "error",
            content: "当前已为默认！"
        })
    }
}

function globalImage(url) {
    let style = document.createElement("style");
    style.setAttribute("id", "globalImage");
    style.innerHTML = `
        #body {
            background:url('${url}') no-repeat;
            background-size: cover;
        }`;
    document.querySelector("head").appendChild(style);
}

function WoolGlass(url) {
    let style = document.createElement("style");
    style.setAttribute("id", "WoolGlass");
    style.innerHTML = `
        .search-group::after,
        .search-option::after,
        #sideBarButton::after,
        #sideBar::after,
        .commons::after,
        #searchList::after,
        #dialog::after,
        #messageList li::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            filter: blur(10px);
            margin: -30px;
            background: url(${url});
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
        }`;
    document.querySelector("head").appendChild(style);
}
export {
    setBingImage,
    setCustomizeImage,
    setdefault,
    globalImage,
    WoolGlass
}