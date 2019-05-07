(function () {
//1.创建
    function ajaxPromise(options) {
        var _default = {
            type:"GET",
            url:"",
            async:true,
            json:""
        };


        for(var key in options){
            if (options.hasOwnProperty(key)){
                _default[key] = options[key];
            }
        }

        var pro = new Promise(function (resolve,reject) {
            //http://127.0.0.1:8080/queyInfo?_=+Math.random();
            var xhr = new XMLHttpRequest();
            if (_default.type == "GET"){
                if (_default.url.indexOf("?")>-1){
                    _default.url+= "&_="+Math.random();
                }else {
                    _default.url += "?_=" + Math.random();
                }
            }

            xhr.open(_default.type,_default.url,_default.async);

            xhr.onreadystatechange = function(){
                if (xhr.status === 200 && xhr.readyState === 4){
                    if (_default.json === "json"){
                        resolve(eval("("+xhr.responseText+")"));
                        return;
                    }
                    resolve(xhr.responseText);
                }
            }

            xhr.send(null);
        });

        return pro;
    }

    //让当前方法挂在window在任何地方都能访问
    //因为函数执行形成私有作用域，外界是不能访问私有变量的
    window.ajaxPromise = ajaxPromise;
})();



