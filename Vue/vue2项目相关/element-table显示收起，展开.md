
![image](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/45NBuzDIW489QBoVep5mcciGw7stJfYwP1DPkqAftEnheDRrf.qQY7UaX7isOg*VIe3PYex*BGFoo2j1eTCDo9Fp2TI91l*fOueJtD6KUM4!/b&bo=wgJZAgAAAAABF6s!&rf=viewer_4)
```html
<div class="tableCss">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border>
      <el-table-column type="index" width="50">
        <template slot="header">序号</template>
      </el-table-column>
      <el-table-column v-for="(item, key) in tableCol" :key="key">
        <template slot="header">
          <div v-html="item.title"></div>
        </template>
        <template slot-scope="scope">
          <div>
            <span v-html="scope.row[item.porp]"></span>
            <span v-if="item.porp === 'summaryTxt'">
              <el-button type="text" @click="showMore(scope.row)">{{ scope.row.status ? '显示更多' : '收起' }}</el-button>
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="150" label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="createData(scope.$index, scope.row, true)" v-if="hasButtonPermission('19010303')">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" v-if="hasButtonPermission('19010304')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
```
### 局部代码

```html
<el-table-column v-for="(item, key) in tableCol" :key="key">
    <template slot="header">
      <div v-html="item.title"></div>
    </template>
    <template slot-scope="scope">
      <div>
        <span v-html="scope.row[item.porp]"></span>
        <span v-if="item.porp === 'summaryTxt'">
          <el-button type="text" @click="showMore(scope.row)">{{ scope.row.status ? '显示更多' : '收起' }}</el-button>
        </span>
      </div>
    </template>
  </el-table-column>
```
### js方法
```js
showMore(val) {
  let str = val.summaryTxt.slice(0, 20)
  if (val.status) {
    val.summaryTxt = val.summary
  } else {
    val.summaryTxt = str
  }
  val.status = !val.status
}
```


```js
tableCol: [
    {
      porp: 'systemName',
      title: 'Estone系统'
    },
    {
      porp: 'summaryTxt',
      title: '测试小结'
    },
    {
      porp: 'user',
      title: '项目负责人</br>产品负责人</br>对接业务'
    },
    {
      porp: 'demandTotal',
      title: '需求总数'
    },
    {
      porp: 'bugTotal',
      title: '新发现BUG总数'
    }
],
```
### 请求接口

```js
getTestReport() {
  let _this = this
  let sendata = JSON.parse(JSON.stringify(this.form))
  sendata['pageIndex'] = this.page.pageIndex
  sendata['pageSize'] = this.page.pageSize
  testReport.testReportList(sendata).then(function(res) {
    res.result.records.forEach(element => {
      element.user = `${element.projectManager ? element.projectManager : ''}</br> ${element.productManager ? element.productManager : ''}</br> ${element.business ? element.business : ''}`
      let beginStr = element.beginDate ? element.beginDate.slice(0, 10) : ''
      let endDateStr = element.endDate ? element.endDate.slice(0, 10) : ''
      element.times = `${beginStr}${beginStr && endDateStr ? '至' : ''}${endDateStr}`
      // 测试小结********在这儿
      if (element.summary && element.summary.length > 20) {
        element.summaryTxt = element.summary.slice(0, 20) + `...`
        element.status = true  //大于20状态为true
      } else {
        element.summaryTxt = element.summary
        element.status = false //否则状态为false
      }
    })
    _this.tableData = res.result.records
    _this.page.total = res.result.total
  })
},
```

接口的值

```js
{ // 单个的
    "id": 164128499572837,
    "systemId": 6,
    "systemName": "物流系统",
    "systemVersionId": 164128466788020,
    "systemVersion": "TMSV4.6.0 202112",
    "beginDate": "2021-12-01 00:00:00",
    "endDate": "2022-01-28 00:00:00",
    "overview": "本次版本只要以“小包计价，头程索赔”新功能模块及对接新的物流商为主，总体需求量不大，测试对于价格的验证需要花费大量时间取比对。",
    "demandTotal": 28,
    "testReportTotal": null,
    "bugTotal": 11,
    "serious": 0,
    "ordinary": 11,
    "smaller": 0,
    "suggest": 0,
    "conclusion": "通过",
    "summary": "本次版本共28个需求，其中发现bug数量11个，目前已完成修复并已全部上线；总体而言开发质量良好。",
    //**************这个是输出文本****************
    "jiraUrl": "http://192.168.4.10:8181/bug-browse-16-0-all-1335.html",
    "status": 0, // *********状态在在这**********
    "type": "接口测试&功能测试",
    "workload": "17.5",
    "reBug": null,
    "reFailBug": null,
    "devTestNum": null,
    "devTestFailNum": null,
    "pengdingBug": null,
    "productManager": "杨家将",
    "productManagerId": 3527,
    "test": "周蛐蛐",
    "testId": "4175",
    "business": "[\"单岛\"]",
    "businessId": "[3520]",
    "projectManager": "杨家将",
    "projectManagerId": 3527,
    "createAt": "2022-01-04 16:29:56",
    "updateAt": "2022-01-17 11:00:14"
}
```
