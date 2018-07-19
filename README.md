# layer-mobile
vue-layer-mbile 弹层处理
 vue弹出层插件,包含toast loading dialog等浮层控件
 
 
 
  #使用方法
  ```javascript
  import 'layer-mobile/need/layer.css'
  import layer from 'vue-layer-mobile'
  Vue.use(layer)
  ```
toast:
文字和图标:
```javascript
   this.$layer.toast({
     icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
     content: '提示文字',
     time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
   })
 ```
   
loading: 
```javascript
    this.$layer.loading('加载中...')
```

dialog:
 ```javascript
 this.$layer.dialog({
   title: ['这是标题', 'background:red;'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
   content: '这是内容',
   contentClass: 'className',
   btn: ['确定'],
   shadeClose:false,                    // 是否禁止点击朦层，只有这一个方法能用
   time: 2000
 })
 // 如果有btn
 .then(function (res){
   // res为0时是用户点击了左边  为1时用户点击了右边
   let position = res === 0 ? 'left' : 'right'
    console.log(position)
  })
  ```
  
footer:
```javascript
   this.$layer.footer({
     content: '这是内容',
     btn: ['取消', '选项1', '选项2']
   })
   // 如果有btn
   .then(function (res){
     var text = res==0 ? '取消' : '选项'+res
     console.log(text)
   })
```

参考:开源插件layer-mobile http://layer.layui.com/mobile/

参考:开源插件vue-layer-mobile https://github.com/jwaterwater/vue-layer-mobile


