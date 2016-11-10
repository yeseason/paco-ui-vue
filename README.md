# paco-ui-vue

Vue Components for PACO-UI


## 使用说明

- 引入CSS
```html
<link rel="stylesheet" href="//hcz.pingan.com/common/css/paco/VERSION/paco.min.css" charset="utf-8">
```
- 引入fastclick
```html
<script src="//npmcdn.com/fastclick@1.0.6/lib/fastclick.js"></script>
```
- 引入`paco-ui-vue`库

```bash
  npm install vue-touch
  npm i --save paco-ui-vue
```

> 注：`VERSION`为要使用版本


Import all components.

```javascript
import Vue from 'vue'
import Paco from 'paco-ui-vue';

Vue.use(paco)

```
## 组件说明

- Ad
```html
    <Ad src="http://hcz.pingan.com/common/images/logo.png" show="true" baksrc="http://localhost:9090/dist/93719466a36e57c0a7b206f92deace54.png" link="http://hcz.pingan.com" title="平安好车主">开车能赚钱，买车全网最低</Ad>开车能赚钱，买车全网最低</Ad>

    src 小图标图片地址
    show 是否显示图标
    baksrc 背景图片地址
    link 连接地址
```


- Announcement
```html
<Announcement>您的爱车暂无违章记录，请继续保持</Announcement>
```

- Button
```html
    <paco-button type="primary" >主按钮</paco-button>
    <paco-button type="secondary" >次按钮</paco-button>
    <paco-button type="primary" disabled>不可点击按钮</paco-button>
    <paco-button type="outline" >按钮</paco-button>
    <paco-button type="outline" >三字钮</paco-button>
    <paco-button type="outline" >四字按钮</paco-button>
    <paco-button type="outline" >五个字按钮</paco-button>
    <paco-button type="warning" >警示按钮</paco-button>
    <paco-button type="bottom" >底部按钮</paco-button>
    <paco-button type="warning" disabled >警示按钮不可点</paco-button>
```
- Illustration
```html
  <illustration src="src" show="true" text="刷新"><p slot="title">说明文本说明文本说明文本</p> <p slot="desc">说明文本</p></illustration>  
  src 图片地址
  show 是否显示按钮
  text 按钮文字

```

- Input
```html
   <inputs til="输入内容提示" label="true"></inputs>
    <inputs til="输入内容提示">提示标签</inputs>
    <inputs value="已输入内容"> 五个字标签</inputs>
    <inputs til="输入内容提示" wrong="true">提示标签</inputs>
    <inputs til="输入内容提示" camera="true" highlight="true">提示标签</inputs>
    <inputs til="输入校验码" span="true">校验码</inputs>
```

- Search
```html
<paco-search></paco-search> 
```

- CheckBox
```html
<paco-check value="true">同意</paco-check>
```

- Mask
```html
 <Mask></Mask>
```

- Line
```html
      <Line ></Line>
      <Line right></Line>
      <Line left></Line>
      <Line right left></Line>
```

- Loading
```html
<Loading :active="active"></Loading>
```


- Share
```html
<share :active='active'></share>
```

- Switch
```html
<Switch></Switch>
```

- Tab
```html
<Tabs type="pills">
      <Tab title="tabname1" active=true>
        hello word
      </Tab>
      <Tab title="tabname2" >
        hello andrond
        <input type="text" name="">
      </Tab>
      <Tab title="tabname3" >
        hello ios
      </Tab>
</Tabs>
```

- Toast
```html
    <paco-button v-on:click="openToast" type="primary" >success</paco-button>
    <paco-button v-on:click="openToastfail" type="primary" >fail</paco-button>
    <paco-button v-on:click="openToastopps" type="primary" >opps</paco-button>
```
```javascript
    openToast(){
      Toast("成功提醒");
    },
    openToastfail(){
      Toast({
        message:"失败提醒",
        duration:1000,
        type:"fail"      
      });
    },
    openToastopps(){
      Toast({
        message:"网络无法连接",
        duration:5000,
        type:"opps"      
      });
    }
```

- Agreeme
```html
    <span class="agree-it"><paco-check value="on">同意</paco-check><a href="http://hcz.pingan.com/common/page/provision/loss.html">《平安好车主服务协议》</a></span>
```

- Agreement

```html
  <agreement>内容</agreement>
```

- Card

```html
  <card thumbnail="true" src="http://placehold.it/688x346/1cabeb/ffffff?text=PACO-UI">
      <span slot="title"> 标题</span>
      <span slot="tips">2016-08-08</span>
      <span slot="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
  </card>
```

- Alert

```javascript
Alert({
  title:"温馨提示",
  message:"你确定这么做"
},function (action) {
   console.log(action);
}
      
title 标题
message 内容
showCancelButton 是否显示取消按钮
```

- Model

```javascript
       Model({
          img:"http://placehold.it/250/1cabeb/ffffff?text=PACO-UI",
          desc:"说明方案",
          tips:"终极辅助说明方案",
          btn:"主按钮"
       },function(action){
          console.log(action);
       })
```

- Actionsheet

```javascript
      Actionsheet({

      },function(action){
          console.log(action);
      })
```

- Picker
```javascript
  <List v-on:click.native="showtime" icon="true"><span slot="title">时间</span><span slot="desc">{{timenow}}</span></List>
  <paco-picker :visible="visible" :starttime="2000" :endtime="2040" v-on:time="time"> </paco-picker>
```
    time(val,visible){
      this.timenow=val
      this.visible=visible
    },
    showtime(){
      this.visible=true
    }

- Keyboard
``` javascript
    <paco-keyboard v-on:keyboard="values"></paco-keyboard>  
```

- Actionsheet
``` javascript
     <paco-result description=所提交内容已成功完成验证 title=支付成功 btn=success type=success v-on:handleActions="result"></paco-result>
```
