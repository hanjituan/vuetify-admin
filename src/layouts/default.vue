<template>
	<v-layout class="overflow-hidden">
		<!-- app bar -->
		<v-app-bar>
			<template v-slot:title>
				<div class="flex items-center">
					<img class="w-[120px]" :src="logo" alt="">

					<div class="ml-30" @click="switchRail">
						<v-btn class="border" color="primary-color">
							<!-- <icon :class="`${!rail ? 'mdi mdi-arrow-expand-left' : 'mdi mdi-arrow-expand-right'}`">
							</icon> -->
							<!-- <span class="mdi mdi-menu-close"></span>
							<span class="mdi mdi-menu-open"></span> -->
							<span class="mdi mdi-menu"></span>


						</v-btn>
					</div>
				</div>
			</template>


			<div class="mr-4 rounded flex items-center">
				<v-switch class="mr-4" v-model="model" hide-details @change="toggleTheme"
					:color="model ? '#fff' : '#000'" />
				<v-menu>
					<template v-slot:activator="{ props }">
						<!-- <v-btn color="primary" v-bind="props" variant="outlined" class="text-none">
							John Leider
						</v-btn> -->
						<v-list v-bind="props">
							<v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
								subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
						</v-list>
					</template>
					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index" :value="index">
							<v-list-item-title @click="selectItem(item)">{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
		</v-app-bar>

		<!-- left menu -->
		<SideMenu @select-item="selectItem" @switch-rail="switchRail" :rail="rail" />

		<!-- main content -->
		<v-main class="p-0 bg-[#f3f3f3]" :style="getStyle">
			<v-breadcrumbs class="bg-white bread" :items="['Dashboard', '分析页']"></v-breadcrumbs>
			<router-view />
		</v-main>
	</v-layout>


</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { useRouter } from 'vue-router';
import SideMenu from './side-menu.vue';

const router = useRouter()
const theme = useTheme()

const logo = computed(() => {
	if (theme.global.current.value.dark) {
		return 'https://cdn.vuetifyjs.com/docs/images/brand-kit/v-text-logo-dark.svg'
	}
	return 'https://cdn.vuetifyjs.com/docs/images/brand-kit/v-text-logo-light.svg'
})

const model = ref(false)
const rail = ref(false)

const items = ref([
	{ title: '个人中心', path: '' },
	{ title: '个人设置', path: '' },
	{ title: '修改密码', path: '' },
	{ title: '退出登录', path: '/login' },
])

const getStyle = computed(() => {
	return {
		width: rail.value ? 'calc(100% - 64px)' : 'calc(100% - 256px)',
		marginLeft: rail.value ? '64px' : '256px',
		marginTop: '64px',
		paddingBottom: '64px',
		overflow: 'auto',
		height: 'calc(100vh - 65px)'
	}
})

const switchRail = (value: boolean) => {
	rail.value = !rail.value;
}

function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const selectItem = (value: any) => {
	console.log(value);

	if (value.path) {
		router.push(value.path)
	}
}

</script>

<style>
.v-theme--dark {
	.bread {
		background-color: rgb(var(--v-theme-surface)) !important;
		color: #fff !important;
	}
}
</style>
