<template>
	<v-layout class="rounded-md border h-100">
		<!-- app bar -->
		<v-app-bar>
			<template v-slot:title>
				<img style="width: 120px;object-fit:contain"
					src="https://cdn.vuetifyjs.com/docs/images/one/logos/vuetify-logo-dark.png" alt="">
			</template>
			<div class="mr-2 rounded">
				<v-menu>
					<template v-slot:activator="{ props }">
						<v-btn color="primary" v-bind="props" variant="outlined" class="text-none">
							John Leider
						</v-btn>
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
		<SideMenu @select-item="selectItem" />

		<!-- main content -->
		<v-main class="flex align-center justify-center">
			<div class="text-center p-4">
				<router-view />
			</div>
		</v-main>
	</v-layout>


</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SideMenu from './side-menu.vue';
const router = useRouter()

const items = ref([
	{ title: '个人中心' },
	{ title: '个人设置' },
	{ title: '修改密码' },
	{ title: '退出登录' },
])

const selectItem = (value: any) => {
	console.log(value);
	if (value.path) {
		router.push(value.path)
	}
}

</script>
