## iview 合并单元格
![image](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/45NBuzDIW489QBoVep5mcTL6hf6cd4IMwGY38PL*OYqEwTzIIoQyLKJCZjk5fPrmi.z4y2AhFdzpZg6PojvBkk1u3CFw*yq67SLKl1Q**YM!/b&bo=UQf6AgAAAAABF54!&rf=viewer_4)

```html
<Table ref="table" height="750" :loading="table_loading" :data="table_data" class="list-table" style="margin: 10px 0" @on-selection-change="selectionChange" :columns="table_columns" stripe border size="small">
    <template slot="action" slot-scope="{ row }">
      <div style="text-align: left; margin-left: 15px">
        <!-- 采购角色或者产品开发角色，草稿状态才显示编辑和删除按钮 -->
        <Button size="small"  type="primary"  class="margin-right-5">编辑</Button>
        <Button size="small"  type="info" class="margin-right-5" >日志</Button>
        <Button size="small"  type="error" >删除</Button>
      </div>
    </template>
  </Table>
```
### 局部代码
```js
{
  title: '货号',
  key: 'articleNumber',
  align: 'center',
  className: 'noPadding mline ',
  render: (h, { row, index, column }) => {
    return row.skuDetailList.map((item) => h('p', { class: 'text' }, [item.articleNumber && h('span', [item.articleNumber.trim()])]))
  }
},
{
  title: '实际入库数',
  key: 'actualQuantity',
  align: 'center',
  width: 80,
  className: 'mline noPadding',
  render: (h, { row, index, column }) => {
    return row.skuDetailList.map((item) => h('p', { class: 'text' }, item.actualQuantity))
  }
},
```
### table_columns
```js

      table_columns: [
        {
          type: 'selection',
          align: 'center',
          className: 'noPadding',
          width: 30
        },
        {
          title: '坏账单号',
          key: 'badOrderNo',
          align: 'center',
          width: 120,
          className: 'noPadding',
          render: (h, { row, index, column }) => {
            let _this = this
            return h(
              'p',
              {
                style: {
                  color: '#3488e3',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    _this.createBadDebtSheetIf = true
                    this.$nextTick(() => {
                      _this.$refs.createBadDebtSheet.handleType = 3
                      _this.$refs.createBadDebtSheet.badOrderId = row.id
                      _this.$refs.createBadDebtSheet.modalShow = true
                    })
                  }
                }
              },
              row.badOrderNo
            )
          }
        },
        {
          title: '采购单号',
          key: 'purchaseOrderNo',
          align: 'center',
          width: 120,
          className: 'noPadding'
        },
        {
          title: '旺旺名称',
          key: 'vendorName',
          align: 'center',
          className: 'noPadding'
        },
        {
          title: '申请人',
          key: 'creater',
          align: 'center',
          width: 60,
          className: 'noPadding',
          render: (h, { row, index, column }) => {
            return h('div', {}, [h('p', employeeNamesFmt(row.creater))])
          }
        },
        {
          title: '创建时间',
          key: 'createDate',
          align: 'center',
          className: 'noPadding',
          render: (h, { row, index, column }) => {
            return h('p', [row.createDate && this.$moment(row.createDate).format('YYYY-MM-DD')])
          }
        },
        {
          title: '核销状态',
          key: 'verifyOrderStatus',
          align: 'center',
          width: 80,
          className: 'noPadding',
          render: (h, { row, index, column }) => {
            return h('div', {}, [h('p', verifyOrderStatusFmt(row.verifyOrderStatus))])
          }
        },
        {
          title: '取消方式',
          key: 'cancelType',
          align: 'center',
          width: 80,
          className: 'noPadding'
        },
        {
          title: '货号',
          key: 'articleNumber',
          align: 'center',
          className: 'noPadding mline ',
          render: (h, { row, index, column }) => {
            return row.skuDetailList.map((item) => h('p', { class: 'text' }, [item.articleNumber && h('span', [item.articleNumber.trim()])]))
          }
        },
        {
          title: '折扣价格',
          key: 'skuDiscount',
          align: 'center',
          width: 70,
          className: 'mline noPadding',
          render: (h, { row, index, column }) =>
            h(
              'div',
              {},
              row.skuDetailList.map((item) => h('p', { class: 'text' }, item.skuDiscount ? Number(item.skuDiscount).toFixed(4) : item.skuDiscount))
            )
        },
        {
          title: '采购数量',
          key: 'quantity',
          align: 'center',
          width: 70,
          className: 'mline noPadding',
          render: (h, { row, index, column }) => {
            return row.skuDetailList.map((item) => h('p', { class: 'text' }, item.quantity))
          }
        },
        {
          title: '实际入库数',
          key: 'actualQuantity',
          align: 'center',
          width: 80,
          className: 'mline noPadding',
          render: (h, { row, index, column }) => {
            return row.skuDetailList.map((item) => h('p', { class: 'text' }, item.actualQuantity))
          }
        },
        {
          title: '取消在途金额',
          key: 'cancelMoney',
          align: 'center',
          width: 90,
          className: 'mline noPadding',
          render: (h, { row, index, column }) => {
            return row.skuDetailList.map((item) => h('p', { class: 'text' }, item.cancelMoney))
          }
        },
        {
          title: '备注',
          key: 'remark',
          align: 'center',
          className: 'noPadding mline',
          render: (h, { row, index, column }) => {
            return row.skuDetailList.map((item) => h('p', { class: 'text' }, item.remark))
          }
        },
        {
          title: '退回原因',
          key: 'returnReason',
          align: 'center',
          className: 'noPadding'
        },
        {
          title: '核销时间',
          key: 'verifyTime',
          align: 'center',
          className: 'noPadding',
          render: (h, { row, index, column }) => {
            return h('p', [row.verifyTime && this.$moment(row.verifyTime).format('YYYY-MM-DD hh:mm:ss')])
          }
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          className: 'noPadding',
          slot: 'action'
        }
      ],
```

