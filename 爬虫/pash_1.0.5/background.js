import initial from "./grounds/initial.js";
import {
    noLoginDeskNotifications,
    clearNotifications
} from "./grounds/tools.js";
import {
    timeToDate,
    getNowDate,
    getNowTime,
    getNowTimeFirst,
    getNowTimeLast
} from "./grounds/time-d.js"

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'userLogin') {
        backEvent.userLogin(request.data, sendResponse);
        return true
    } else if(request.action === 'updateLoginNotice') {
        // initial.notificationsId = '';
        initial.isLoginNotice = false;
        sendResponse({"isLoginNotice":initial.isLoginNotice});
        return true
    } else if (request.action === 'clearLoginNotice') {
        clearNotifications();
        sendResponse({"isLoginNotice":initial.isLoginNotice,"notificationsId":initial.notificationsId});
        return true
    } else if (request.action === 'userOperateContent'){
        backEvent.userOperateContent(request.data);
        return true
    } else if (request.action === 'userFreeTimeCollect'){
        request.data.currentTime = getNowDate();
        backEvent.historyBrowseRecord(request.data);
        return true
    }
});
// 关键代码勿动 作用：监听来自content-script的消息 跨扩展或web页面通信 请求端通信方式chrome.runtime.sendMessage
// 开通权限 "externally_connectable": {"matches": ["*://*.example.com/*"]}
chrome.runtime.onMessageExternal.addListener(async function(message, sender, sendResponse) {
  chrome.storage?.local?.get('estone-username', function (result) {
      sendResponse({ installed: true,storage:result['estone-username'],version:chrome.runtime.getManifest().version });
  })
});
// 监听storage变化
chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (areaName == 'local') {
        // 发送消息到content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type: 'storageChange', changes: changes});
        });
    }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message.action === 'cookieSet') {
        chrome.cookies.set(message.data, function (cookie) {
            sendResponse(cookie);
        })
    } else if (message.action === 'cookieGet') {
        chrome.cookies.get(message.data, function (cookie) {
            sendResponse(cookie);
        })
    } else if (message.action === 'cookieGetAll') {
        chrome.cookies.getAll(message.data, function (cookies) {
            sendResponse(cookies);
        })
    } else if (message.action === 'cookieRm') {
        chrome.cookies.remove(message.data, function (cookie) {
            sendResponse(cookie);
        })
    }
    return true
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'estoneBtnSet') {
        let result = {};
        result[request.data.key] = request.data.value;
        if (request.data.isEstoneWhite){
            result["isEstoneWhite"] = request.data.isEstoneWhite.value;
        }
        chrome.storage.local.set(result, function () {
            sendResponse('Value is set to ' + JSON.stringify(result))
        })
    } else if (request.action === 'estoneBtnGet') {
        chrome.storage.local.get(request.data.key, function (result) {
            sendResponse(result[request.data.key])
        })
    } else if (request.action === 'estoneBtnRemove') {
        chrome.storage.local.remove(request.data.key, function () {
            sendResponse('Removed items for the key: ' + request.data.key)
        })
    }
    return true
});

