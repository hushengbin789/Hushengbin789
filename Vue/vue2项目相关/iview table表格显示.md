![image](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/45NBuzDIW489QBoVep5mcYADzzhJeqwcuF3UZC*rmpdfg.qEP9fnM0mUSs9dKSTDofs09L6X*2JLe7SeTouIt0PZrVkyUqlOCe6b.RYn.Ko!/b&bo=0AfRAgAAAAABFzQ!&rf=viewer_4)

代码

```js
{
  title: '毛利率（%）',
  key: 'profitCountPer',
  align: 'center',
  className: 'noPadding',
  minWidth: 60,
  renderHeader: (h, { row, index, column }) => {
    return h('Tooltip', {
      props: {
        content: '毛利率（%）=（毛利润/销售总额）*100%',
        placement: 'top',
        transfer: true,
        maxWidth: 500
      }
    }, [
      h('p', '毛利率'),
      h('p', '（%）')
    ])
  },
  render: (h, { row, index, column }) => {
    let text = typeof row[column.key] === 'number' ? row[column.key] + '%' : ''
    // 金额千分位，保留两位小数
    return h('p', text)
  }
},
```

> 总结有`renderHeader`的时候title标题失效
> + 这块的row[column.key]  其实取的是上面可以的值  两种取值法
> + 1.`row.profitCountPer`   2.`row[column.key]`  这样的  以后项目中随便用