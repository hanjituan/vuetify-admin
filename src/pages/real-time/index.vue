<template>
	<div>
		现场问题录入
	</div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue'
export default defineComponent({
	setup(props, { emit, attrs }) {
		const state = reactive({
			isMeetingStart: false,
			activeTab: '1'
		})

		const startMeeting = () => {
			state.isMeetingStart = true
		}
		return {
			state,
			startMeeting
		}
	},
})
</script>
<style lang="less" scoped></style>
