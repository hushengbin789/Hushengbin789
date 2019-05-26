
//对象键值对的方式
function noRepeat(arr) {
    var  obj = {};
    for (var i = 0; i <arr.length; i++) {
        var cur = arr[i];
        if (obj[cur] == cur){//splice()
            arr[i] = arr[arr.length-1];
            i--;
            continue;
        }
        obj[cur] = cur;
    }
    return arr;
}

var arr = [1,2,2,2,3,3,4,5,5,5,6];
console.log(noRepeat(arr));

