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
							</template>
		<template v-slot:prepend>
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

			<v-list density="compact" nav>
				<v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
				<v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
				<v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main class="d-flex align-center justify-center" style="min-height: 300px;">
			<div class="text-center pa-4">
				<v-dialog v-model="dialog" max-width="400" persistent>
					<template v-slot:activator="{ props: activatorProps }">
						<v-btn v-bind="activatorProps">
							Open Dialog
						</v-btn>
					</template>

					<v-card prepend-icon="mdi-map-marker"
						text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
						title="Use Google's location service?">
						<template v-slot:actions>
							<v-spacer></v-spacer>

							<v-btn @click="dialog = false">
								Disagree
							</v-btn>

							<v-btn @click="dialog = false">
								Agree
							</v-btn>
						</template>
					</v-card>
				</v-dialog>
			</div>
		</v-main>
	</v-layout>


</template>

<script lang="ts" setup>


const dialog = ref(false)
const drawer = ref(true)
const rail = ref(false)
const items = ref([
	{ title: '个人中心' },
	{ title: '个人设置' },
	{ title: '修改密码' },
	{ title: '退出登录' },
])

const selectItem = (value) => {
	console.log(value);

}

</script>
