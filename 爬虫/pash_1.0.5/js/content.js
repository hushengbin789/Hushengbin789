//字符串格式化
String.prototype.format = function(){
  if(arguments.length===0){
    return this;
  }
  for(var s=this, i=0; i<arguments.length; i++){
    s = s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
  }
  return s;
};

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//     if (message.isLogin === false){
//         msgNotify('检测到未登录绩效考核辅助系统助手，请点击插件图标登录','error')
//     }
// });

// 信息通知
function msgNotify(msg,type) {
    if ($("#errorMsgLabel.notify").length > 0){$("#errorMsgLabel").remove();}
    let delayTime;
    if (type === "success"){delayTime = 10000}else{delayTime = 10000}
    let label = "<div id='errorMsgLabel' class='notify " + (type ? type : '')+"'>" + msg + "<span class='remove_msg_notify'>×</span></div>";
    $(label).insertAfter("body").first();
    $("#errorMsgLabel").show().delay(delayTime).fadeOut(function () {
        $("#errorMsgLabel").remove()
    });
    // $("#errorMsgLabel").show();
    removeNotify()
}
// 信息通知标签删除事件
function removeNotify() {
    $('.remove_msg_notify').click(function () {
        $("#errorMsgLabel").remove()
    });
}
// 等待页面某元素加载
async function waitElement(selector, times, interval, flag = true) {
    let _times = times || -1, // 默认不限次数
        _interval = interval || 500, // 默认每次间隔500毫秒
        _selector = selector, //选择器
        _iIntervalID,
        _flag = flag; //定时器id
    return await new Promise(function (resolve, reject) {
        _iIntervalID = setInterval(function () {
            if (!_times) { //是0就退出
                clearInterval(_iIntervalID);
                reject();
            }
            _times <= 0 || _times--; //如果是正数就 --
            let _self = $(_selector); //再次选择
            if ((_flag && _self.length) || (!_flag && !_self.length)) { //判断是否取到
                clearInterval(_iIntervalID);
                resolve(_iIntervalID);
            }
        }, _interval);
    });
}
// 页面dom加载完成，执行
$(document).ready(function () {});
//在页面完全载入后(包括图片、css文件等等)执行脚本代码
window.onload = async function(){
    function removeCookie(){
        let cookies = document.cookie.split(";");
        // 遍历所有的cookie，逐个删除
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
    }
    // 给页面的window对象添加一个属性，用来标识是否登录
    let storageChange='estone-username'
    function isLogin(storageChange){
        chrome.storage.local.get(storageChange, function (result) {
            console.log('username',result)
            if( result['estone-username']?.toString()=='[object Object]'){
                removeCookie()
                msgNotify('ESTONE 系统小助手登录失效，请检查后重新登录！','error')
            }
        })
    }
    var eCount=0;
    if (window.location.host.match(/\d+\.\d+\.\d+\.\d+/)) {
        // let username = await chrome.runtime.sendMessage({action: 'estoneBtnGet',data:{key:'estone-username'}});
        // console.log(username);
        // chrome.storage.onChanged.addListener(function (changes, namespace) {
        //     console.log('storageChange',changes)
        //     isLogin(storageChange)
        //     // 刷新页面
        //     window.location.reload()
        // })
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.type == 'storageChange') {
               if(!request.changes['estone-username']?.newValue){
                   // isLogin()
                   // 刷新页面
                   removeCookie()
                   msgNotify('ESTONE 系统小助手登录失效，请检查后重新登录！','error')
                   window.location.reload()
               }
            }
        });
        document.addEventListener('mousedown', function (e) {
            try {  // 监听点击按钮获取文本内容
                let ev = e || event;
                // console.log('000', ev.target)
                let textContent;
                if (ev.target.nodeName == 'BUTTON' || ev.target.getAttribute('type') === 'button') {
                    // console.log('111', ev.target.textContent);
                    textContent = ev.target.textContent;
                } else if (ev.target.parentElement.nodeName == 'BUTTON' && ev.target.parentElement.getAttribute('type') === 'button') {
                    // console.log('222', ev.target.textContent);
                    textContent = ev.target.textContent;
                }
                // console.log('textContent: '+textContent);
                if (textContent && textContent.toString().trim()) {
                    chrome.runtime.sendMessage({
                        action: 'userOperateContent',
                        data: {currentUrl: location.href, operateFun: textContent.toString().trim(),
                            erpCurrentUserInfo:window.localStorage.getItem('new_center_store')}
                    });
                    //, (response) => {console.log(response)}
                    // console.log(eCount);
                    eCount = 0
                }
            }catch (e) {
                console.log(e)
                eCount>8?msgNotify('ESTONE 系统小助手检测异常，请尝试刷新页面-eCount1','error'):eCount++
            }
        });
        document.addEventListener('keydown', function (e) {
            try {  // 监听点击按钮获取文本内容
                let ev = e || event;
                // console.log('000', ev.target)
                let textContent;
                if (ev.target.nodeName == 'BUTTON' || ev.target.getAttribute('type') === 'button') {
                    // console.log('111', ev.target.textContent);
                    textContent = ev.target.textContent;
                } else if (ev.target.parentElement.nodeName == 'BUTTON' && ev.target.parentElement.getAttribute('type') === 'button') {
                    // console.log('222', ev.target.textContent);
                    textContent = ev.target.textContent;
                }
                // console.log('textContent: '+textContent);
                if (textContent && textContent.toString().trim()) {
                    chrome.runtime.sendMessage({
                        action: 'userOperateContent',
                        data: {currentUrl: location.href, operateFun: textContent.toString().trim(),
                            erpCurrentUserInfo:window.localStorage.getItem('new_center_store')}
                    });
                    //, (response) => {console.log(response)}
                    // console.log(eCount);
                    eCount = 0
                }
            }catch (e) {
                console.log(e)
                eCount>8?msgNotify('ESTONE 系统小助手检测异常，请尝试刷新页面-eCount2','error'):eCount++
            }
        });
        // 监听storage变化
        document.addEventListener('click',function(){
            // 监听storage变化
            chrome.storage?.local?.get(storageChange, function (result) {
                if( !result['estone-username']|| result['estone-username']?.toString()=='[object Object]'){
                    removeCookie()
                    msgNotify('ESTONE 系统小助手登录失效，请检查后重新登录！','error')
                }else if (result['estone-username']&&typeof result['estone-username'] === 'string'||typeof result['estone-username'] === 'number') {
                }
            })
        })
    }
    // // 监控用户无操作
    // let freeTimeLt = await freeTimeLimit();
    // let freeTimeTimer = setTimeout(sendFreeTimeStart, freeTimeLt );
    // let userOpDelay = () => {
    //   clearTimeout(freeTimeTimer);
    //   freeTimeTimer = setTimeout(sendFreeTimeStart, freeTimeLt );
    // };
    // document.addEventListener('keydown', function(e){ userOpDelay(); });
    // document.addEventListener('mousemove', function(e){ userOpDelay(); });
    // document.addEventListener('mousedown', function(e){ userOpDelay(); });
    // document.addEventListener('mousewheel', function(e){ userOpDelay(); });
    // document.addEventListener('click', function (e) {
    //     userOpDelay();
    //     if (window.location.host.match(/\d+\.\d+\.\d+\.\d+/)) {
    //         let ev = e || event;
    //         // console.log('000', ev.target)
    //         let textContent;
    //         if (ev.target.nodeName == 'BUTTON' && ev.target.getAttribute('type') === 'button') {
    //             // console.log('111', ev.target.textContent);
    //             textContent = ev.target.textContent;
    //         } else if (ev.target.parentElement.nodeName == 'BUTTON' && ev.target.parentElement.getAttribute('type') === 'button') {
    //             // console.log('222', ev.target.textContent);
    //             textContent = ev.target.textContent;
    //         }
    //         try {  // 监听点击按钮获取文本内容
    //             if (textContent && textContent.toString().trim()) {
    //                 chrome.runtime.sendMessage({
    //                     action: 'userOperateContent',
    //                     data: {currentUrl: location.href, operateFun: textContent.toString().trim()}
    //                 });
    //                 //, (response) => {console.log(response)}
    //                 console.log(eCount);
    //                 eCount = 0
    //             }
    //         } catch (e) {
    //             console.log(e)
    //             eCount>3?msgNotify('绩效考核辅助系统助手检测异常，请尝试刷新页面','error'):eCount++
    //         }
    //     }
    // });
};
// 获取外网ip
// $.getJSON("https://api.ipify.org/?format=json", function(e) { console.log(e.ip); });
function runTimer() {
    let t;
    t = setTimeout(function () {
        clearTimeout(t);
        window.close()
    }, 3000);
}
// 使用cookie扩展api设置，获取和删除
function setCookies(url,cname,cvalue,expireSecond,callback) {
    let params = {
        url:url,
        name:cname,
        value:cvalue,
        path:'/'
    };
    if(Number.isInteger(expireSecond)){
        params.expirationDate = new Date().getTime()/1000+parseInt(expireSecond)
    }
    chrome.runtime.sendMessage({action: 'cookieSet',data:params}, (response) => {
        callback(response)
    });
}
function getCookies(url,cname,callback) {
    let params = {
            url:url,
            name:cname
        };
    chrome.runtime.sendMessage({action: 'cookieGet',data:params}, (response) => {
        callback(response)
    });
}
function getAllCookies(url='',callback) {
    //从一个cookie存储获取与给定信息匹配的所有cookies。所获取cookies将按照最长路径优先排序。当多个cookies有相同长度路径，最早创建的cookie在前面。
    let params = {
            url:url,     //可选，限定只查找与给定URL匹配的cookies。
            // name:'',  //可选，根据名称过滤cookies。
            // domain:'',   //可选，限定只查找与给定域名或者子域名匹配的cookies。
            // path:''    //可选，限定只查找与给定路径完全一致的cookies。
        };
    chrome.runtime.sendMessage({action: 'cookieGetAll',data:params}, (response) => {
        callback(response)
    });
}
function rmCookies(url, cname, callback) {
    let params = {
        url: new URL(url).origin,
        name: cname
    };
    chrome.runtime.sendMessage({action: 'cookieRm',data:params}, (response) => {
        callback(response)
    });
}

// chrome.storage.local.get('freeTimeLimitTime',function (res){
//     console.log(res.freeTimeLimitTime,'freeTimeLimitTime')
// })
async function freeTimeLimit() {
    try {
        let freeTimeLimitTimeObj = await chrome.storage.local.get('freeTimeLimitTime');
        if (freeTimeLimitTimeObj.freeTimeLimitTime) {
            return freeTimeLimitTimeObj.freeTimeLimitTime * 60 * 1000   // 分钟
        } else {
            return 10 * 60 * 1000            // 默认10分钟
        }
    }catch (e) {
        return 10 * 60 * 1000
    }
}

function sendFreeTimeStart() {
    console.log("不活跃开始："+new Date())
    try{
        // 发给后台记录
        chrome.runtime.sendMessage({
            action: 'userFreeTimeCollect',
            data: {url: location.href, dataType: 'freeTimeLimit',dataAttr:'userFreeTimeStart'}
        });
    }catch (e) {
        console.log(e)
    }
}
