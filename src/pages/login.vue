<template>
	<div class="w-full bg border h-full flex justify-center bg-white">
		<!-- <v-img class="mx-auto my-6 border" max-width="500" src="@/assets/login-bg.jpg"></v-img> -->
		<div class="ml-auto w-1/2 pb-8 flex items-center justify-center">
			<v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
				<div class="text-subtitle-1 text-medium-emphasis">Account</div>

				<v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
					variant="outlined" v-model="count">
				</v-text-field>

				<div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
					Password
					<a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
						target="_blank">
						Forgot login password?</a>
				</div>

				<v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" v-model="password"
					:type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
					prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible">
				</v-text-field>

				<v-card class="mb-12" color="surface-variant" variant="tonal">
					<v-card-text class="text-medium-emphasis text-caption">
						Warning: After 3 consecutive failed login attempts, you account will be temporarily
						locked for three hours. If you must login now, you can also click "Forgot login
						password?" below to reset the login password.
					</v-card-text>
				</v-card>

				<v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="submit"
					:disabled="disabledLogin" :loading="loading">
					Log In
				</v-btn>

				<v-card-text class="text-center">
					<a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
						Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
					</a>
				</v-card-text>
			</v-card>
		</div>

		<v-snackbar v-model="snackbar" location="top" color="success">
			login success
			<template v-slot:actions>
				<v-btn color="pink" variant="text" @click="snackbar = false">
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const snackbar = ref(false)
const failedAttemp = ref(0)
const count = ref('')
const password = ref('')

const disabledLogin = computed(() => {
	return !password.value || !count.value
})

const loading = ref(false)


const submit = () => {
	loading.value = true
	setTimeout(() => {
		loading.value = false
		snackbar.value = true
	}, 2000)
}


</script>
<style lang="scss" scoped>
.bg {
	background-image: url(../assets/login-bg2.jpg);
	background-size: cover;
	background-position: left;
	background-repeat: no-repeat;
}
</style>
