# Search搜索导航

### 项目描述：

**简洁的搜索导航网页，采用原生js编写，即拿及用，可选择不同的搜索引擎，展示网址收藏，查看天气，本地设置，无聊时玩玩小游戏...**

**练手作，最近发现原生js写的太少了，好多东西都快忘了，欢迎给我提意见优化代码**

**顺便一提也想练练ES6语法**

### 在线地址：

https://search.virs.xyz

### 使用说明：

建议使用 **VS Code（Visual Studio Code）** 并安装 **Live Server** 插件，否则无法处理json文件

部署服务器无其他要求

### 预计添加的功能：

1. 多引擎搜索（默认必应）

   预计添加的引擎：

   - 谷歌✅
   - 必应✅
   - 百度✅
   - 搜狗✅
   - ......

2. 常用网址导航

   网址分类：

   - 常用网站❎
   - 视频网站❎
   - 开发网站❎
   - 设计网站❎
   - ......

   网站主题色：

   每个胶囊显示字体颜色为该网站主题色✅

3. 天气

   调用第三方接口❎

4. 设置

   本地设置（导入，导出）

   - 配色❎

   - 背景❎

   - ......

5. 小游戏

   - 别踩白块❎
   - 贪吃蛇❎
   - 打砖块❎
   - ......
   
6. 随机名言

7. 启动动画，细节动画

8. 更流畅的设计

9. 响应式布局

10. 侧边栏返回顶部按钮

### 侧边栏切换:

 **效果：**点击星星打开游戏列表，点击旗帜打开收藏网址，点击齿轮设置页面，点击空白部分关闭侧边栏

###  数据格式：

1. #### 搜索引擎相关数据：

   ┌engine（搜索引擎数据）

   ├─name（搜索引擎名称）

   ├─value（搜索引擎值，默认为英文名称）

   ├─href（搜索引擎链接）

   ├─icon（搜索引擎图标）

   └─select（选中状态，默认选中必应搜索）

2. #### 收藏网址相关数据：

   ┌website（收藏网址数据）

   ├─name（网址分类标题）

   ├─value（分类英文名）

   ├─icon（分类标题图标）

   ├─color（分类标题颜色）

   └─content（网址分类内容）

   ​	├─name（网站名称）
   
   ​	├─href（网站链接）
   
   ​	├─icon（网站图标）
   
   ​	└─color（网站字体颜色）

### 命名规则：

1. 功能名 + 具体名
2. id一般为驼峰命名
3. class一般为中间加 “ - ” 命名

### 后续计划：

1. 使用jQuery重写代码
2. 使用vue重写代码
3. 使用nodejs部署服务器
4. 账号登陆同步书签设置及其他信息功能