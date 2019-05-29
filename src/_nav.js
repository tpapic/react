const nav = [
	{
		name: 'Customer',
		children: [
			{
				name: 'Customer list',
				to: '/'
			},{
				name: 'Create customer',
				to: '/customers/create'
			},{
				name: 'Create city',
				to: '/customers/create'
			}
		]
	},{
		name: 'City',
		children: [
			{
				name: 'City list',
				to: '/cities'
			},{
				name: 'Create customer',
				to: '/cities/create'
			},{
				name: 'Edit city',
				to: '/cities/edit'
			},

		]
	},
	
];


export default nav;