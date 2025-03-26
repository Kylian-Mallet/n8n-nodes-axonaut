import { INodeProperties } from "n8n-workflow";

export const companyCategoryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'list',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['companyCategory'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'List a company categories',
				action: 'List categories',
				routing: {
					request: {
						method: 'GET',
						url: '/company-categories'
					}
				}
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new company category',
				action: 'Create a category',
				routing: {
					request: {
						method: 'POST',
						url: '/company-categories'
					}
				}
			},
		]
	}
];

export const companyCategoryDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		description: 'Name of the company category to create',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['companyCategory'],
			},
		},
		default: '',
		routing: {
			request: {
				json: true,
				body: {
					name: '={{$json["name"]}}'
				}
			}
		}
	}
];
