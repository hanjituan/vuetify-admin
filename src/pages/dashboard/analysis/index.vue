<template>
	<div class="p-4 h-full overflow-auto">
		<v-row dense>
			<v-col cols="6" md="3">
				<v-card append-icon="mdi-check" class="mx-auto" prepend-icon="mdi-account"
					subtitle="prepend-icon and append-icon" title="Icons">
					<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="6" md="3">
				<v-card class="mx-auto" subtitle="prepend and append" title="Icons">
					<template v-slot:prepend>
						<v-icon color="primary" icon="mdi-account"></v-icon>
					</template>
					<template v-slot:append>
						<v-icon color="success" icon="mdi-check"></v-icon>
					</template>
					<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="6" md="3">
				<v-card append-avatar="https://cdn.vuetifyjs.com/images/john.jpg" class="mx-auto"
					prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
					subtitle="prepend-avatar and append-avatar" title="Avatars">
					<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="6" md="3">
				<v-card class="mx-auto" subtitle="prepend and append" title="Avatars">
					<template v-slot:prepend>
						<v-avatar color="blue-darken-2">
							<v-icon icon="mdi-alarm"></v-icon>
						</v-avatar>
					</template>
					<template v-slot:append>
						<v-avatar size="24">
							<v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
						</v-avatar>
					</template>
					<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-row align="start" dense>
			<v-col cols="6" md="12">
				<v-card class="mx-auto">
					<template v-slot:prepend>
						<!-- <v-icon color="primary" icon="mdi-account"></v-icon> -->
						<v-tabs class="border" v-model="tab">
							<v-tab value="one">销售额</v-tab>
							<v-tab value="two">访问量</v-tab>
						</v-tabs>
					</template>
					<template v-slot:append>
						<v-icon color="success" icon="mdi-check"></v-icon>
					</template>

					<v-card-text>
						<v-tabs-window v-model="tab">
							<v-tabs-window-item value="one">
								<h1>1111</h1>
								<h1>1111</h1>
								<h1>1111</h1>
								<h1>1111</h1>
								<h1>1111</h1>
								<h1>1111</h1>
							</v-tabs-window-item>

							<v-tabs-window-item value="two">
								Two
							</v-tabs-window-item>

							<v-tabs-window-item value="three">
								Three
							</v-tabs-window-item>
						</v-tabs-window>
					</v-card-text>
					<!-- <v-img class="align-end text-white" height="200"
						src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
						<v-card-title>Top 10 Australian beaches</v-card-title>
					</v-img>

					<v-card-subtitle class="pt-4">
						Number 10
					</v-card-subtitle>

					<v-card-text>
						<div>Whitehaven Beach</div>

						<div>Whitsunday Island, Whitsunday Islands</div>
					</v-card-text>

					<v-card-actions>
						<v-btn color="orange" text="Share"></v-btn>

						<v-btn color="orange" text="Explore"></v-btn>
					</v-card-actions> -->
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts" setup>

const tab = ref(null)

</script>

<style lang="less" scoped></style>
