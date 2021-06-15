"use strict";

var hyxt = {
    init: function () {//初始化方法
        $("input,textarea").placeholder();//使IE6，7，8兼容placeholder
        var columnLeft = parseInt($('.g-left').css('height'));
        if (columnLeft) {
            $('.g-right').css({minHeight: columnLeft + 'px', '_height': columnLeft + 'px'});
        }
        $('.g-select select').on('change', function () {
            var $this = $(this), val = $(this).find('option:selected').text();
            /*
             if (!$this.val() || $this.val() == '') {
             return false;
             }*/
            $this.siblings('input').val(val);
        });
        this.showNavigation();
        return this;
    },
    dialog: {//iframe弹框 update:20150320，请参考项目中的dialog.html示例参考
        show: function (o) {
            var defaults = {//默认配置
                src: "",//iframe地址
                prompt: "",//文字提示，当未设置src时生效。当采用prompt模式时，忽略宽高属性
                html: "",//HTML输出，当未设置src与prompt时生效。当采用html模式时，忽略宽高属性
                target: "",//页面内目标，当未设置src、prompt和HTML时生效。当采用target模式时，忽略宽高属性
                name: "",//唯一标示
                width: 500,//iframe宽
                height: 269,//iframe高
                timeout: 0,//设置自动关闭时间，0为不自动关闭
                title: "",//标题
                isShowTitle: true,//是否显示title
                isShowScrollBar: true,//是否显示顶级滑动条
                clearCache: true,//清除缓存
                load: null,//成功载入iframe后的回调函数，参数为iframe所在Window(跨域为空对象)
                after_show: null,//载入后回调函数，是否跨域都生效，无参数
                before_close: null,//关闭前回调函数，返回false将阻止关闭，参数为iframe所在Window(跨域为空对象)
                after_close: null,//关闭后回调函数，接受before_close返回参数
                btn: {//生成按钮（确定、取消）
                    yes: "",//按钮1 显示文字，当设置为空字符串时不显示按钮
                    no: "",//按钮2 显示文字，当设置为空字符串时不显示按钮
                    yes_before_close: null,//按钮1关闭前回调函数，返回false将阻止关闭
                    yes_after_close: null,//按钮1关闭后回调函数，接受yes_before_close返回参数
                    no_before_close: null,//按钮2关闭前回调函数，返回false将阻止关闭
                    no_after_close: null,//按钮2关闭后回调函数，接受no_before_close返回参数
                    yes_style: "blue",//默认蓝色背景,可选值 white（白色）按照分房系统设计稿加了个hotel按钮风格
                    no_style: "blue"
                }
            };

            o.btn = $.extend(defaults.btn, o.btn);
            o = $.extend(defaults, o);//合并参数

            if (!o.name) {//若不设置name标示 返回
                if (window.console) console.error("缺少'name'标示。");
                else alert("缺少'name'标示。")
                return false;
            }
            for (var i in hyxt.dialog.live) {//检测是否存在激活的同样name标示
                if (!hyxt.dialog.live.hasOwnProperty(i)) continue;
                if (i == o.name && hyxt.dialog.live[i] !== undefined) {
                    if (window.console) console.error("已存在激活的相同 name : '" + o.name + "' 标示。");
                    else alert("已存在激活的相同 name : '" + o.name + "' 标示。")
                    return false;
                }
            }

            if (!hyxt.dialog.cur)
                hyxt.dialog.cur = [];//以数组储存激活状态名

            function cur_fresh() {//刷新hyxt.dialog.cur状态
                for (var i = 0, len = hyxt.dialog.cur.length, temp = []; i < len; i++) {//删除关闭的
                    var names = hyxt.dialog.cur[i];
                    if (hyxt.dialog.live[names] !== undefined) {
                        temp.push(names);
                    }
                }
                hyxt.dialog.cur = temp;
            }

            cur_fresh();
            hyxt.dialog.cur.push(o.name);


            /*创建dialog start*/
            var dialog = document.createElement("div");
            dialog.className = "g-dialog";
            if (o.isShowTitle) {//标题
                var dialog_tit = document.createElement("div");
                if(o.titleLineType){
                    dialog_tit.className = "g-dialog_tit" + ' ' + o.titleLineType;
                }else{
                    dialog_tit.className = "g-dialog_tit";
                }
                var dialog_close = document.createElement("div");
                if(o.closeType){   //加了个添加弹窗顶部的样式的可配置项
                    dialog_close.className = o.closeType
                }else{
                    dialog_close.className = "g-dialog_close";
                }
                $(dialog_close).click(function () {
                    remove();
                });
                $(dialog_tit).append(o.title).append(dialog_close);
                $(dialog).append(dialog_tit);
            }
            /*创建dialog end*/


            if (o.src) {
                /*创建iframe start（如果设置了o.src）*/
                var iframe = document.createElement("iframe");
                iframe.frameBorder = 0;
                iframe.name = o.name;
                iframe.id = o.name;//兼容IE7、IE6
                if (o.clearCache) {//如果设置了清理缓存，在请求src后添加时间戳
                    var srcAr = o.src.split("?"),
                        timeStamp = "timeStamp=" + (new Date()).getTime();
                    if (srcAr.length == 1) {//如果原链接没有get请求
                        o.src += "?" + timeStamp;
                    }
                    else {
                        var get = srcAr[srcAr.length - 1].split("&");
                        get.push(timeStamp);
                        srcAr[srcAr.length - 1] = get.join("&");
                        o.src = srcAr.join("?");
                    }
                }
                iframe.src = o.src;
                $(dialog).append(iframe);
                /*创建iframe end*/
            } else if (o.prompt) {//输出字符串
                var prompt = document.createElement("div"),
                    p = document.createElement("p"),
                    defautWidth = 370;
                $(prompt).css({textAlign: "center", position: "relative",wordWrap:"break-word"});
                if(o.btn.yes || o.btn.no){
                    var padding = "40px 20px 0";
                }else {
                    var padding = "40px 20px";
                }
                $(p).css({padding: padding, fontSize: 16, width: defautWidth - 40}).html(o.prompt);
                $(prompt).append(p);
                $(dialog).append(prompt);
            } else if (o.html) {//输出html
                var html = document.createElement("div");
                $(html).css({position: "relative"}).html(o.html);
                $(dialog).append(html);
            } else if (o.target) {//页面内目标
                var target = $(o.target),
                    html = document.createElement("div");
                target = target.clone(true).show();
                $(html).css({position: "relative"}).append(target);
                $(dialog).append(html);
                o.html = $(html).html();//转换为html模式
            }

            if (o.btn.yes || o.btn.no) {//创建操作按钮（确定、取消）
                var btns = document.createElement("div"),
                    y_b_c,n_b_c;
                btns.className = "g-dialog_btn";
                if(o.btn.yes_style == 'hotel'){
                    $(btns).addClass("hotel-dialog-btn")
                }
                if (o.btn.yes) {//创建确定
                    var yes = document.createElement("a");
                    $(yes).addClass("g-btn").text(o.btn.yes);

                    switch(o.btn.yes_style){//按钮样式
                        case "blue" : $(yes).addClass("g-btn-init");
                            break;
                        case "white" : $(yes).addClass("g-btn-white");
                            break;
                        case "orange" : $(yes).addClass("g-btn-orange");
                            break;
                        case "hotel" : $(yes).removeClass('g-btn').addClass("dialog-btn-enter-120")
                    }

                    $(yes).click(function () {
                        if (typeof o.btn.yes_before_close == "function") {
                            y_b_c = o.btn.yes_before_close(cur);
                            if (y_b_c === false)//仅当返回false时阻止关闭
                                return false;
                        }
                        remove({//关闭后触发按钮所带回调
                            callback: function(){
                                if(typeof o.btn.yes_after_close == "function")
                                    o.btn.yes_after_close(y_b_c);
                            }
                        });
                    });
                    $(btns).append(yes);
                }
                if (o.btn.no) {//创建取消
                    var no = document.createElement("a");
                    $(no).addClass("g-btn").text(o.btn.no);

                    switch(o.btn.no_style){//按钮样式
                        case "blue" : $(no).addClass("g-btn-init");
                            break;
                        case "white" : $(no).addClass("g-btn-white");
                            break;
                        case "orange" : $(no).addClass("g-btn-orange");
                            break;
                        case "hotel" :$(no).removeClass('g-btn').addClass("dialog-btn-cancal-120")
                    }

                    $(no).click(function () {
                        if (typeof o.btn.no_before_close == "function") {
                            n_b_c = o.btn.no_before_close(cur);
                            if (n_b_c === false)//仅当返回false时阻止关闭
                                return false;
                        }
                        remove({//关闭后触发按钮所带回调
                            callback: function(){
                                if(typeof o.btn.no_after_close == "function")
                                    o.btn.no_after_close(n_b_c);
                            }
                        });
                    });
                    $(btns).append(no);
                }
                $(dialog).append(btns);
            }

            if (o.isShowScrollBar == false) {
                if ($("html").hasClass("overflowYHidden"))//如果已经隐藏
                    o.isShowScrollBar = true;//为remove考虑
            }
            if (o.isShowScrollBar == false) {//隐藏顶级滚动条
                $("html").addClass("overflowYHidden");
            }
            if (typeof o.width == "string") {//设置百分比
                if(o.width == "") o.width = "0";
                if (o.width.indexOf("%") != -1)
                    o.width = $(window).width() * (parseInt(o.width.split("%")[0]) / 100);
                else
                    o.width = parseInt(o.width);
            }
            if (typeof o.height == "string") {//设置百分比
                if(o.height == "") o.height = "0";
                if (o.height.indexOf("%") != -1) {
                    o.height = $(window).height() * (parseInt(o.height.split("%")[0]) / 100);
                    if (o.isShowTitle == true) o.height -= 40;
                    if (o.btn.yes || o.btn.no) o.height -= 109;
                }else{
                    o.height = parseInt(o.height);
                }
            }


            $(dialog).css({
                opacity: 0,
                zIndex: hyxt.dialog.zIndex,
                transform: "scale(0.6)",
                webkitTransform: "scale(0.6)",
                mozTransform: "scale(0.6)",
                oTransform: "scale(0.6)",
                msTransform: "scale(0.6)"
            }).css({
                transition: "transform 0.2s",
                webkitTransition: "-webkit-transform 0.2s",
                mozTransition: "-moz-transform 0.2s",
                oTransition: "-o-transform 0.2s",
                msTransition: "-ms-transform 0.2s"
            });


            /*创建bg start*/
            var bg = document.createElement("div"),
                isIE6 = !-[1,] && !window.XMLHttpRequest;
            $(bg).attr({style: "position:fixed;width:100%;height:100%;top:0;left:0;background:#000;"}).css({
                opacity: 0,
                zIndex: hyxt.dialog.zIndex
            });
            if (isIE6) $(bg).css({
                position: "absolute",
                height: $(document).outerHeight(),
                width: $(document).outerWidth()
            });
            /*创建bg end*/


            $("body").append(bg);
            $("body").append(dialog);

            setsize(o.width, o.height);

            if (o.src) {
                var cur = window.frames[o.name];
            } else {
                var cur = dialog;
            }

            var loaded = false;//修复IE关闭后触发load事件bug，因为关闭时iframe.src = ""(也为了修复IE一个BUG) fixed 20150320
            if (o.src) {//load回调函数
                if (iframe.attachEvent) {//IE
                    iframe.attachEvent("onload", function () {
                        if (typeof o.load == "function" && loaded === false){
                            o.load(cur);
                            loaded = true;
                        }
                        try{//同源限制
                            if (cur.jQuery) {
                                cur.jQuery("body").unbind("keyup.hyxt.dialog").bind({
                                    "keyup.hyxt.dialog": function (event) {
                                        if (event.keyCode == 27 && hyxt.dialog.cur.length >= 1)
                                            hyxt.dialog.live[hyxt.dialog.cur[hyxt.dialog.cur.length - 1]].hide();
                                    }
                                })
                            }
                        }catch(err){}
                    });
                } else {//非IE
                    iframe.onload = function () {
                        if (typeof o.load == "function" && loaded === false){
                            o.load(cur);
                            loaded = true;
                        }
                        try{//同源限制
                            if (cur.jQuery) {
                                cur.jQuery("body").unbind("keyup.hyxt.dialog").bind({
                                    "keyup.hyxt.dialog": function (event) {
                                        if (event.keyCode == 27 && hyxt.dialog.cur.length >= 1)
                                            hyxt.dialog.live[hyxt.dialog.cur[hyxt.dialog.cur.length - 1]].hide();
                                    }
                                })
                            }
                        }catch(err){}
                    };
                }
            }

            /*ESC关闭 start*/
            $("body").unbind("keyup.hyxt.dialog").bind({
                "keyup.hyxt.dialog": function (event) {
                    if (event.keyCode == 27 && hyxt.dialog.cur.length >= 1)
                        hyxt.dialog.live[hyxt.dialog.cur[hyxt.dialog.cur.length - 1]].hide();
                }
            });
            /*ESC关闭 end*/

            //动画进入
            $(bg).animate({opacity: 0.2}, 100, function () {
                $(dialog).animate({opacity: 1}, 200, function () {
                    if (o.timeout !== 0)
                        setTimeout(function () {
                            remove();
                        }, o.timeout);
                    if (typeof o.after_show == "function")
                        o.after_show(cur);
                }).css({
                    transform: "scale(1)",
                    webkitTransform: "scale(1)",
                    mozTransform: "scale(1)",
                    oTransform: "scale(1)",
                    msTransform: "scale(1)"
                });
            });

            function setsize(width, height ,setPosition) {//设置坐标，大小
                if (!o.src && o.prompt) {//prompt忽略宽高设置
                    width = defautWidth;//默认宽度
                    height = $(dialog).css({height: "auto"}).outerHeight();//自身高度
                }
                if (!o.src && !o.prompt && o.html) {//html忽略宽高设置
                    width = $(dialog).css({width: "auto"}).outerWidth();//取自身宽度
                    height = $(dialog).css({height: "auto"}).outerHeight();//自身高度
                }

                var dialog_width = width,
                    dialog_height = (o.isShowTitle && !o.prompt && !o.html) ? height + 40 : height;

                if (!o.prompt && !o.html && (o.btn.yes || o.btn.no)) {//在非prompt或非html下设置了按钮
                    dialog_height += 109;
                }

                if (o.src) {
                    iframe.width = width;
                    iframe.height = height;
                }

                $(dialog).css({
                    width: dialog_width,
                    height: dialog_height,
                    position: "absolute"
                });

                if(setPosition !== false){
                    var cssTop = $(window).height() < dialog_height ? 0 : ($(window).height() - dialog_height) / 2,
                        cssLeft = $(window).width() < dialog_width ? 0 : ($(window).width() - dialog_width) / 2;
                    $(dialog).css({
                        top: $(window).scrollTop() + cssTop,
                        left: $(window).scrollLeft() + cssLeft
                    });
                }
            }

            function remove(callback) {//关闭方法
                var b_c;
                if (typeof rt.before_close == "function") {
                    b_c = rt.before_close(cur);
                    if (b_c === false)//仅当返回false时阻止关闭
                        return false;
                }
                hyxt.dialog.live[o.name] = undefined;//删除实例
                cur_fresh();
                $(dialog).stop().animate({opacity: 0}, 200, function () {
                    $(bg).stop().animate({opacity: 0}, 100, function () {
                        if(o.src){//修复IE BUG
                            iframe.src = "";
                            iframe.parentNode.removeChild(iframe);
                            if(window.CollectGarbage){
                                window.CollectGarbage();
                            }
                        };
                        $(dialog).remove();
                        $(bg).remove();
                        if (o.isShowScrollBar == false)
                            $("html").removeClass("overflowYHidden");
                        callback = $.extend({}, callback);
                        if (typeof callback.callback == "function")
                            callback.callback();
                        if (typeof rt.after_close == "function")
                            rt.after_close(b_c);
                    });
                }).css({
                    transform: "scale(0.6)",
                    webkitTransform: "scale(0.6)",
                    mozTransform: "scale(0.6)",
                    oTransform: "scale(0.6)",
                    msTransform: "scale(0.6)"
                });
                return true
            }


            var rt = {
                resize: function (width, height , setPosition) {
                    if (typeof width == "string") {//设置百分比
                        if(width == "") width = "0";
                        if (width.indexOf("%") != -1)
                            width = $(window).width() * (parseInt(width.split("%")[0]) / 100);
                        else
                            width = parseInt(width);
                    }
                    if (typeof height == "string") {//设置百分比
                        if(height == "") height = "0";
                        if (height.indexOf("%") != -1) {
                            height = $(window).height() * (parseInt(height.split("%")[0]) / 100);
                            if (o.isShowTitle == true) height -= 40;
                            if (o.btn.yes || o.btn.no) height -= 109;
                        }
                        else{
                            height = parseInt(height);
                        }
                    }
                    width = (width == undefined) ? o.width : width;//这里的判断包含了null
                    height = (height == undefined) ? o.height : height;
                    o.width = width;
                    o.height = height;
                    setsize(width, height ,setPosition);
                },
                hide: function () {
                    return remove();
                },
                before_close: o.before_close,
                after_close: o.after_close,
                frame: cur
            }
            hyxt.dialog.live[o.name] = rt;
            return rt;

        },
        hide: function (o) {
            var len = hyxt.dialog.cur.length;
            if (len >= 1) {
                if (o && o.hasOwnProperty("before_close"))
                    hyxt.dialog.live[hyxt.dialog.cur[len - 1]].before_close = o.before_close;
                if (o && o.hasOwnProperty("after_close"))
                    hyxt.dialog.live[hyxt.dialog.cur[len - 1]].after_close = o.after_close;
                return hyxt.dialog.live[hyxt.dialog.cur[len - 1]].hide();
            }
        },
        live: {},
        zIndex: 9999
    },
    getTopWindow: function () {//在iframe中运行时返回顶级window
        return window.top;
    },
    getParam: function (param) {//获取浏览器参数
        var r = new RegExp("\\?(?:.+&)?" + param + "=(.*?)(?:&.*)?$");
        var m = window.location.toString().match(r);
        return m ? decodeURI(m[1]) : "";
    },
    setCookie: function (name, value, expires) {//设置cookie
        document.cookie = name + "=" + escape(value) + (!expires ? "" : ("; expires=" + expires.toGMTString()));
    },
    resetCookie: function () {//重设cookie
        this.setCookie(name, null, new Date());
    },
    getCookie: function (name) {//读取cookie
        var start = document.cookie.indexOf(name + "=");
        var len = start + name.length + 1;
        if ((!start) && (name != document.cookie.substring(0, name.length))) {
            return null;
        }
        if (start == -1) {
            return null;
        }
        var end = document.cookie.indexOf(";", len);
        if (end == -1) {
            end = document.cookie.length;
        }
        return unescape(document.cookie.substring(len, end));
    },
    showNavigation: function () {//导航控制
        var nav, navArr, dom = [];
        if (window.localStorage) {
            nav = localStorage.nav;
        } else {
            nav = this.getCookie('nav');
        }
        navArr = nav ? nav.split(',') : [];
        for (var i = 0, len = navArr.length; i < len; i++) {
            // if(navArr[i] == window.currentPage){
            // continue;
            // }
            var data = getNavBar(navArr[i]);
            if (data.tit && data.tit != '') {
                dom.push('<a class="g-pageNav' + (navArr[i] == this.currentPage ? ' g-currentPageNav' : '') + '" href="' + data.url + '"><span>' + data.tit + '</span></a>');
            }

        }
        $('.g-locationNav').append(dom.join(''));

        function getNavBar(txt) {
            switch (txt) {
                case 'index':
                    return {tit: '首页', url: 'index.html'};
                    break;
                case 'dianshang':
                    return {tit: '电商', url: 'index.html'};
                    break;
                case 'fuwu':
                    return {tit: '服务', url: 'index.html'};
                    break;
                case 'huodong':
                    return {tit: '活动', url: 'index.html'};
                    break;
                case 'mendian':
                    return {tit: '门店', url: 'index.html'};
                    break;
                default:
                    return {};
            }
        }

    }
}
