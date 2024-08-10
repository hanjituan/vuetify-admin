<template>
	<v-navigation-drawer v-model="drawer" :rail="rail" permanent app>
		<v-list>
			<v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
				subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
		</v-list>

		<v-list v-model:opened="open">
			<div v-for="item in Menu" :key="item.path">
				<!-- 一级菜单 -->
				<template v-if="!item.children">
					<v-list-item :value="item.path" color="primary" rounded="shaped" @click="selectItem(item)">
						<template v-slot:prepend>
							<v-icon :icon="item.icon"></v-icon>
						</template>
						<v-list-item-title v-text="item.name"></v-list-item-title>
					</v-list-item>
				</template>

				<!-- 二级菜单 -->
				<template v-else>
					<v-list-group :value="item.name">
						<template v-slot:activator="{ props }">
							<v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.name">
							</v-list-item>
						</template>

						<v-list-item v-for="(subItem, i) in item.children" :key="i" :prepend-icon="subItem.icon"
							:title="subItem.name" :value="subItem.path" @click="selectItem(subItem)">
						</v-list-item>

						<!-- <v-list-group value="Actions">
								<template v-slot:activator="{ props }">
									<v-list-item v-bind="props" title="Actions"></v-list-item>
								</template>

								<v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon"
									:title="title" :value="title">
								</v-list-item>
							</v-list-group> -->
					</v-list-group>
				</template>
			</div>
		</v-list>

		<div class="border-t absolute bottom-0 w-full flex items-center justify-center p-4 cursor-pointer
			:hovver:bg-gray-500" @click="switchRail">
			<span :class="`${!rail ? 'mdi mdi-arrow-expand-left' : 'mdi mdi-arrow-expand-right'}`"></span>
		</div>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
import { Menu } from './menu';

const rail = ref(false)
const drawer = ref(true)
const open = ref(['Users'])

const emit = defineEmits(['selectItem', 'switchRail'])

const selectItem = (item: any) => {
	emit('selectItem', item)
}

const switchRail = () => {
	rail.value = !rail.value
	emit('switchRail', rail.value)
}

</script>
<style lang="less" scoped></style>