var backEvent = {
    //用户登录
    userLogin: async function (data, call) {
        const url = initial.httpApi+'/api/estone/userLogin';
        try {
            const response = await fetchWithTimeout(url, {timeout: 15000}, data);
            let res = {};
            if (response.status === 200) {
                res = (await response.json()) || {};
                call(res); // parses JSON response into native JavaScript objects
            } else {
                call(response);
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                call({code: 1, errorMsg: '登录请求超时！'})
            } else {
                call(null);
            }
        }
    },
    checkCurVersion: async function (data, call) {
        const url = initial.httpApi+'/api/estone/checkCurVersion';
        try {
            const response = await fetchWithTimeout(url, {timeout: 15000}, data);
            let res = {};
            if (response.status === 200) {
                res = (await response.json()) || {};
                call(res); // parses JSON response into native JavaScript objects
            } else {
                call(response);
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                call({code: 1, errorMsg: '查询版本信息超时！'})
            } else {
                call(null);
            }
        }
    },
    checkWhiteName: async function (data, call) {
        const url = initial.httpApi+'/api/estone/checkWhiteName';
        try {
            const response = await fetchWithTimeout(url, {timeout: 10000}, data);
            let res = {};
            if (response.status === 200) {
                res = (await response.json()) || {};
                call(res); // parses JSON response into native JavaScript objects
            } else {
                call(response);
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                call({code: 1, errorMsg: '查询版本信息超时！'})
            } else {
                call(null);
            }
        }
    },

    userOperateContent: async function (data) {
        const url = initial.httpApi+'/api/userOperateContent';
        let results = await historySearch(false);
        if (!results){return}
        results.operateFun = data.operateFun; // 按钮
        results.operateTime = getNowDate(); // 操作时间
        results.currentUrl = data.currentUrl; // 当前页地址
        results.type = 'function';
        results.erpCurrentUserInfo = data.erpCurrentUserInfo;
        try {
            const username = await getUserInfo('estone-username');
            if (!username) {
                initial.isLoginNotice = false;
                return
            }
            let isWhiteResult = await chrome.storage.local.get('isEstoneWhite');
            if (isWhiteResult['isEstoneWhite'] === true) {   // 白名单不记录
                return
            }
            results.username = username;
            fetchWithTimeout(url, {timeout: 10000}, results);
            // const response = await fetchWithTimeout(url, {timeout: 10000}, results);
            // let res = {};
            // if (response.status === 200) {
            //     res = (await response.json()) || {};
            //     console.log(res); // parses JSON response into native JavaScript objects
            // } else {
            //     console.log(response);
            // }
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log({code: 1, errorMsg: '请求服务器超时！'})
            } else {
                console.log(error);
            }
        }
    },
    historyBrowseRecord: async function (data) {
        const url = initial.httpApi+'/api/userBrowseHistory';
        data.operateFun = null;
        data.operateTime = getNowDate();
        data.type = 'page';
        try {
            const username = await getUserInfo('estone-username');
            if (!username) {
                initial.isLoginNotice = false;
                return
            }
            let isWhiteResult = await chrome.storage.local.get('isEstoneWhite');
            if (isWhiteResult['isEstoneWhite'] === true) {   // 白名单不记录
                return
            }
            data.username = username;
            fetchWithTimeout(url, {timeout: 10000}, data);
            // const response = await fetchWithTimeout(url, {timeout: 10000}, data);
            // let res = {};
            // if (response.status === 200) {
            //     res = (await response.json()) || {};
            //     console.log(res); // parses JSON response into native JavaScript objects
            // } else {
            //     console.log(response);
            // }
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log({code: 1, errorMsg: '请求服务器超时！'})
            } else {
                console.log(error);
            }
        }
    }
};

// 创建选项卡时触发。请注意，在触发此事件时可能未设置选项卡的 URL 和选项卡组成员资格，但您可以侦听 onUpdated 事件，以便在设置 URL 或将选项卡添加到选项卡组时收到通知。
// chrome.tabs.onCreated.addListener(
//     function (tab) {
//         // console.log({tab: tab})
//     }
// );
// 选项卡更新时触发
chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
        if (tab.status === "complete" && changeInfo.status === 'complete'){
            // console.log({tabId:tabId})
            // console.log({changeInfo:changeInfo})
            // console.log({tab:tab})
            currentPageHistoryData(tab)
        }
    }
);
// 当窗口中的活动选项卡更改时触发
chrome.tabs.onActivated.addListener( (activeInfo) => {
        // console.log({activeInfo:activeInfo})
        currentPageHistoryData()
    }
);
// 选项卡关闭时触发。isWindowClosing:true, windowId:1299383838
chrome.tabs.onRemoved.addListener( (tabId, removeInfo) => {
      // console.log({tabId:tabId});
      // console.log({removeInfo:removeInfo});
      if (removeInfo.isWindowClosing){
          sendHistorySearch(true)
      }else{
          sendHistorySearch()
      }
  }
);
// 窗口关闭伴随标签（选项卡）关闭，并且顺序是标签-->窗口
// chrome.windows.onRemoved.addListener( (windowId) => {
//       console.log({windowId:windowId,windowClose:true})
//       // sendHistorySearchAll(true)
//         sendHistorySearch(true)
//   }
// )
// 当前焦点窗口更改时触发
// chrome.windows.onFocusChanged.addListener(
//   function (windowId) {
//       console.log({windowId:windowId,onFocusChanged:true})
//   }
// )

async function sendHistorySearch(closeMark=false){
    let data = await historySearch(closeMark);
    if (!data){return}
    data.dataType = 'currentData';
    backEvent.historyBrowseRecord(data)
}

async function sendHistorySearchAll(closeMark=false){
    let data = await historySearchAll(closeMark);
    if (!data){return}
    data.dataType = 'allData';
    backEvent.historyBrowseRecord(data)
}

async function currentPageHistoryData(tab = null) {
    try {
        if (!tab || !tab.url) {
            tab = await getCurrentTab();
        }
        let results = await chrome.history.getVisits({'url': tab.url});
        if (!results.length) {
            return
        }
        let query = {
            text: '',
            startTime:getNowTimeFirst(),
            endTime:getNowTimeLast(),
            maxResults: 1000
        };
        let historyItems = await chrome.history.search(query);
        historyItems.forEach((item, i) => {
            if (item.id == results[0].id) {
                let result = {
                    closeMark: false,
                    createTime: getNowDate(),
                    url: item.url,
                    visitTime: timeToDate(item.lastVisitTime),
                    visitCount: item.visitCount,
                    title: item.title,
                    historyItem: item,
                    visitItem: results
                }
                result.dataType = 'currentData';
                backEvent.historyBrowseRecord(result)
            }
        })
    } catch (error) {
        console.log(error);
    }
}

