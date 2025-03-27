import { INodeProperties } from 'n8n-workflow';
import { CompanyID, CompanyName, CustomFields, InternalId } from './SharedDescriptions';

export const companyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'create',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['company'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new company',
				action: 'Create a company',
				routing: {
					request: {
						method: 'POST',
						url: '/companies',
						json: true,
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a specific company by ID',
				action: 'Delete a company',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/companies/{{$parameter["company_id"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a specific company by ID',
				action: 'Get a company',
				routing: {
					request: {
						method: 'GET',
						url: '=/companies/{{$parameter["company_id"]}}',
					},
				},
			},
			{
				name: 'List All',
				value: 'list',
				description: 'Retrieve a list of companies',
				action: 'List companies',
				routing: {
					request: {
						method: 'GET',
						url: '/companies',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a specific company by ID',
				action: 'Update a company',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/companies/{{$parameter["company_id"]}}',
					},
				},
			},
		],
	},
];

// GET /companies
const getCompaniesOptions: INodeProperties[] = [
	{
		displayName: 'Pagination',
		description: 'Access data from a specific page',
		name: 'page',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['company'],
			},
		},
		routing: {
			request: {
				headers: {
					page: '={{$value}}',
				},
			},
		},
	},

	{
		displayName: 'Search',
		description: 'Search query to filter companies',
		name: 'search',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['company'],
			},
		},
		routing: {
			request: {
				qs: {
					search: '={{$value}}',
				},
			},
		},
	},

	{
		displayName: 'Additional Filters',
		description: 'Additional filters to apply to the list of companies',
		name: 'additional_filters',
		type: 'collection',
		default: {},
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['company'],
			},
		},
		options: [
			{
				displayName: 'Company Type',
				name: 'type',
				type: 'options',
				default: 'all',
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Prospect',
						value: 'prospect',
					},
					{
						name: 'Supplier',
						value: 'supplier',
					},
					{
						name: 'All',
						value: 'all',
					},
				],
				routing: {
					request: {
						qs: {
							type: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'SIRET',
				name: 'siret',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							siret: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'City',
				name: 'address_city',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							address_city: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Zip Code',
				name: 'address_zipcode',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							address_zipcode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Is Prospect',
				name: 'is_prospect',
				type: 'boolean',
				default: true,
				routing: {
					request: {
						qs: {
							is_prospect: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Is Customer',
				name: 'is_customer',
				type: 'boolean',
				default: true,
				routing: {
					request: {
						qs: {
							is_customer: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Is Supplier',
				name: 'is_supplier',
				type: 'boolean',
				default: false,
				routing: {
					request: {
						qs: {
							is_supplier: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sort By',
				description: 'The field to sort the companies by',
				name: 'sort',
				type: 'options',
				default: 'id',
				options: [
					{
						name: 'ID',
						value: 'id',
					},
					{
						name: 'Name',
						value: 'name',
					},
					{
						name: 'City',
						value: 'address_city',
					},
				],
				routing: {
					request: {
						qs: {
							sort: '={{$value}}',
						},
					},
				},
			},
			{
				...InternalId,
				routing: {
					request: {
						qs: {
							internal_id: '={{$value}}',
						},
					},
				},
			},
		],
	},
];

// POST /companies - Create a Company
// PATCH /companies/{companyId} - Update a Company
const postPatchCompanyOptions: INodeProperties[] = [
	{
		displayName: 'Payload Mode',
		description: 'How you want to create the company',
		name: 'payload_mode',
		type: 'options',
		default: 'form',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['company'],
			},
		},

		options: [
			{
				name: 'Fields',
				value: 'form',
				description: 'Define the company using n8n fields',
			},
			{
				name: 'JSON',
				value: 'json',
				description: 'Define the company using a JSON object',
			},
		],
	},

	{
		...CompanyName,
		required: false,
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['company'],
				payload_mode: ['form'],
			},
		},

		routing: {
			request: {
				body: {
					name: '={{$value}}',
				},
			},
		},
	},

	{
		...CompanyName,
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
				payload_mode: ['form'],
			},
		},

		routing: {
			request: {
				body: {
					name: '={{$value}}',
				},
			},
		},
	},

	{
		displayName: 'Is Prospect',
		name: 'is_prospect',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
				payload_mode: ['form'],
			},
		},

		routing: {
			request: {
				body: {
					is_prospect: '={{$value}}',
				},
			},
		},
	},

	{
		displayName: 'Is Customer',
		name: 'is_customer',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
				payload_mode: ['form'],
			},
		},

		routing: {
			request: {
				body: {
					is_customer: '={{$value}}',
				},
			},
		},
	},

	{
		displayName: 'Is B2C',
		name: 'isB2C',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
				payload_mode: ['form'],
			},
		},

		routing: {
			request: {
				body: {
					isB2C: '={{$value}}',
				},
			},
		},
	},

	{
		displayName: 'Employees',
		name: 'employees',
		type: 'fixedCollection',
		placeholder: 'Add Employee',
		default: {},
		typeOptions: {
			multipleValues: true,
		},

		options: [
			{
				displayName: 'Employee',
				name: 'employee',
				values: [
					{
						displayName: 'Gender',
						name: 'gender',
						type: 'options',
						default: 0,
						options: [
							{
								name: 'Male',
								value: 0,
							},
							{
								name: 'Female',
								value: 1,
							},
						],
					},
					{
						displayName: 'First Name',
						name: 'firstname',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Last Name',
						name: 'lastname',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Email',
						placeholder: 'email@example.com',
						name: 'email',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Phone Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Cellphone Number',
						name: 'cellphoneNumber',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Job',
						name: 'job',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Is Billing Contact',
						name: 'is_billing_contact',
						type: 'boolean',
						default: false,
					},

					{
						...CustomFields,
					},
				],
			},
		],

		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
				isB2C: [true],
			},
		},

		routing: {
			request: {
				body: {
					employees:
						'={{ $value?.employee?.map(employee => ({ gender: employee.gender ?? 0, firstname: employee.firstname ?? "", lastname: employee.lastname ?? "", email: employee.email ?? "", phone_number: employee.phoneNumber ?? "", cellphone_number: employee.cellphoneNumber ?? "", job: employee.job ?? "", is_billing_contact: employee.is_billing_contact ?? false, custom_fields: employee.customFieldValues?.reduce((acc, { customFieldName, customFieldValue }) => { acc[customFieldName] = customFieldValue ?? ""; return acc; }, {}) ?? {} })) ?? [] }}',
				},
			},
		},
	},

	{
		displayName: 'Other Fields',
		name: 'other_fields',
		placeholder: 'Add Field',
		type: 'collection',
		default: {},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Add Address',
				typeOptions: {
					multipleValues: false,
				},
				options: [
					{
						displayName: 'Address',
						name: 'addressValue',
						values: [
							{
								displayName: 'Contact Name',
								name: 'address_contact_name',
								type: 'string',
								default: '',
								routing: {
									request: {
										body: {
											address_contact_name: '={{$value}}',
										},
									},
								},
							},
							{
								displayName: 'Street',
								name: 'address_street',
								type: 'string',
								default: '',
								routing: {
									request: {
										body: {
											address_street: '={{$value}}',
										},
									},
								},
							},
							{
								displayName: 'Zip Code',
								name: 'address_zip_code',
								type: 'string',
								default: '',
								routing: {
									request: {
										body: {
											address_zip_code: '={{$value}}',
										},
									},
								},
							},
							{
								displayName: 'City',
								name: 'address_city',
								type: 'string',
								default: '',
								routing: {
									request: {
										body: {
											address_city: '={{$value}}',
										},
									},
								},
							},
							{
								displayName: 'Country',
								name: 'address_country',
								type: 'string',
								default: '',
								routing: {
									request: {
										body: {
											address_country: '={{$value}}',
										},
									},
								},
							},
						],
					},
				],
			},

			{
				displayName: 'Currency',
				description:
					'Currency must be a 3 letters code : <a href="https://fr.iban.com/currency-codes">(ISO 4217)</a>',
				name: 'currency',
				type: 'string',
				default: 'EUR',
				routing: {
					request: {
						body: {
							currency: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Language',
				description:
					'Language must be a 2 letters code : <a href="https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1">(ISO 639-1)</a>',
				name: 'language',
				type: 'string',
				default: 'fr',
				routing: {
					request: {
						body: {
							language: '{{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Thirdparty Code',
				name: 'thirdparty_code',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							thirdparty_code: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Intracommunity Number',
				name: 'intracommunity_number',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							intracommunity_number: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'IBAN',
				name: 'iban',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							iban: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'BIC',
				name: 'bic',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							bic: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'SIRET',
				name: 'siret',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							siret: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Comments',
				name: 'comments',
				type: 'string',
				default: 'string',
				routing: {
					request: {
						body: {
							comments: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Categories',
				name: 'categories',
				type: 'multiOptions',
				default: [],
				options: [],
				routing: {
					request: {
						body: {
							categories: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Business Manager',
				name: 'business_manager',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							business_manager: '={{$value}}',
						},
					},
				},
			},

			{
				...InternalId,
				routing: {
					request: {
						body: {
							internal_id: '={{$value}}',
						},
					},
				},
			},

			{
				...CustomFields,
				routing: {
					request: {
						body: {
							custom_fields:
								'={{ $value.customFieldValues.reduce((acc, { customFieldName, customFieldValue }) => { acc[customFieldName] = customFieldValue; return acc; }, {}) }}',
						},
					},
				},
			},
		],

		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['company'],
				payload_mode: ['form'],
			},
		},
	},

	// eslint-disable-next-line n8n-nodes-base/node-param-default-missing
	{
		displayName: 'JSON Payload',
		name: 'json_payload',
		type: 'json',
		required: true,
		default:
			'{\n' +
			'  "name": "foo",\n' +
			'  "address_contact_name": "Claire Rousseau",\n' +
			'  "address_street": "5 rue de la gare",\n' +
			'  "address_zip_code": "31500",\n' +
			'  "address_city": "Toulouse",\n' +
			'  "address_country": "France",\n' +
			'  "is_prospect": true,\n' +
			'  "is_customer": true,\n' +
			'  "isB2C": true,\n' +
			'  "employees": [\n' +
			'    {\n' +
			'      "firstname": "Claire",\n' +
			'      "lastname": "Rousseau",\n' +
			'      "email": "claire@axonaut.com",\n' +
			'      "phoneNumber": "0102030405",\n' +
			'      "cellphoneNumber": "0605040302",\n' +
			'      "job": "CSM",\n' +
			'      "is_billing_contact": true,\n' +
			'      "custom_fields": {\n' +
			'        "myCustomField": 1\n' +
			'      }\n' +
			'    }\n' +
			'  ],\n' +
			'  "currency": "EUR",\n' +
			'  "language": "fr",\n' +
			'  "thirdparty_code": "411000",\n' +
			'  "intracommunity_number": "FR1X123456789",\n' +
			'  "iban": "FR1420041010050500013M02606",\n' +
			'  "bic": "AGRIFRPP",\n' +
			'  "siret": "1234567891012",\n' +
			'  "comments": "string",\n' +
			'  "custom_fields": {\n' +
			'    "myCustomField": 1\n' +
			'  },\n' +
			'  "categories": [\n' +
			'    "B2B"\n' +
			'  ],\n' +
			'  "internal_id": "A254-5851-486H-HEA5",\n' +
			'  "business_manager": "robert@mycompany.com"\n' +
			'}',

		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['company'],
				payload_mode: ['json'],
			},
		},

		routing: {
			request: {
				body: '={{JSON.parse($value)}}',
			},
		},
	},
];

export const companyDescription: INodeProperties[] = [
	{
		...CompanyID,
		required: true,
		displayOptions: {
			show: {
				operation: ['get', 'update', 'delete'],
				resource: ['company'],
			},
		},
	},

	...getCompaniesOptions,
	...postPatchCompanyOptions,
];
