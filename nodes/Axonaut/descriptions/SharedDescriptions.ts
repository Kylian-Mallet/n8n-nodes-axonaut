import type { INodeProperties } from 'n8n-workflow';

export const CustomFields: INodeProperties = {
	displayName: 'Custom Fields',
	name: 'custom_fields',
	type: 'fixedCollection',
	default: {},
	placeholder: 'Add Custom Field',
	typeOptions: {
		multipleValues: true,
	},
	options: [
		{
			displayName: 'Custom Field',
			name: 'customFieldValues',
			values: [
				{
					displayName: 'Name',
					name: 'customFieldName',
					type: 'string',
					default: '',
					description: 'Name to set for the metadata key',
					required: true,
				},
				{
					displayName: 'Value',
					name: 'customFieldValue',
					type: 'string',
					default: '',
					description: 'Value to set for the metadata key',
					required: true,
				},
			],
		},
	],
};

export const InternalId: INodeProperties = {
	displayName: 'Internal ID',
	name: 'internal_id',
	type: 'string',
	default: '',
	description: 'Internal ID of the object'
}

export const CompanyID: INodeProperties = {
		displayName: 'Company ID',
		name: 'company_id',
		type: 'string',
		default: '',
}

export const CompanyName: INodeProperties = {
		displayName: 'Company Name',
		name: 'company_name',
		type: 'string',
		default: '',
}
