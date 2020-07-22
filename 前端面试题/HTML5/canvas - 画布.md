## canvas - 绘制线形 / 填充
```html
    <!-- canvas画布 -->
    <canvas id="demo" width="600" height="400"></canvas>
    <script>
        // 画笔 - 获取画布上下文对象、2D 目前没有3D
        var ctx = demo.getContext('2d');
        // 想要画的图形
        ctx.moveTo(50, 50); // 开始 - 起始点、
        ctx.lineTo(150, 50); // 到某一点
        ctx.lineTo(150, 150);
        ctx.closePath(); // 闭合路径、
        // 设置画笔宽度、
        ctx.lineWidth = 5;
        // 设置画笔颜色、
        ctx.strokeStyle = '#f40';
        // 开始画
        ctx.stroke();
        // 填充
        ctx.fill();
        // 抬起画笔
        ctx.beginPath();
    </script>
```
![img](https://box.kancloud.cn/d70423c591dae71f92b402356d226646_237x177.png)
## canvas - 绘制矩形 / 圆 / 圆角矩形
```js
        // 画笔 - 获取画布上下文对象、2D 目前没有3D
        var ctx = demo.getContext('2d');

        // 画矩形 - ctx.rect(x, y, dx, dy);
        ctx.rect(200, 50, 100, 100);
        ctx.stroke();
        ctx.beginPath();

        // 直接绘制矩形、
        ctx.strokeRect(310, 50, 100, 100);

        // 直接绘制带填充的矩形、
        ctx.fillRect(310, 160, 100, 100);

        // 橡皮擦 - ctx.clearRect(x, y, dx, dy)
        ctx.clearRect(180, 30, 50, 50);

        // 画弧形 - 圆 ctx.arc(x,y,r,sAngle,eAngle,counterclockwise);
        ctx.arc(100, 100, 50, 0, Math.PI * 2, 0);
        ctx.stroke();
        ctx.beginPath();

        // Demo
        ctx.moveTo(100, 250);
        ctx.arc(100, 250, 50, 0, Math.PI * 1.5, 0);
        ctx.lineTo(100, 250);
        ctx.stroke();
        ctx.beginPath();

```
![img](https://box.kancloud.cn/4c96dcd820d4c0943c3239ce002017c7_204x210.png)

![img](https://box.kancloud.cn/922e2b5e18fe0444b6aa6af0c9c8f7f7_827x393.png)
![img](https://box.kancloud.cn/7639a48e5a03495d7d807f03b70a95a4_620x422.png)
```js
        // 画笔 - 获取画布上下文对象、2D 目前没有3D
        var ctx = demo.getContext('2d');

        // 绘制圆角矩形 - ctx.arcTo(x1, y1, x2, y2, r);
        ctx.moveTo(100, 120);
        ctx.arcTo(100, 200, 200, 200, 20); // 圆角
        ctx.arcTo(200, 200, 200, 100, 20);
        ctx.arcTo(200, 100, 100, 100, 20);
        ctx.arcTo(100, 100, 100, 200, 20);
        ctx.stroke();
        ctx.beginPath();
```
![img](https://box.kancloud.cn/6bd260619415e37b4134fef2dbe8512d_130x123.png)

## canvas - 贝塞尔曲线
```js
        // 2次 贝塞尔曲线 - ctx.quadraticCurveTo(x1, y1, ex, ey);
        // x1,y1 == 控制点、ex,ey == 结束点
        ctx.moveTo(100, 100);
        ctx.quadraticCurveTo(100, 200, 200, 200);
        ctx.stroke();
        ctx.beginPath();

        // 3次 贝塞尔曲线 - ctx.bezierCurveTo(x1, y1, x2, y2, ex, ey);
        // x1,y1,x2,y2 == 控制点、ex,ey == 结束点
        ctx.moveTo(300, 100);
        ctx.bezierCurveTo(400, 300, 500, 100, 600, 300);
        ctx.stroke();
        ctx.beginPath();
```
![img](https://box.kancloud.cn/78785980cfc7983a575353e7c3a855e0_586x269.png)
## canvas - 变换 / 图案 / 其他
```js
        // 画笔 - 获取画布上下文对象、2D 目前没有3D
        var ctx = demo.getContext('2d');
        // 平移 - ctx.translate(dx, dy);    (放在绘图之前)
        ctx.translate(-50, -50); // 平移
        // 缩放 - ctx.scale(sx, sy);
        ctx.scale(2, 2); // 缩放
        // 旋转 - ctx.rotate(Math.PI);
        ctx.rotate(Math.PI / 4);
        ctx.save(); // 保存当前绘图状态、1
        ctx.restore(); // 恢复保存的绘图状态、2
        // 先重置再变换 - ctx.setTransform(水平缩放, 水平倾斜, 垂直倾斜, 垂直缩放, 水平移动, 垂直移动);
        ctx.setTransform(1, 1, 1, 0.5, 123, 123);
        // 在之前的基础上变换 - ctx.transform(水平缩放, 水平倾斜, 垂直倾斜, 垂直缩放, 水平移动, 垂直移动);
        ctx.transform(1, 2, 3, 4, 5, 6);
        ctx.strokeRect(100, 100, 200, 200);
        ctx.stroke();
        ctx.beginPath();

        // 填充图案 - ctx.createPattern(img, repeat);
        var img = new Image();
        img.onload = function() {
            // 图片加载是异步的过程、需要在加载完成事件里使用、
            var fill = ctx.createPattern(this, 'no-repeat'); // 不重复
            ctx.fillStyle = fill; // 设置颜色为图案
            ctx.fillRect(50, 50, 100, 100); // 绘制带填充的矩形
            ctx.stroke();
            ctx.beginPath();
        }
        img.src = './src/wx.jpg';

        // 线性渐变 - ctx.createLinearGradient(x1, y1, x1, y);
        var bg = ctx.createLinearGradient(0, 0, 200, 200);
        bg.addColorStop(0, 'red');
        bg.addColorStop(0.25, '#139');
        bg.addColorStop(0.5, '#168');
        bg.addColorStop(0.75, '#654');
        bg.addColorStop(1.0, '#000');
        ctx.fillStyle = bg;
        ctx.fillRect(50, 50, 200, 200);
        ctx.stroke();
        ctx.beginPath();

        // 径向渐变 - ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
        var bg = ctx.createRadialGradient(200, 200, 0, 200, 200, 100);
        bg.addColorStop(0, '#fff');
        bg.addColorStop(1.0, '#000');
        ctx.fillStyle = bg;
        ctx.arc(200, 200, 100, 0, Math.PI * 2, false); // 画圆
        ctx.fill(); // 填充
        ctx.stroke();
        ctx.beginPath();

        // 阴影
        ctx.shadowColor = 'red';  // 阴影颜色
        ctx.shadowOffsetX = 10;   // X - 偏移量
        ctx.shadowOffsetY = 10;   // Y - 偏移量
        ctx.shadowBlur = 10;      // 模糊程度
        // ----------------------------------
        ctx.fillRect(100, 100, 100, 100);
        ctx.stroke();
        ctx.beginPath();

        // 文字阴影
        ctx.shadowColor = 'red';  // 阴影颜色
        ctx.shadowOffsetX = 10;   // X - 偏移量
        ctx.shadowOffsetY = 10;   // Y - 偏移量
        ctx.shadowBlur = 10;      // 模糊程度
        // ----------------------------------
        ctx.fillStyle = '#aaa'; // 填充颜色
        ctx.font = '50px sans-serif';
        ctx.fillText('Hello World~', 100, 100);
        ctx.stroke();
        ctx.beginPath();

        // 线段样式、.lineCap .lineJoin
        ctx.lineCap = 'round'; // 圆形
        ctx.lineJoin = 'bevel'; // 方形
        // 更多样式自行百度

```
![img](https://box.kancloud.cn/e7c177b82707e3131bf965c2e9175064_218x215.png)
 ![img](https://box.kancloud.cn/c4ff9ca783af5dbc82ff9bfbe5d091dc_224x216.png)
![img](https://box.kancloud.cn/747d6b955cf6f6c314cc6ab6f72e1a0c_277x221.png)
![](https://box.kancloud.cn/4ba1c1bc45eaa9973a1c8929c7838f11_214x212.png)

![](https://box.kancloud.cn/d11330b0f0858f95265a33d460ace119_236x131.png)
![](https://box.kancloud.cn/d3bcbba542fa07362a7a40a3d04eeb40_330x132.png)
![](https://box.kancloud.cn/597b7c27612d66f4e9fa5dfb0af0c711_343x145.png)

## canvas - 裁剪
```js
        ctx.arc(200, 200, 50, 0, Math.PI * 2, true); // 圆
        ctx.stroke();
        ctx.clip(); // 裁剪
        ctx.fillRect(200, 200, 50, 50); // 带填充矩形
        ctx.beginPath();
```
![](https://box.kancloud.cn/dd8b1fa038241f49c87343ded480dfdc_123x119.png)
## canvas - 绘制图片
```js
        // 绘制图片 - 
        var img = new Image();
        img.onload = function() {
            // 图片加载是异步的过程、需要在加载完成事件里使用、
            // 3个参数的用法、ctx.drawImage(img, x, y);
            ctx.drawImage(img, 10, 10);
            // 5个参数的用法、ctx.drawImage(img, x, y, dx.dy);
            ctx.drawImage(img, 220, 10, 50, 50);
            // 9个参数的用法、ctx.drawImage(img, x1, y1, dx1, dy1, x2, y2, w2, h2);
            // 截取图片0,0 100,100的区域，放到220,70的位置，改变宽高为200*200
            ctx.drawImage(img, 0, 0, 100, 100, 220, 70, 200, 200);
            ctx.beginPath();
        }
        img.src = './src/wx.jpg';
```
![](https://box.kancloud.cn/08fc5176703d476d5586ef40b34653a7_819x320.png)
## canvas - 其他
```js
        // 将画板导出为图片编码 (受同源策略影响) data:image/png;base64
        var base64 = demo.toDataURL();
        console.log(base64);

        // 创建新的空白ImageData对象、一般不用
        ctx.createImageData(100, 100);
        // 获取指定区域的像素信息(object)  ctx.getImageData(x, y, dx, dy);
        var data = ctx.getImageData(100, 100, 50, 50);
        // 放回指定区域的像素、ctx.putImageData(data, x, y);
        ctx.putImageData(data, 100, 300);

        // 命中检查
```
