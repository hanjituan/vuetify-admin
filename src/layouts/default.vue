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
		<v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" app>
			<v-list v-model:opened="open">
				<!-- <v-list-item prepend-icon="mdi-home" title="首页"></v-list-item> -->

				<v-list-item v-for="(item, i) in menuItems" :key="i" :value="item" color="primary" rounded="shaped"
					@click="selectItem(item)">
					<template v-slot:prepend>
						<v-icon :icon="item.icon"></v-icon>
					</template>

					<v-list-item-title v-text="item.text"></v-list-item-title>
				</v-list-item>

				<v-list-group value="Users">
					<template v-slot:activator="{ props }">
						<v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
					</template>

					<v-list-group value="Admin">
						<template v-slot:activator="{ props }">
							<v-list-item v-bind="props" title="Admin"></v-list-item>
						</template>

						<v-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon" :title="title"
							:value="title">
						</v-list-item>
					</v-list-group>

					<v-list-group value="Actions">
						<template v-slot:activator="{ props }">
							<v-list-item v-bind="props" title="Actions"></v-list-item>
						</template>

						<v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title"
							:value="title">
						</v-list-item>
					</v-list-group>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

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
const router = useRouter()

const drawer = ref(true)
const rail = ref(false)
const items = ref([
	{ title: '个人中心' },
	{ title: '个人设置' },
	{ title: '修改密码' },
	{ title: '退出登录' },
])

const selectItem = (value: any) => {
	console.log(value);
	if (value.url) {
		router.push(value.url)
	}
}

const open = ref(['Users'])

const admins = [
	['Management', 'mdi-account-multiple-outline'],
	['Settings', 'mdi-cog-outline'],
]
const cruds = [
	['Create', 'mdi-plus-outline'],
	['Read', 'mdi-file-outline'],
	['Update', 'mdi-update'],
	['Delete', 'mdi-delete'],
]
const menuItems = [
	{ text: 'dashboard', icon: 'mdi-clock', url: 'real-time' },
	{ text: 'Audience', icon: 'mdi-account', url: 'audience' },
	{ text: 'Conversions', icon: 'mdi-flag', url: 'conversions' },
]
</script>
