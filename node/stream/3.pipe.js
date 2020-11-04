const ReadStream = require('./ReadStream');
const WriteStream = require('./WriteStream');


let rs = new ReadStream('./test.txt', { highWaterMark: 4 });
let ws = new WriteStream('./copy.txt', { highWaterMark: 1 });

// 拷贝功能是异步的 内部用的是发布订阅模式 
rs.pipe(ws);
ws.on('drain', function() {
    console.log('drain')
})
// 可读流的读取操作 和 可写流的写入的操作方法 是需要的


// 可读流 可写流  双工流(能读也能写 既继承了可读又继承了可写流 （读和写可以没有关系）)
const { Duplex, Transform,Readable,Writable } = require('stream')
// class MyDuplex extends Duplex{
//     _read(){
//         this.push('xxx');
//         this.push(null)
//     }
//     _write(chunk,encoding,cb){
//         console.log(chunk);
//         cb() // clearBuffer
//     }
// }
// let md = new MyDuplex();
// md.on('data',function (chunk) {
//     console.log(chunk)
// })
// md.write('ok');

// 转化流 可以用于加密 压缩 可以把可写流转换成可读流

class MyTransfrom extends Transform {
    _transform(chunk, encoding, cb) {
        // 这里可以调用push方法
        this.push(chunk.toString().toUpperCase()); // this.emit()
        cb();
    }
}
let my = new MyTransfrom();
// process.stdin.on('data',function (chunk) { // 监控用户输入内容
//     process.stdout.write(chunk); 
// })
process.stdin.pipe(my).pipe(process.stdout)
// process.std.write('ok'); // console.log() 可写流
