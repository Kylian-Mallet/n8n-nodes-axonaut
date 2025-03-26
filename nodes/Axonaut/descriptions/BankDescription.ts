import { INodeProperties } from 'n8n-workflow';

export const bankOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'listAccounts',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bank'],
			},
		},
		options: [
			{
				name: 'List Bank Accounts',
				value: 'listAccounts',
				description: 'List all bank accounts',
				action: 'List bank accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/bank-accounts',
					},
				},
			},

			{
				name: 'List Bank Transactions',
				value: 'listTransactions',
				description: 'List all bank transactions',
				action: 'List bank transactions',
				routing: {
					request: {
						method: 'GET',
						url: '/bank-transactions',
					},
				},
			},
		],
	},
];

export const bankDescription: INodeProperties[] = [
	{
		displayName: 'Created Before',
		name: 'created_before',
		type: 'string',
		default: '',
		description: 'Filters transactions with a creation date prior to the given date (format DD/MM/YYYY)',
		displayOptions: {
			show: {
				operation: ['listTransactions'],
				resource: ['bank'],
			},
		},
	},
	{
		displayName: 'Created After',
		name: 'created_after',
		type: 'string',
		default: '',
		description: 'Filters transactions with a creation date after the given date (format DD/MM/YYYY)',
		displayOptions: {
			show: {
				operation: ['listTransactions'],
				resource: ['bank'],
			},
		},
	},
	{
		displayName: 'Operation Date Before',
		name: 'operation_date_before',
		type: 'string',
		default: '',
		description: 'Filters transactions with an operation date prior to the given date (format DD/MM/YYYY)',
		displayOptions: {
			show: {
				operation: ['listTransactions'],
				resource: ['bank'],
			},
		},
	},
	{
		displayName: 'Operation Date After',
		name: 'operation_date_after',
		type: 'string',
		default: '',
		description: 'Filters transactions with an operation date after the given date (format DD/MM/YYYY)',
		displayOptions: {
			show: {
				operation: ['listTransactions'],
				resource: ['bank'],
			},
		},
	},
	{
		displayName: 'Processed Before',
		name: 'processed_before',
		type: 'string',
		default: '',
		description: 'Filters transactions with a processed date before the given date (format DD/MM/YYYY)',
		displayOptions: {
			show: {
				operation: ['listTransactions'],
				resource: ['bank'],
			},
		},
	},
	{
		displayName: 'Processed After',
		name: 'processed_after',
		type: 'string',
		default: '',
		description: 'Filters transactions with a processed date after the given date (format DD/MM/YYYY)',
		displayOptions: {
			show: {
				operation: ['listTransactions'],
				resource: ['bank'],
			},
		},
	},
];
