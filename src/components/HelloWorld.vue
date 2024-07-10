<template>
	<v-layout class="rounded-md border h-100">
		<v-app-bar>


			<template v-slot:title>
				<img style="width: 120px;object-fit:contain"
					src="https://cdn.vuetifyjs.com/docs/images/one/logos/vuetify-logo-dark.png" alt="">
			</template>
			<div class="pr-2 bg-black p-2 m-2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore assumenda ut a dolores consequatur,
				reiciendis quae
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


</script>
