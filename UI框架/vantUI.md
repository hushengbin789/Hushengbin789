vant更多情况是适用移动商城的开发，如果项目是其他业务，或者产品的设计风格和vant不一样，则不太适用vantui。

vant的折叠面板中设置里面的高 折叠面板样式就乱了

poup按照官网demo使用也报错（以前用都是好的，但是这两天，用的官网poup最简单的例子，也报错。重新装了其他版本，也报错。神奇的是，打包以后就不报错了）

van-list 一个页面多次使用，导致弹出层滑动不流畅    2018-7

### 1.订单提交地址等组件的应用
   使用的组件有如下：

```
import {Card,button,Toast,AddressList,Popup,AddressEdit,Area} from 'vant'
```
主要是配货地址编辑这块；
 <van-address-edit
                      :area-list="areaList"
                      :address-info="addressInfo"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                     
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail"
                    />
地址编辑。没有用默认的地址编辑属性：search-result
所以去掉了，一是没有做地理搜索功能。而且发现模拟测试老是有bug，干脆去掉。

### 2.默认list属性。要重新定义。配合自己需要做的功能。文档给的属性很少
```js
  list:[
        { id: '1',
          name: '张三',
          tel: '13000000000',
          province:'江苏',
          city:'无锡',
          county:'崇安区',
          area_code:'120000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          postal_code:'123456',
        }
      ],
      
// 原来的
{
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
// ，后添加详细的数据，是为了方便后期做更改编辑功能。
```
### 3.地址json文件。

默认要导入全国地址表，
```js
// 导入 area.js
import areaList from '../../../config/area.min.js'
```
直接在函数。将数据绑定给了模型 areaList

 :area-list="areaList"
 
### 4.保存地址：

默认数据类型对象。所以定义了一个addr。否则老是报错。但不影响程序运行。

addr重新组合了拿到的数据。压入list里去渲染，这里做了下判断是否保存数据成功
```js
 let addr = new Object;
      console.log('content');
      console.log(content);
      let len = this.list.length + 1;
      addr = {
        id:len,
        name:content.name,
        tel:content.tel,
        city:content.city,
        county:content.county,
        is_default:content.is_default,
        postal_code:content.postal_code,
        province:content.province,
        area_code:content.area_code,
        address:content.province+content.city+content.county+content.address_detail
      };
      let is_add = this.list.push(addr);
```      
### 5，编辑的时候。 onEdit(item, index) 这个item就是我最先更改的list数据模型了。这里有需要的地区code码。这就是想要的。

因为跳到编辑页面，需要将地区重新解析出来。测试时可以。

其中待完善：编辑时候的详细地址未变化。删除地址等操作

