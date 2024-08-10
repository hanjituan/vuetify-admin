<template>
	<v-layout class="rounded-md border h-100">
		<!-- app bar -->
		<v-app-bar>
			<template v-slot:title>
				<img style="width: 120px;object-fit:contain"
					src="https://cdn.vuetifyjs.com/docs/images/one/logos/vuetify-logo-dark.png" alt="">
			</template>
			<div class="mr-4 rounded flex items-center">
				<v-switch class="mr-4" v-model="model" hide-details @change="toggleTheme"
					:color="model ? '#fff' : '#000'" />
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
		<SideMenu @select-item="selectItem" @switch-rail="switchRail" />

		<!-- main content -->
		<v-main class="p-4" :style="getStyle">
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

const model = ref(false)
const rail = ref(false)

const items = ref([
	{ title: '个人中心' },
	{ title: '个人设置' },
	{ title: '修改密码' },
	{ title: '退出登录' },
])

const getStyle = computed(() => {
	return {
		width: rail.value ? 'calc(100% - 64px)' : 'calc(100% - 256px)',
		marginLeft: rail.value ? '64px' : '256px',
		marginTop: '64px',
	}
})

const switchRail = (value: boolean) => {
	rail.value = value;
}

function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const selectItem = (value: any) => {
	if (value.path) {
		router.push(value.path)
	}
}

</script>
