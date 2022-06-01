<script setup>
	import {RouterLink} from "vue-router"
</script>

<template>
	<Teleport to="body">
		<CNavbar expand="lg" color-scheme="light" class="bg-light">
			<CContainer fluid>

				<!-- <CNavbarToggler aria-label="Toggle navigation" @click="visible = !visible"/> -->
				<CCollapse class="navbar-collapse">
					<CNavbarNav>
						<router-link to="/">
							<CNavbarBrand>
								<img src="https://dash.tycoon.community/wiki/images/e/ea/Logo.gif" alt="" width="35" height="35" class="d-inline-block align-top"/> Tycoon Gaming
							</CNavbarBrand>
						</router-link>
						<CNavItem>
							<CNavLink active>
								<router-link to="/locations">Locations</router-link>
							</CNavLink>
						</CNavItem>
						<CNavItem>
							<CNavLink ><router-link to="/items">Items</router-link></CNavLink>
						</CNavItem>
					</CNavbarNav>
				</CCollapse>
			</CContainer>
		</CNavbar>
		<CAlert dismissible  color="warning">
			This App is a reconstitution of 
			<a href="http://dash.tycoon.community/" target="_blank">Tycoon Gaming Wiki</a>
			(
			<a href="https://servers.fivem.net/servers/detail/2epova" target="_blank">Transport Tycoon</a> on 
			<a href="https://fivem.net/" target="_blank">FiveM</a>)
		</CAlert>
		<router-view/>
	</Teleport>
</template>

<script>
	export default {
		created(){
			const node = document.querySelector("#app")
			node.remove()
		}
	}
</script>

<style>
@import "./assets/coreui/coreui.min.css";
@import './assets/bootstrap/bootstrap.min.css';
</style>
