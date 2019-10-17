理解Vuex的辅助函数mapState, mapActions, mapMutations用法    这个比较细
https://www.cnblogs.com/tugenhua0707/p/9794423.html

Vuex中辅助函数mapState，mapGetters,mapMutations,mapActions的使用
mapState，mapGetters,mapMutations,mapActions，这些辅助函数主要是为了避免在组件调用代码中写太多的部分，用最简单的方式来调用Vuex。
一个简单的栗子：
首先看看store的结构:
```
store
  module
    user.js
  actions.js
  index.js
  mutations.js
  state.js
```
index.js：

```
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user
  }
})
```
user.js:
```
const state = {
  mytest: 'this is user.js '
}

const mutations = {
  //
}

const actions = {
  //
}

const getters = {
  doSome: state => {
    return state.mytest.split(' ')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
```
在组件或页面中调用:
```
export default {
  
  mounted() {
    // 使用map辅助函数：
    console.log(this.user.mytest)
    console.log(this.test)
    // 不使用map辅助函数：
    console.log(this.$store.state.user.mytest)
    console.log(this.$store.getters.test)
  },
 
  computed: {
    ...mapGetters({
      'test': 'doSome'
    }),
    ...mapState({
      'user': 'user'
    })
  }
}
```
mapMutations,mapActions 辅助函数的使用都是类似