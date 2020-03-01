# echarts图表配置项

# title 标题组件，包含主标题和副标
- show = true   是否显示标题组件。   boolean
-  text = ''  主标题文本，支持使用 \n 换行。 string
- link = ''  主标题文本超链接。 string
-  target = 'blank' 指定窗口打开主标题超链接。 可选 'self' 当前窗口打开  'blank' 新窗口打开

##  textStyle
- 主标题文字的颜色。
```
 color = '#000
```
- 主标题文字字体的风格'
```
fontStyle = 'normal'

可选：

'normal'
'italic'
'oblique'
```
- 主标题文字字体的粗细
```
 fontWeight = 'normal'

可选：

'normal'
'bold'
'bolder'
'lighter'
100 | 200 | 300 | 400...
```
## 副标题文本  subtext
- subtext=' ' 

## 副标题文字样式  subtextStyle
- 跟主标题是一样的

## textAlign 整体（包括 text 和 subtext）的水平对齐
- 可选值：'auto'、'left'、'right'、'center'。
##  textVerticalAlign 整体（包括 text 和 subtext）的垂直对齐。
- 可选值：'auto'、'top'、'bottom'、'middle'

# legend 图例组件

## type 图例的类型  可选值
- 'plain'：普通图例。缺省就是普通图例。
- 'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。

## itemGap = 10; 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。 number

##  formatter 用来格式化图例文本，支持字符串模板和回调函数两种形式。 string Function
```
// 使用字符串模板，模板变量为图例名称 {name}
formatter: 'Legend {name}'
// 使用回调函数
formatter: function (name) {
    return 'Legend ' + name;
}
```
## legend. textStyle 图例的公用文本样式。
- 跟标题一样

## legend. data 图例的数据数组
```
data: [{
    name: '系列1',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'red'
    }
}]
```
# grid
- 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。

在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。
# xAxis
- 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
- xAxis. show = true 是否显示 x 轴。 boolean
- xAxis. position  x 轴的位置
```

可选：

'top'
'bottom'
默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧。
```
- xAxis. offset X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
- xAxis. type = 'category' 坐标轴类型。

```
可选：

'value' 数值轴，适用于连续数据。

'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。

'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。

'log' 对数轴。适用于对数数据。
```
### xAxis. nameTextStyle 坐标轴名称的文字样式。 object
# yAxis
- 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠
- 跟X一样
# polar 
**极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。**
## polar.tooltip. axisPointer 坐标轴指示器配置项。
## polar.tooltip. textStyle 提示框浮层的文本样式。

# radiusAxis
**极坐标系的径向轴。**
###   radiusAxis. nameTextStyle 坐标轴名称的文字样式

# angleAxis 极坐标系的角度轴。
### angleAxis. polarIndex 角度轴所在的极坐标系的索引，默认使用第一个极坐标系。s
### angleAxis. startAngle = 90 起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。
### angleAxis. clockwise = true  刻度增长是否按顺时针，默认顺时针
- boolean   false （逆时针）
### angleAxis. type = 'category' 坐标轴类型。
```
可选：

'value' 数值轴，适用于连续数据。

'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。

'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。

'log' 对数轴。适用于对数数据。
```
### angleAxis. boundaryGap  坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
```
boundaryGap: ['20%', '20%']
```
# radar 雷达图坐标系组件，只适用于雷达图

### radar. center = ['50%', '50%'] 的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。

使用示例：
```
// 设置成绝对的像素值
center: [400, 300]
// 设置成相对的百分比
center: ['50%', '50%']
```
### radar. name  雷达图每个指示器名称的配置项
### radar. axisLine 坐标轴轴线相关设置。
### radar. axisTick  坐标轴刻度相关设置。
### radar. axisLabel 坐标轴刻度标签的相关设置
###  radar. splitLine 坐标轴在 grid 区域中的分隔线。
###  radar. splitArea  坐标轴在 grid 区域中的分隔区域，默认不显示
### radar. indicator 雷达图的指示器，用来指定雷达图中的多个变量（维度)
```
indicator: [
   { name: '销售（sales）', max: 6500},
   { name: '管理（Administration）', max: 16000, color: 'red'}, // 标签设置为红色
   { name: '信息技术（Information Techology）', max: 30000},
   { name: '客服（Customer Support）', max: 38000},
   { name: '研发（Development）', max: 52000},
   { name: '市场（Marketing）', max: 25000}
]
```
# dataZoom
- 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
# visualMap 
- 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。

```
视觉元素可以是：

symbol: 图元的图形类别。
symbolSize: 图元的大小。
color: 图元的颜色。
colorAlpha: 图元的颜色的透明度。
opacity: 图元以及其附属物（如文字标签）的透明度。
colorLightness: 颜色的明暗度，参见 HSL。
colorSaturation: 颜色的饱和度，参见 HSL。
colorHue: 颜色的色调
```
```
option = {
    visualMap: [
        { // 第一个 visualMap 组件
            type: 'continuous', // 定义为连续型 visualMap
            ...
        },
        { // 第二个 visualMap 组件
            type: 'piecewise', // 定义为分段型 visualMap
            ...
        }
    ],
    ...
};
```
# tooltip 提示框组件。
### tooltip. axisPointer 坐标轴指示器配置项。
### tooltip. textStyle 提示框浮层的文本样式。

# axisPointer 
- 这是坐标轴指示器（axisPointer）的全局公用设置。
### axisPointer. label 坐标轴指示器的文本标签
### axisPointer. lineStyle 
### axisPointer. shadowStyle
### axisPointer. handle 拖拽手柄，适用于触屏的环境

# toolbox
- 具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
###  toolbox. feature 
###  toolbox. iconStyle   公用的 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 emphasis 下设置
# brush
- brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。  

### brush. toolbox = ['rect', 'polygon', 'keep', 'clear'] 
```
使用在 toolbox 中的按钮。

brush 相关的 toolbox 按钮有：

'rect'：开启矩形选框选择功能。
'polygon'：开启任意形状选框选择功能。
'lineX'：开启横向选择功能。
'lineY'：开启纵向选择功能。
'keep'：切换『单选』和『多选』模式。后者可支持同时画多个选框。前者支持单击清除所有选框。
'clear'：清空所有选框。
```
### brush. xAxisIndex 指定哪些 xAxisIndex 可以被刷选。
### brush. yAxisIndex   指定哪些 yAxisIndex 可以被刷选。
### brush. brushType = 'rect'
```
默认的刷子类型。

'rect'：矩形选框。
'polygon'：任意形状选框。
'lineX'：横向选择。
'lineY'：纵向选择。
```
