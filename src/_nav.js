const nav = [
	{
		name: 'Customers',
		children: [
			{
				name: 'Customer list',
				to: '/'
			},{
				name: 'Create customer',
				to: '/customers/create'
			}
		]
	},{
		name: 'Bills',
		children: [
			{
				name: 'Bill list',
				to: '/bills'
			},{
				name: 'Create customer',
        to: '/bills/create'
			}
		]
	},
	
];


export default nav;