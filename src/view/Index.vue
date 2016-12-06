<template >
    <div class="index">
      <mu-appbar title="Title">
        <mu-icon-button icon='menu' slot="left"/>
        <mu-icon-button icon='expand_more' slot="right"/>
      </mu-appbar>
      <div>{{test}}</div>
      <input type="text" v-validate="userName">
      <mu-text-field label="请输入邮箱" hintText="请输入邮箱" type="text" icon="phone" errorText="" :maxLength="10" errorColor="red" labelFloat v-validate="{'ev':'change',type:'email'}"/>
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
          ev:"change",
          type:"userName",
          symbol:"or",
          ruleList:[/^1(3|4|5|7|8)\d{9}$/, /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/]
        },
         test:"a"
      }
    },
    components:{
      "mu-appbar":MuAppbar,
      "mu-icon-button":IconButton,
      "mu-text-field":TextField
    }
  }
</script>
