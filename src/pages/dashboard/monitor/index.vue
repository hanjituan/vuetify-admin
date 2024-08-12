<template>
	<div class="">
		<v-btn class="ma-2" color="primary">
			Accept
			<v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
		</v-btn>

		<v-btn class="ma-2" color="red">
			Decline
			<v-icon icon="mdi-cancel" end></v-icon>
		</v-btn>

		<v-btn class="ma-2">
			<v-icon icon="mdi-minus-circle" start></v-icon>
			Cancel
		</v-btn>
	</div>

	<div>
		<v-btn class="ma-2" color="orange-darken-2">
			<v-icon icon="mdi-arrow-left" start></v-icon>
			Back
		</v-btn>

		<v-btn class="ma-2" color="purple" icon="mdi-wrench"></v-btn>

		<v-btn class="ma-2" color="indigo" icon="mdi-cloud-upload"></v-btn>
	</div>

	<div>
		<v-btn class="ma-2" color="blue-lighten-2" icon="mdi-thumb-up" variant="text"></v-btn>

		<v-btn class="ma-2" color="red-lighten-2" icon="mdi-thumb-down" variant="text"></v-btn>
	</div>

	<v-card>
		<v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
			<v-tab :value="1">Landscape</v-tab>
			<v-tab :value="2">City</v-tab>
			<v-tab :value="3">Abstract</v-tab>
		</v-tabs>

		<v-tabs-window v-model="tab">
			<v-tabs-window-item v-for="n in 3" :key="n" :value="n">
				<v-container fluid>
					<v-row>
						<v-col v-for="i in 6" :key="i" cols="12" md="4">
							<v-img :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
								:src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" height="205"
								cover></v-img>
						</v-col>
					</v-row>
				</v-container>
			</v-tabs-window-item>
		</v-tabs-window>
	</v-card>
</template>
<script lang="ts" setup>
const tab = ref(null)

</script>
<style lang="less" scoped></style>
