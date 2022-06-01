<template>
	<div class="markdown" v-html="markdown"/>
	<CButton color="dark" @click="tableVisibility = !tableVisibility">Toggle vehicles list</CButton>
	<div class="markdown" v-show="tableVisibility" v-html="table"></div>
	<CFooter>
		<div>
			<CLink href="https://loshido.com">Loshido</CLink>
			<span>&copy; 2022</span>
		</div>
		<div>
			<span>Powered by </span>
			<CLink href="https://vuejs.org/"> VueJS</CLink>
		</div>
	</CFooter>
</template>

<script>
	import markdown from "../assets/trucking.md"
	import table from "../assets/vehicle-table.md"
	export default {
		methods: {
			toMd(x){
				return marked(x)
			}
		},
		data(){
			return {
				markdown,
				table,
				tableVisibility: false
			}
		},
		watch: {
			tableVisibility(a){
				console.log(a)
			}
		}
	}
</script>

<style>
	div.markdown{
		padding: 25px;
		height: auto;
		min-height: 10vh;
		width: 80vw;
		margin: 0 10vw;
	}
	button{
		margin: 0 0 50px 9vw;
	}
	div.markdown table{
		width: 60%;
	}
</style>