/*************************************************************/
/*                         XH Tool Set                       */
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
  };
  Object.assign(window, a);//把上面的东西全部搞到全局变量里
  console.log("%c"+`小宏工具集`,"color:#6cf;font-size:50px;text-shadow:0px 4px 10px #aaa;");
  console.log("嘿，欢迎使用小宏工具集。");
  console.log("本站有一些常用的小工具，快去使用吧（更多小工具正在开发中，敬请期待~）");
})();
