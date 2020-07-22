## 导航守卫
### 完整的导航解析流程
- 导航被触发。
- 在失活的组件里调用离开守卫。
- 调用全局的beforeEach守卫。
- 在重用的组件里调用beforeRouteUpdate守卫 (2.2+)。
- 在路由配置里调用beforeEnter。
- 解析异步路由组件。
* 在被激活的组件里调用beforeRouteEnter。
* 调用全局的beforeResolve守卫 (2.5+)。
* 导航被确认。
* 调用全局的afterEach钩子。
* 触发 DOM 更新。
* 用创建好的实例调用beforeRouteEnter守卫中传给next的回调函数。    