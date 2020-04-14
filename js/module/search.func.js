import {
    selectEngine,
    searchInput,
    searchList
} from "./dom.constant.js";

import {
    jsonData
} from "./all.data.js";

import {
    setStorage,
    getStorage
} from "./storage.func.js";
//搜索事件
function goSearch() {
    let value = searchInput.value; //获取输入框的值
    let engineValue = selectEngine.children[0].alt; //获取选择的搜索引擎
    let engine = jsonData.engine.find(item => item.value == engineValue);
    window.open(engine.href + value); //拼接搜索链接
    searchHistory({
        engine: engine,
        content: value
    });
}

function renderEngineOption() {
    let searchEngine = "";
    jsonData.engine.forEach(element => {
        if (element.select == "selected") {
            selectEngine.innerHTML = `
            <img src='${element.icon}' alt="${element.value}">
            <span>${element.name}</span>
            <i class="fa fa-sort"></i>`;
        }
        searchEngine += `
            <li id="${element.value}">
                <img src='${element.icon}'>
                <span>${element.name}</span>
            </li>`;
    });
    selectOption.innerHTML = `
        <div class="option-title">
            <span>请选择搜索引擎：</span>
            <span>搜索热词
                <div class="switch-box">
                    <input name="switch-content" class="switch-content" type="checkbox" />
                    <label for="switch-content" class="switch-label"></label>
                </div>
            </span>
        </div>
        <ul>${searchEngine}</ul>`;
}

//渲染搜索引擎备选项
function setEngine(engineValue) {
    selectEngine.innerHTML = `
        <img src='${engineValue.icon}' alt="${engineValue.value}">
        <span>${engineValue.name}</span><i class="fa fa-sort"></i>`;
    selectOption.style.display = "none";
    searchList.style.display = "none";
}


//搜索记录
function searchHistory(value) {
    if (!getStorage("searchHistory").value) {
        setStorage("searchHistory", "[]");
    }
    let history = getStorage("searchHistory").toJSON();
    history.push({
        engine: value.engine,
        content: value.content,
        time: new Date().toLocaleString()
    })
    setStorage("searchHistory", JSON.stringify(history));
}

// placeholder今日诗词
jinrishici.load(function(result) {
    var sentence = document.querySelector("#poem_sentence")
    var info = document.querySelector("#poem_info")
    sentence.innerHTML = result.data.content
    info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
    document.getElementById("search").setAttribute("placeholder",sentence.innerHTML+info.innerHTML);
 });
 //今日诗词end

// yiyan老式写法，兼容性最好; 支持 IE 
 var xhr = new XMLHttpRequest();
 xhr.open('get', 'https://v1.hitokoto.cn');
 xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
     var data = JSON.parse(xhr.responseText);
     var hitokoto = document.getElementById('hitokoto');
     hitokoto.innerText = data.hitokoto;
   }
 }
 xhr.send();
//一言end

export {
    goSearch,
    setEngine,
    renderEngineOption
}