$(function () {
    //真实项目中，我们第一页加载完毕，当用户下拉到底，开始第二页的内容。服务器会给我们提供一个API获取数据的地址，并要求客户端把获取到的是第几页的内容传递给服务器，服务器依照这个原理把对应的不同数据返回"分页技术"
    //单利模式
    var waterFull = (function () {
        //绑定数据
        //默认获取没有

        var page = 0,
            isRun,//不需要触发滚动事件
            $boxList = $(".flowBox li"),
            boxList = $boxList.get();

        function bindHTML() {
            //拼接字符串
            function queryHTML(obj) {
                var {id,pic,title,link} = obj;
                return `<a href="${link}">
                    <div><img src="${pic}" alt=""></div>
                    <span>${title}</span>
                </a>`;
            }

            //拿到数据
            function callBackDta(jsonData) {
                for (var i = 0; i < jsonData.length; i += 3) {
                    //i 0 3 6 9 ....
                    //BUG：我们在循环进来的时候i+=3,如果正好是3的倍数，正好可以获取完，如果不是，会存在有一项或两项不存在
                    var item1 = jsonData[i];
                    var item2 = jsonData[i + 1];
                    var item3 = jsonData[i + 2];


                    //绑定数据   第一次是依次给前三个li绑定的，但是下一次给当前高度最低的那一列绑定
                    //判断列的高度放到最低列
                    boxList.sort(function (a,b) {
                        return a.offsetHeight - b.offsetHeight;
                    });

                    // console.log(a.offsetHeight,b.offsetHeight);
                    // console.log(boxList);

                    //先判断这条数据有没有有的话才进行绑定
                    if (item1) {
                        boxList[0].innerHTML += queryHTML(item1);
                    }

                    if (item2) {
                        boxList[1].innerHTML += queryHTML(item2);
                    }

                    if (item3) {
                        boxList[2].innerHTML += queryHTML(item3);
                    }

                    // boxList.sort((a,b)=>a.offsetHeight-b.offsetHeight).forEach((curLi,index)=>{
                    //     curLi.innerHTML += queeryHTML(eval("item"+(index +1)));
                    // });
                }
                isRun = false;
            }

            //请求数据
            function queryData() {
                page++;
                $.ajax({
                    type: "GET",
                    url: `json/data.json?page=${page}`,
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        callBackDta(data);
                    }
                });
            }

            queryData();
        }

        //加载更多数据
        function loadMove() {
           $(window).on("scroll",function () {
               //一屏幕的高度
               var win = $(window).outerHeight();
               //页面的高度
               var winTotal = document.documentElement.scrollHeight || document.body.scrollHeight;
               //滚动条卷去的高度
               var scrollT = $(window).scrollTop();

               //一般我们去做判断的时候回加一个整数
               if (scrollT + 100 > winTotal -win){
                   if (isRun)return;
                   isRun = true;
                   //只加载五次
                   if (page>5){
                       alert("数据加载完毕了");
                       return;
                   }
                   bindHTML();
               }

           });
        }


        return {
            //入口函数  init:初始化
            init: function f() {
                //一执行init方法将上边的方法依次从上到下执行
                bindHTML();
                loadMove();

            }
        };
    })();

    waterFull.init();
});