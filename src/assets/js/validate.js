/**
 * Created by Administrator on 2016/12/6 0006.
 */
let validate={
  rules:{
    email: {
      ev:"input",
      type:"email",
      msg:"邮箱格式错误",
      ruleList:[ /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/],
      symbol:"and",
      result:false
    },
    userName:{
      ev:"input",
      type:"userName",
      symbol:"or",
      msg:"用户名格式错误",
      result:false,
      ruleList:[/^1(3|4|5|7|8)\d{9}$/, /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/]
    },
    idCard:{
      ev:"input",
      type:"idCard",
      symbol:"or",
      msg:"你输入的身份证不正常",
      result:false,
      ruleList:[/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/]
    }
  },
  vali:{}
};
validate.install = function (Vue, options) {
  var that=this;
  // 1. 添加全局方法或属性
  // Vue.myGlobalValidate ={
  //   ev:"click",
  //   type:"",
  //   msg:""
  // };
  // 2. 添加全局资源
  Vue.directive('validate', {
    bind:function (el, binding, vnode) {
      var opt=binding.value;
      if(el.tagName.toLocaleLowerCase()!="input"){
        el=el.getElementsByTagName("input")[0]
      }
      var rule={};
      Object.assign(rule,that.rules[opt.type]);
      var vm="";
      if(opt.namespace){
        vm=vnode.context.validateResult[opt.namespace];
      }else{
        vm=vnode.context.validateResult[opt.type];
      }
      if(!rule){
        that.rules[opt.type]=opt;
        rule=opt;
      }else{
        Object.assign(rule,opt);
      }
      console.info(rule);
      var list=rule.ruleList;
      el.addEventListener(opt.ev,validateMet,true);
      function validateMet() {
        var val=el.value;
        rule.result=false;
        for(var i=0,l=list.length;i<l;i++){
          var reg=list[i];
          if(rule.symbol=="and"){
            if(!reg.test(val)){
              console.info("无效");
              break
            }else{
              if(i==l-1){
                if(reg.test(val)){
                  rule.result=true;
                }
              }
            }
          }else{
            if(reg.test(val)){
              rule.result=true;
              console.info("有效");
              break
            }
          }
        }
        vm.flag=rule.result;
        if(!rule.result){
          if(!vm.msg){
            vm.msg=rule.msg;
          }
        }
      }
    },
    update:function (oldValue,value) {
    },
  });
  // 3. 添加实例方法
  // Vue.prototype.$myMethod = ...
};
export  default validate;
