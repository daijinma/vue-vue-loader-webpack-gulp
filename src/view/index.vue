<template>
	this is index
	<top-nav></top-nav>
	<button @click='add' >12334</button>
</template>


<script>
	import topNav from '../components/topNav.vue'
	import a from '../test.js'
	export default {
		components :{
			topNav:topNav
		},
		methods:{
			add() {
				a.add()
				console.log(a.get());
			}
		}
	}
</script>