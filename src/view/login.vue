<template>
	logo
	<form id='loginForm'>
		<input type="text" placeholder="请输入手机号" />
		<input type="password" placeholder="请输入密码" />
		<a v-link="{ path: '/index' }">忘记密码</a>
		<input type="button" @click='goIndex' value="登录" />
		<input type="button" @click='add' value="注册" />
		第三方登录HRER
	</form>
</template>

<script>
	var a = require("../test");


	//var router = require("../router");
	module.exports = {
		methods:{
			goIndex:function(){
				//vue-router 跳转路由方式？
				router.go('index');
				//window.location.href="#!/index"
			},
			add:function(){
				a.add();
				console.log(a.get());
			}
		}
	}
</script>

<style scoped>
	input{
		display: block;
	}
</style>