```js
let res = await list(args)
this.table_data = cloneDeep(res.data.rows || [])
```

### 接口的值
```js
{
    "success": true,
    "result": null,
    "errorMsg": null,
    "total": 45,
    "totalPages": 0,
    "rows": [
        {
            "id": 121,
            "badOrderNo": "HZNCGPT2006272093438-1",
            "purchaseOrderNo": "NCGPT2006272093438",
            "vendorName": "阳江锋致五金制品厂",
            "creater": "4935",
            "createDate": "2021-08-30T09:49:46.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:15:54.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "5AC304244",
                    "skuDiscount": 11.3000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 11.3000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 196
                }
            ]
        },
        {
            "id": 122,
            "badOrderNo": "HZNCGPT2006272093443-1",
            "purchaseOrderNo": "NCGPT2006272093443",
            "vendorName": "义乌康诺电子",
            "creater": "4935",
            "createDate": "2021-08-30T09:49:52.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:15:55.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "3TT802827-S",
                    "skuDiscount": 24.0000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 24.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 197
                }
            ]
        },
        {
            "id": 123,
            "badOrderNo": "HZNCGPT2006292099915-1",
            "purchaseOrderNo": "NCGPT2006292099915",
            "vendorName": "义乌市博邦工艺品厂",
            "creater": "4935",
            "createDate": "2021-08-30T09:50:17.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:15:56.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "1A10096-BK",
                    "skuDiscount": 4.1000,
                    "quantity": 3,
                    "actualQuantity": 0,
                    "cancelQuantity": 3,
                    "cancelMoney": 12.3000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 198
                }
            ]
        },
        {
            "id": 125,
            "badOrderNo": "HZNCGPT2102193314756-1",
            "purchaseOrderNo": "NCGPT2102193314756",
            "vendorName": "泽风五金电器",
            "creater": "2664",
            "createDate": "2021-08-30T09:50:45.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:15:57.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "1AA801853-W",
                    "skuDiscount": 19.8800,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 19.8800,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 200
                }
            ]
        },
        {
            "id": 127,
            "badOrderNo": "HZNCGPT2102223338518-1",
            "purchaseOrderNo": "NCGPT2102223338518",
            "vendorName": "金刚饰品厂",
            "creater": "4428",
            "createDate": "2021-08-30T09:51:59.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:15:58.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "7HH403295-1",
                    "skuDiscount": 4.8000,
                    "quantity": 3,
                    "actualQuantity": 0,
                    "cancelQuantity": 3,
                    "cancelMoney": 14.4000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 202
                }
            ]
        },
        {
            "id": 128,
            "badOrderNo": "HZNCGPT2103033387946-1",
            "purchaseOrderNo": "NCGPT2103033387946",
            "vendorName": "广纳文具厂",
            "creater": "4240",
            "createDate": "2021-08-30T10:00:32.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:15:59.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "5AC600306-S",
                    "skuDiscount": 2.8000,
                    "quantity": 4,
                    "actualQuantity": 0,
                    "cancelQuantity": 4,
                    "cancelMoney": 11.2000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 203
                }
            ]
        },
        {
            "id": 129,
            "badOrderNo": "HZNCGPT2103043406178-1",
            "purchaseOrderNo": "NCGPT2103043406178",
            "vendorName": "双宝文具558",
            "creater": "4751",
            "createDate": "2021-08-30T10:00:51.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:16:00.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "5AC702818",
                    "skuDiscount": 1.4700,
                    "quantity": 3,
                    "actualQuantity": 0,
                    "cancelQuantity": 3,
                    "cancelMoney": 4.4100,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 204
                }
            ]
        },
        {
            "id": 130,
            "badOrderNo": "HZNCGYP2103063422249-1",
            "purchaseOrderNo": "NCGYP2103063422249",
            "vendorName": "义乌珂玮饰品有限公司",
            "creater": "170304",
            "createDate": "2021-08-30T10:01:21.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:16:00.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "7HH1109661",
                    "skuDiscount": 7.1300,
                    "quantity": 2,
                    "actualQuantity": 0,
                    "cancelQuantity": 2,
                    "cancelMoney": 14.2600,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 205
                }
            ]
        },
        {
            "id": 131,
            "badOrderNo": "HZNCGPT210827146140-1",
            "purchaseOrderNo": "NCGPT210827146140",
            "vendorName": "鑫亿豪科技有限公司",
            "creater": "1158",
            "createDate": "2021-08-30T10:09:40.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T10:16:01.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "1A50401",
                    "skuDiscount": 18.0000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 18.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 206
                },
                {
                    "articleNumber": "1A50904",
                    "skuDiscount": 26.0000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 26.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 207
                },
                {
                    "articleNumber": "1AA200140",
                    "skuDiscount": 28.0000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 28.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 208
                },
                {
                    "articleNumber": "1AA200174",
                    "skuDiscount": 29.0000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 29.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 209
                },
                {
                    "articleNumber": "1AA200416",
                    "skuDiscount": 28.0000,
                    "quantity": 1,
                    "actualQuantity": 0,
                    "cancelQuantity": 1,
                    "cancelMoney": 28.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 210
                }
            ]
        },
        {
            "id": 132,
            "badOrderNo": "HZNCGPT210830146172-1",
            "purchaseOrderNo": "NCGPT210830146172",
            "vendorName": "徐州博采商贸有限公司",
            "creater": "6218",
            "createDate": "2021-08-30T10:40:44.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T11:03:01.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "5AC106160-15",
                    "skuDiscount": 3.5000,
                    "quantity": 5,
                    "actualQuantity": 0,
                    "cancelQuantity": 5,
                    "cancelMoney": 17.5000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 211
                }
            ]
        },
        {
            "id": 135,
            "badOrderNo": "HZNCGPT210830146174-1",
            "purchaseOrderNo": "NCGPT210830146174",
            "vendorName": "徐州博采商贸有限公司",
            "creater": "6218",
            "createDate": "2021-08-30T11:27:13.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T11:28:07.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "7HH801885",
                    "skuDiscount": 3.5000,
                    "quantity": 5,
                    "actualQuantity": 0,
                    "cancelQuantity": 5,
                    "cancelMoney": 17.5000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 214
                }
            ]
        },
        {
            "id": 136,
            "badOrderNo": "HZNCGPT210830146181-1",
            "purchaseOrderNo": "NCGPT210830146181",
            "vendorName": "徐州博采商贸有限公司",
            "creater": "6218",
            "createDate": "2021-08-30T15:36:44.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T15:39:46.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "7HH801799",
                    "skuDiscount": 3.0000,
                    "quantity": 5,
                    "actualQuantity": 0,
                    "cancelQuantity": 5,
                    "cancelMoney": 15.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 215
                }
            ]
        },
        {
            "id": 137,
            "badOrderNo": "HZNCGPT210830146181-2",
            "purchaseOrderNo": "NCGPT210830146181",
            "vendorName": "徐州博采商贸有限公司",
            "creater": "6218",
            "createDate": "2021-08-30T15:42:22.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-10-18T10:38:09.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "7HH801885",
                    "skuDiscount": 3.5000,
                    "quantity": 6,
                    "actualQuantity": 0,
                    "cancelQuantity": 6,
                    "cancelMoney": 21.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 216
                }
            ]
        },
        {
            "id": 138,
            "badOrderNo": "HZNCGPT210830146181-3",
            "purchaseOrderNo": "NCGPT210830146181",
            "vendorName": "徐州博采商贸有限公司",
            "creater": "6218",
            "createDate": "2021-08-30T15:43:57.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-11-04T17:52:43.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "7HH801905",
                    "skuDiscount": 3.5000,
                    "quantity": 7,
                    "actualQuantity": 0,
                    "cancelQuantity": 7,
                    "cancelMoney": 24.5000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 217
                }
            ]
        },
        {
            "id": 140,
            "badOrderNo": "HZNCGPT2006232078485-1",
            "purchaseOrderNo": "NCGPT2006232078485",
            "vendorName": "tzali009",
            "creater": "4392",
            "createDate": "2021-08-30T16:40:57.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T17:02:57.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "8QQ800315-LGN",
                    "skuDiscount": 2.3500,
                    "quantity": 4,
                    "actualQuantity": 0,
                    "cancelQuantity": 4,
                    "cancelMoney": 9.4000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 219
                }
            ]
        },
        {
            "id": 141,
            "badOrderNo": "HZNCGCW2104203654685-1",
            "purchaseOrderNo": "NCGCW2104203654685",
            "vendorName": "heraparty",
            "creater": "4240",
            "createDate": "2021-08-30T17:11:42.000+0800",
            "verifyOrderStatus": "Finished",
            "cancelType": "坏账异常",
            "returnReason": null,
            "verifyTime": "2021-08-30T18:55:28.000+0800",
            "skuDetailList": [
                {
                    "articleNumber": "8YY802808",
                    "skuDiscount": 7.0000,
                    "quantity": 3,
                    "actualQuantity": 0,
                    "cancelQuantity": 3,
                    "cancelMoney": 21.0000,
                    "remark": null,
                    "cancelType": "坏账异常",
                    "id": 220
                }
            ]
        }
    ],
    "connectionRefused": false
}
```