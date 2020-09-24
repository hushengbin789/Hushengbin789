const {Writable} = require('stream')

class MyWrite extends Writable{
    _write(chunk,encoding,cb){
        cb();
    }
}

let mw = new MyWrite();
mw.write('ok',function () {
    console.log('ok')
})
mw.write('ab')


// 不同人实现的可写流是不一样的
// http前端来数据 -》 （读取一下）  写入时我只是响应一下socket.write