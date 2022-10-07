/*************************************************************/
/*                   xiaohong2022.github.io                  */
/*                   created by Xiaohong2022                 */
/*                (c) 2022 All rights reserved.              */
/*************************************************************/

(async function main(){
  "use strict";
  var a = {
    sleep:async function (ms){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        }, ms);
      });
    },
    readCopy: async function(){
      return await navigator.clipboard.readText()
    },
    copy: async function copy(text){
      return await navigator.clipboard.writeText(text)
    },
    $: document.querySelectorAll,
    setv:((html,name,value)=>{html.setAttribute(name,value)}),
    setn:((html,value)=>{html.setAttribute(value,"")}),
    seth:((html,html5)=>{html.innerHTML=html5}),
    sett:((html,text)=>{html.innerText=text}),
    addhtml:((position,localName,data,html)=>{var newHtml=document.createElement(localName); for(var name in data){newHtml.setAttribute(name,data[name])}; newHtml.innerHTML=html; var newElement=position.appendChild(newHtml); return(newElement)}),
    addanot:((position,value)=>{var newHtml=document.createComment(value); var newElement=position.appendChild(newHtml); return(newElement)}),
    getParameters:((name)=>{return window.location.search.substring(1).split("&").find((a)=>a.split("=")[0]==name).split("=")[1];}),
    getCookie:((name)=>{return document.cookie.split("; ").find((a)=>a.split("=")[0]==name).split("=")[1];}),
    setCookie:((name, value)=>{document.cookie=`${name}=${value}`; return value}),
    saveFile:(name, data)=>{var urlObject = window.URL || window.webkitURL || window;var export_blob = new Blob([data]);var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")save_link.href = urlObject.createObjectURL(export_blob);save_link.download = name;save_link.click();}
  };
  Object.assign(window, a);//把上面的东西全部搞到全局变量里
})();
