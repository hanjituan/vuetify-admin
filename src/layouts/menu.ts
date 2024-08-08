export interface Menu {
	name: string;
	icon: string;
	path: string;
	children?: Menu[];
}


export const Menu: Array<Menu> = [
	{
		name: 'Dashboard',
		icon: 'mdi-view-dashboard',
		path: '/dashboard',
		children: [
			{
				name: '分析页',
				path: '/dashboard/analysis',
				icon: 'mdi-google-analytics',
			},
			{
				name: '监控台',
				path: '/monitor',
				icon: 'mdi-monitor',
			},
			{
				name: '工作台',
				path: '/workbench',
				icon: 'mdi-network-outline',
			},
		],
	}
]
