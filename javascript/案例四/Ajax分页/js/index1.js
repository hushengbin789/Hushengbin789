//1.获取要操作的元素
var boxList = document.getElementById("boxList"),
    page = document.getElementById("page"),
    pageList = document.getElementById("pageList"),
    oLis = pageList.getElementsByTagName("li");
var pageInput = document.getElementById("pageInput");

//当前页数和总页数
var n = 1, totalpage;

oLis.onclick=function(){

}
//2.绑定数据
bindHTML();

//在下边我们进行点击等操作的时候数据要更新，再次调用bindHTML();进行数据更新
function bindHTML() {
    function callBack(jsonData) {
        var jsonData = jsonData;
        console.log(jsonData);
        totalpage = jsonData["total"];
        var arrData = jsonData["data"];
    }

        //绑定boxList
        var str = '';
        for (var i = 0; i < arrData.length; i++) {
            var curData = arrData[i];
            var sex = curData["sex"] === 1 ? "女" : "男";
            str += '<li>';
            str += '<span>' + curData["num"] + '</span>';
            str += '<span>' + curData["name"] + '</span>';
            str += '<span>' + sex + '</span>';
            str += '<span>' + curData["score"] + '</span>';
            str += '</li>';
        }
        boxList.innerHTML = str;

        //绑定pageList
        str = '';
        //性能优化：我们只需要第一次加载页面时候去循环绑定li
        if (boxList.innerHTML === "") {

        }

        for (var i = 1; i <=totalpage; i++) {
            if (i == 1){
                str+='<li class="bg">'+i+'</li>';
                continue;
            }
            str+='<li>'+i+'</li>';
        }

        console.log(str);
        pageList.innerHTML = str;


        //绑定输入框去区域的值
        pageInput.value = n;
    }

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/getData?n=" + n + "&_=" + Math.random(), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callBack(eval("(" + xhr.responseText + ")"));
        }
    }
    xhr.send(null);
}



