vue 插槽
插槽的定义

在一个组件中使用 <slot>标签，就是定义一个插槽。在使用这个组件的时候允许在组件标签中添加内容包括添加组件 htmL 等任何模板代码
如果组件中没包含<slot>任何被传如的东西都会被抛弃

<a
  v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>

<navigation-link url="/profile">
  Your Profile
</navigation-link>
具名多插槽

    有时候我们希望传入组件的东西在指定的位置上显示就会用到具名插槽如下
```
//用slot元素的name属性可以定义指定插槽
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

//用法一 slot 在模板上
//在用组件替代插槽的时候只要在组件上添加slot属性就能让指定的模板
//替代指定的插槽如下
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
</base-layout>

//用法二 slot在标签上如下
<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>

//渲染结果
//在没有指定slot属性的时候 都会放在slot没有name属性的插槽当中
<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>
```
插槽的默认内容

    在插槽中可以定义默认的内容，默认的内容是可一被用户修改的如下
```
<button type="submit">
  <slot>Submit</slot>
</button>
```
编译作用域

    插槽中的内容不能访问父级作用域 的属性如下啊
```
<navigation-link url="/profile">
  Logged in as {{ user.name }}
</navigation-link>
```
//loggin 部分不能访问 url

父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。
插槽作用域

//用作插槽的组件模板
```
<ul>
  <li
    v-for="todo in todos"
    v-bind:key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

//父级组件
```
<ul>
  <li
    v-for="todo in todos"
    v-bind:key="todo.id"
  >
    <!-- 我们为每个 todo 准备了一个插槽，-->
    <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
    <slot v-bind:todo="todo">
      <!-- 回退的内容 -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
```

使用
```
<todo-list v-bind:todos="todos">
  <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
  <template slot-scope="slotProps">
    <!-- 为待办项自定义一个模板，-->
    <!-- 通过 `slotProps` 定制每个待办项。-->
    <span v-if="slotProps.todo.isComplete">✓</span>
    {{ slotProps.todo.text }}
  </template>
</todo-list>
```
在 2.5.0+，slot-scope 不再限制在 <template> 元素上使用，而可以用在插槽内的任何元素或组件上。

    解构语法

<todo-list v-bind:todos="todos">
  <template slot-scope="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>
```