下方。测试代码demo
```html
<template>
  <div class="home-page">
    <div class="home">
      <!-- top 高度固定6vh; -->
      <header-vue></header-vue>
      <!-- 内容滚动 -->
      <div class="home-content wrapper" ref="wrapper"> 
          <div class="content">
            <div style="min-height:900px; border:1px solid red;">
                进入订单页面显示订单列表。开始编辑地址收货表。如果之前有，查询出来，直接选择上。没有用户开始去编辑
            
                <!-- 新增收货地址：vant - AddressList -->
                <van-address-list
                  v-model="chosenAddressId"
                  :list="list"
                  @add="onAdd"
                  @edit="onEdit"
                />
                <!-- 弹出层，提示选择地址，没有则编辑 -->
 
                <van-popup v-model="show1" position="" :overlay="false">
                  <van-button @click="show1 = false">关闭</van-button>
                  <!-- 地址组件 -->
                   <!-- <div style="width:100vw;height:100vh;background:#fff;">地址编辑内容</div> -->
                    <van-address-edit
                      :area-list="areaList"
                      :columns-num="2"
                      :address-info="addressInfo"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                     
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail"
                    />
                </van-popup>
                <!-- vatn - card -->
                <van-card
                  title="标题"
                  desc="描述"  
                  num="2"
                  price="2.00"
                  :thumb="imageURL"
                >
                  <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button>
                  </div>
                </van-card>
 
            </div>
 
          </div>
      </div>
 
    </div>
  </div>
</template>
 
<script>
import BScroll from 'better-scroll'
import HeaderVue from '../../components/common/header/Header.vue'
// 导入 area.js
import areaList from '../../../config/area.min.js'
 
import {Card,button,Toast,AddressList,Popup,AddressEdit,Area} from 'vant'
 
export default {
  name: '',
  components:{ 
    HeaderVue,
    [Card.name]:Card,
    [button.name]:button,
    [Toast.name]:Toast,
    [AddressList.name]:AddressList,
    [Popup.name]:Popup,
    [AddressEdit .name]:AddressEdit,
    [Area.name]:Area,
  },
  data () {
    return {
      msg: 'Welcome to Home.vue App sss',
      chosenAddressId:'1',
      show:false,
      show1:false,
      areaList:'',
      searchResult:[
        { id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }
      ],
      addressInfo:'',
      imageURL:'kdkk',
      list:[
        { id: '1',
          name: '张三',
          tel: '13000000000',
          province:'江苏',
          city:'无锡',
          county:'崇安区',
          area_code:'120000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          postal_code:'123456',
        }
      ],
    }
  },
  mounted(){
    // 初始化滚动插件 better-scroll
    this.scroll = new BScroll(this.$refs.wrapper,{
       scrollY:true,
       click:true,//一开始的点击事件被bscroll阻止了，设置这个才能点击
    })
 
    this.getOrderDate()
  },
  methods:{
    getOrderDate:function(){
      console.log('获取 该用户名下的订单表数据')
    },
    onAdd() {
      console.log('新增收货地址');
      this.show1 = true;
      console.log('areaList')
      console.log(areaList)
      this.areaList = areaList;
      // 地址编辑默认信息
      this.addressInfo = new Object;
    },
    onEdit(item, index) {
      let addressInfo = new Object;
      this.areaList = areaList;
      // Toast('编辑收货地址:' + index);
      console.log('编辑收货地址:' + index);
      console.log(item);
      // 进入编辑模式
      this.show1 = true;
      addressInfo = {
        id:item.id,
        name:item.name,
        tel:item.tel,
        province:item.province,
        city:item.city,
        county:item.county,
        area_code:item.area_code,
        address_detail:item.address,
        postal_code:item.postal_code,
        is_default:item.is_default,
      }
 
      this.addressInfo = addressInfo;
    },
    onSave(content) {
      let addr = new Object;
      console.log('content');
      console.log(content);
      let len = this.list.length + 1;
      addr = {
        id:len,
        name:content.name,
        tel:content.tel,
        city:content.city,
        county:content.county,
        is_default:content.is_default,
        postal_code:content.postal_code,
        province:content.province,
        area_code:content.area_code,
        address:content.province+content.city+content.county+content.address_detail
      };
      let is_add = this.list.push(addr);
      // 判断是否选中默认
      if (content.is_default) {
        this.chosenAddressId = len;
      }
      if (is_add) {
        this.show1 = false;
      }
      console.log(this.list);
      // this.list = listArr;
      // this.list = [{
      //     id: '1',
      //     name: '张三',
      //     tel: '13000000000',
      //     address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
      // }];
    },
    onDelete() {
      Toast('delete');
      console.log('delete');
    },
    onChangeDetail(val) {
        // if (val) {
        //   this.searchResult = [{
        //     name: '黄龙万科中心',
        //     address: '杭州市西湖区'
        //   }];
        // }else {
        //     this.searchResult = [];
        // }
    }
    
  },
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .home-page{}
  .home{
    width: 100%;
 
  }
  .header{
    width: 100%;
    height: 6vh;
    border-bottom: 1px solid #ddd;
  }
  .home-content{
    height: 94vh;
    border: 1px solid #000;
    overflow: hidden;
  }
 
  /*弹出层*/
  .van-popup{
  /*  width: 100%;
    top: 40%!important;*/
  }
  .van-address-list__add{
    position: relative!important;
    z-index: 1999;
    font-size: 14px;
  }
  .van-cell{
    position: relative!important;
  }
  .van-popup{
    height: 100%;
    width: 100%;
  }
 .van-address-list__group{
  padding-bottom: 10px!important;
 }
 
</style>
```
        