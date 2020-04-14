import {
    jsonData
} from "./all.data.js";



var skin_Transparent = ""; //透明皮肤数据

//判断渲染关于项
function aboutCapsule(inner) {
    let sideBarHtml = "";
    if (!inner.type) {
        sideBarHtml = `
            <div id="${inner.value}" class="setlist" style="border:2px solid ${inner.color};color:${inner.color};">
                <span><i class="${inner.icon}"></i>  ${inner.name}：</span>
                <span>${inner.content}</span>
            </div>`;
    }
  
    if (inner.type == "thanks") {
        sideBarHtml = `
            <a href="${inner.href}" target="_blank">   
                <div class="setlist" style="border:2px solid ${inner.color};">${inner.name}</div>
            </a>`;
    }
    return sideBarHtml;
}

//创建关于项数据
function createAbout() {
    let aboutInfo = "",
        sideBarHtml = "";
    let aboutData = jsonData.sideBar.content.find(item => item.value == "About").content;
    aboutData.forEach(item => {
        if (item.show) {
            aboutInfo += `<p><i class="${item.icon}"></i>  ${item.name}</p>`;
            if (item.content !== "" && typeof item.content !== "string" && item.value !== "about") {
                item.content.forEach(inner => {
                    if (inner.show) {
                        if (typeof inner.content === "string" && inner.content !== "") {
                            //content不为空且为字符串时
                            sideBarHtml += aboutCapsule(inner);
                        } else {
                            //content为空时的内容
                            sideBarHtml += aboutCapsule(inner);
                        }
                    } else {
                        if (inner.type == "skin" && inner.value == "skin_Transparent") {
                            skin_Transparent = inner.href;
                        }
                    }
                })
            } else if (item.value == "about") {
                sideBarHtml += renderAbout(item);
            }
            if (item.value == "about") {
                aboutInfo = aboutInfo + `
                <div class="about-box">
                    ${sideBarHtml}
                </div>`;
            } else {
               aboutInfo = aboutInfo + `
                <div class="capsule-content">
                    ${sideBarHtml}
                </div>`;
            }
            sideBarHtml = "";
        }
    })
   
    return aboutInfo;
}





function renderAbout(data) {
    let sideBarHtml = "";
    data.content.forEach(item => {
        if (item.show) {
            if (typeof item.content == "string") {
                sideBarHtml += `
                    <div class="about-info">
                        <span><i class="${item.icon}"></i>  ${item.name}：</span>
                        <span><a href='${item.href}' target="_blank">${item.content}</a></span>
                    </div>`;
            } else {
                item.content.forEach(inner => {
                    sideBarHtml += `
                        <div class="about-info">
                            <span><i class="${inner.icon}"></i>  ${inner.name}：</span>
                            <span><a href='${inner.href}' target="_blank">${inner.content}</a></span>
                        </div>`;
                })
            }

        }
    })
    return `
        <div class="about-content" style="border:2px solid ${data.color};">
            ${sideBarHtml}
            <div class="about-info">
                <span><i class="fa fa-window-maximize"></i>  浏览器信息：</span>
                <span>${navigator.userAgent}</span>
            </div>
        </div>`;
}

export {
    createAbout,
    
}