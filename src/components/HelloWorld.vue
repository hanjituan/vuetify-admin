<template>
	<v-layout class="rounded rounded-md border h-100">
		<v-app-bar title="Application bar">
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

export default {

	mounted() {
		var fib = function (n) {
			let prev = 0, next = 1, result = 0;
			for (let i = 0; i <= n; i++) {
				if (i === 0) {
					result = 0
					// return
				}
				if (i === 1 || i === 2) {
					result = 1
					// return
				}
				prev = next;
				next = result;
				result = prev + next;
			}
			console.log(result);

			return result
		};

		fib(2)
	}
}

</script>