async function historySearch(closeMark) {
    let query = {
        text: '',
        startTime:getNowTimeFirst(),
        endTime:getNowTimeLast(),
        maxResults: 1000
    };
    let historyItems = await chrome.history.search(query);
    console.log({historyItem: historyItems[0]});
    let results = await chrome.history.getVisits({'url': historyItems[0].url});
    console.log({visitItem: results});
    return {
        closeMark: closeMark,
        createTime: getNowDate(),
        url:historyItems[0].url,
        visitTime:timeToDate(historyItems[0].lastVisitTime),
        visitCount:historyItems[0].visitCount,
        title:historyItems[0].title,
        historyItem: historyItems[0],
        visitItem: results
    };
}

async function historySearchAll(closeMark) {
    var query = {
        text: '',
        startTime:getNowTimeFirst(),
        endTime:getNowTimeLast(),
        maxResults: 1000
    };
    // chrome.history.search(query, function (historyItems) {
    //     // assertEq(1, results.length);
    //     console.log({historyItems: historyItems});
    //     // let data = {
    //     //     dataType: 'allData',
    //     //     closeMark: closeMark,
    //     //     username: username,
    //     //     createTime: getNowDate(),
    //     //     historyItems: historyItems
    //     // }
    //     // backEvent.historyBrowseRecord(data)
    // });
    let historyItems = await chrome.history.search(query);
    console.log({historyItems: historyItems});
    return {
        closeMark: closeMark,
        createTime: getNowDate(),
        historyItems: historyItems
    }
}


async function fetchWithTimeout(resource, options = {}, data = {}) {
    const {timeout = 8000} = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    // Default options are marked with *
    const response = await fetch(resource, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "request-from": "plugin"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
        signal: controller.signal
    });
    clearTimeout(id);
    return response
}

// 获取用户
async function getUserInfo(key) {
    const userObj = await chrome.storage.local.get(key);
    return userObj[key]
}
// 获取当前tab标签
const getCurrentTab = async () => {
	let queryOptions = {active: true, currentWindow: true};
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
};

// //每隔10秒，发送一次心跳检测  传统定时器已不生效
// setInterval(async () => {
//     const username = await getUserInfo('estone-username');
//     console.log(username)
//     if (!username && !initial.isLoginNotice){  // 登录失效，在当前活动页面 需要提醒登录，活动页面弹框通知，弹框需要做限制不存在时才弹出，
//         // const tab = await getCurrentTab();
//         // await chrome.tabs.sendMessage(tab.id, {isLogin: false});
//         noLoginDeskNotifications();
//     }
// }, 1000 * 10);

//每次加載就清空定時器
// chrome.alarms.clearAll();
// 创建定时器  {when:Date.now(),delayInMinutes: 1,periodInMinutes:1}
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.get('loginNotice', loginNotice => {
        if (!loginNotice) {
            chrome.alarms.create("loginNotice", {delayInMinutes: 1, periodInMinutes: 1});
        }
    });
});
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.get('checkVersion', checkVersion => {
        if (!checkVersion) {
            chrome.alarms.create("checkVersion",{delayInMinutes: 1, periodInMinutes:55});
        }
    });
});
// 当警报结束时触发
chrome.alarms.onAlarm.addListener(
    async function (event) {
        // console.log(event);
        const username = await getUserInfo('estone-username');
        if (event.name==="loginNotice"){
            if (!username && !initial.isLoginNotice) {  // 登录失效，在当前活动页面 需要提醒登录，活动页面弹框通知，弹框需要做限制不存在时才弹出，
                noLoginDeskNotifications();
            }
        }
        if (event.name==="checkVersion" && username){
            const data = {username: username,currentVersion:chrome.runtime.getManifest().version};
            backEvent.checkCurVersion(data, function (result) {
                if ( result && result.code===0 ){
                    chrome.storage.local.set({isEstoneWhite:result.data.isEstoneWhite.value}, function () {
                        console.log('Value is set to ' + "username: "+username+', isEstoneWhite: '+result.data.isEstoneWhite.value)
                    })
                }
                if (result && result.code===0 && result.data.value == false){
                    chrome.storage.local.remove(['estone-username','isEstoneWhite'], function () {
                        console.log('Removed: ' + ['estone-username','isEstoneWhite'])
                    })
                }
            })
        }
        // if (event.name==="checkWhiteName" && username){
        //     backEvent.checkWhiteName({'username': username}, function (result) {
        //         if ( result && result.code===0 ){
        //             chrome.storage.local.set({isEstoneWhite:result.data.isEstoneWhite.value}, function () {
        //                 console.log('Value is set to ' + "username: "+username+', isEstoneWhite: '+result.data.isEstoneWhite.value)
        //             })
        //         }
        //     })
        // }
    }
);
