<template>
	<v-layout class="rounded rounded-md border h-100">
		<v-app-bar title="vuetify admin">
			<div class="pr-2">我是内容</div>
		</v-app-bar>

		<v-navigation-drawer>
			<v-list>
				<v-list-item title="Navigation drawer"></v-list-item>
				<v-list-item title="Navigation drawer"></v-list-item>
				<v-list-item title="Navigation drawer"></v-list-item>
				<v-list-item title="Navigation drawer"></v-list-item>
				<v-list-item title="Navigation drawer"></v-list-item>
				<v-list-item title="Navigation drawer"></v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main class="d-flex align-center justify-center" style="min-height: 300px;">
			Main Content
		</v-main>
	</v-layout>
</template>

<script lang="ts">
//
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

   onMounted(() => {
	   console.log('mounted')
   })
   return {
	   state,
	   startMeeting
	   }
   },
})

</script>
