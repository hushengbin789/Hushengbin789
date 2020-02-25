const {add,reduce} = require("./index.js");

var result = add(1,2);
var m = 3;

if(result == m){
    console.log("测试通过")
}else{
    throw new Error("1+2的结果不等于"+m);
}


function expect(result){
    return {
        toBe(actual){
            if(result !== actual){
                throw new Error("预期值与测试值不相等")
            }
        }
    }
}

expect(reduce(3,1)).toBe(2);
expect(add(1,2)).toBe(3);


//加强版
// function expect(result){
//     return {
//         toBe(actual){
//             if(result !== actual){
//                 throw new Error("预期值与测试值不相等")
//             }
//         }
//     }
// }


function test(des,callback){
    try{
        callback();
        console.log(`${des}通过测试`);
    }catch(e){
        console.log(`${des}没有通过测试:${e}`);
    }
}


test("测试add函数",()=>{
    expect(add(1,2)).toBe(3);
})

test("测试reduce函数",()=>{
    expect(reduce(3,1)).toBe(2);
})