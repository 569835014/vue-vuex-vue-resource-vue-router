<template >
    <div class="index">
      <mu-appbar title="Title">
        <mu-icon-button icon='menu' slot="left"/>
        <mu-icon-button icon='expand_more' slot="right"/>
      </mu-appbar>
      <div>{{test}}</div>
      <input type="text" v-validate="userName"><span icon="phone" v-if="!validateResult.userName.flag">{{validateResult.userName.msg}}</span>
      <input type="text" v-validate="{'ev':'change',type:'idCard'}"><span icon="phone" v-if="!validateResult.idCard.flag">{{validateResult.idCard.msg}}</span>
      <mu-text-field label="请输入邮箱" hintText="请输入邮箱" type="text" icon="email" :errorText="validateResult.email2.flag?'':validateResult.email2.msg" :maxLength="10" errorColor="red" labelFloat v-validate="{'ev':'change',type:'email','namespace':'email2'}"/>
    </div>
</template>
<style>

</style>
<script type="text/javascript">
  import MuAppbar from 'muse-components/appBar/appBar.vue'
  import IconButton from 'muse-components/iconButton/iconButton.vue'
  import TextField from 'muse-components/textField/textField.vue'
  export default{
    data(){
      return {
         userName:{
          ev:"input",
          type:"userName",
          symbol:"or",
          ruleList:[/^1(3|4|5|7|8)\d{9}$/, /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/]
        },
         test:"a",
        validateResult:{
          userName:{
             flag:false,
             msg:"",
           },
          idCard:{
            flag:false,
            msg:"",
          },
          email:{
             flag:false,
             msg:""
           },
          email1:{
            flag:false,
            msg:""
          },
          email2:{
            flag:false,
            msg:""
          },
         }
      }
    },
    methods:{

    },
    components:{
      "mu-appbar":MuAppbar,
      "mu-icon-button":IconButton,
      "mu-text-field":TextField
    }
  }
</script>
