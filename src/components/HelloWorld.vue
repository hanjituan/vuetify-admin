<template>
	<v-layout class="rounded-md border h-100">
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
							<!-- <template v-slot:append>
								<v-icon color="warning"></v-icon>
							</template> -->
							<!-- <template v-slot:prepend>
								<v-icon color="success"></v-icon>
							</template> -->
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

		<v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
			<v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
				<template v-slot:append>
					<v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
				</template>
			</v-list-item>

			<v-divider></v-divider>

			<v-list>
				<v-list-item class="cursor-pointer" v-for="(item, i) in menuItems" :key="i" :value="item"
					color="primary" variant="plain" @click="selectItem(item)">
					<template v-slot:prepend>
						<v-icon :icon="item.icon"></v-icon>
					</template>

					<v-list-item-title v-text="item.text"></v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main class="d-flex align-center justify-center" style="min-height: 300px;">
			<div class="text-center pa-4">
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
const menuItems = [
	{ text: 'Real-Time', icon: 'mdi-clock', url: 'real-time' },
	{ text: 'Audience', icon: 'mdi-account' },
	{ text: 'Conversions', icon: 'mdi-flag' },
]
</script>
