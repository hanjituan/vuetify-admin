<template>
	<div class="flex gap-4">
		<v-card class="w-1/2" color="green">
			<v-card-text>
				<v-sheet color="rgba(0, 0, 0, .12)">
					<v-sparkline :model-value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24"
						stroke-linecap="round" smooth>
						<template v-slot:label="item">
							${{ item.value }}
						</template>
					</v-sparkline>
				</v-sheet>
			</v-card-text>

			<v-card-text>
				<div class="text-h4 font-weight-thin">
					Sales Last 24h
				</div>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions class="justify-center">
				<v-btn variant="text" block>
					Go to Report
				</v-btn>
			</v-card-actions>
		</v-card>

		<v-card class="w-1/2 p-2" color="blue">
			<v-sparkline :fill="fill" :gradient="selectedGradient" :line-width="lineWidth" :model-value="value1"
				:padding="padding" :smooth="smooth" auto-draw></v-sparkline>

			<v-divider></v-divider>

			<v-row class="ml-4">
				<v-col cols="12" md="6">
					<v-row align="center" class="fill-height">
						<v-item-group v-model="selectedGradient" mandatory>
							<v-row class="pt-6 pl-6">
								<v-item v-for="(gradient, i) in gradients" :key="i" v-slot="{ active, toggle }"
									:value="gradient">
									<v-card :style="getStyle(gradient, active)" class="me-2" height="30" width="30"
										@click="toggle"></v-card>
								</v-item>
							</v-row>
						</v-item-group>
					</v-row>
				</v-col>
			</v-row>

			<v-row class="mt-5 ml-4">
				<v-col cols="2">
					Filled
				</v-col>
				<v-col cols="3">
					<v-switch v-model="fill" class="switch"></v-switch>
				</v-col>
				<v-col cols="3">
					Line width
				</v-col>
				<v-col cols="3">
					<v-slider v-model="lineWidth" max="10" min="0.1" step="0.1" thumb-label></v-slider>
				</v-col>
			</v-row>

			<v-row class="ml-4">
				<v-col cols="2">
					Smooth
				</v-col>
				<v-col cols="3">
					<v-switch v-model="smooth" class="switch"></v-switch>
				</v-col>
				<v-col cols="3">
					Padding
				</v-col>
				<v-col cols="3">
					<v-slider v-model="padding" cols="3" max="25" min="0" thumb-label></v-slider>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>
<script lang="ts" setup>
const value = ref([
	423,
	446,
	675,
	510,
	590,
	610,
	760,
])


const getStyle = (gradient: string | any[], active: any) => {
	return {
		background: gradient.length > 1
			? `linear-gradient(0deg, ${gradient})`
			: gradient[0],
		border: '2px solid',
		borderColor: active ? '#222' : 'white'
	}
}

const gradients = [
	['#222'],
	['#42b3f4'],
	['red', 'orange', 'yellow'],
	['purple', 'violet'],
	['#00c6ff', '#F0F', '#FF0'],
	['#f72047', '#ffd200', '#1feaea'],
]
const fill = ref(true)
const selectedGradient = ref(gradients[4])
const padding = ref(8)
const smooth = ref(true)
const value1 = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0])
const lineWidth = ref(2)
</script>
<style lang="scss" scoped>
.switch {
	position: relative;
	top: -12px;
}
</style>
