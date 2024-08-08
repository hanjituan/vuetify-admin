<template>
	<div>
		<v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" app>
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
		</v-navigation-drawer>

	</div>
</template>

<script lang="ts" setup>
import { Menu } from './menu';

const drawer = ref(true)
const rail = ref(false)
const emit = defineEmits(['selectItem'])

const selectItem = (item: any) => {
	emit('selectItem', item)
}
const open = ref(['Users'])
</script>
<style lang="less" scoped></style>
