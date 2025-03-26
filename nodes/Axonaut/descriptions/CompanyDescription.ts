import { INodeProperties } from 'n8n-workflow';

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
						url: '/companies'
					}
				}
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a specific company by ID',
				action: 'Delete a company',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/companies/{{$parameter["companyId"]}}'
					}
				}
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a specific company by ID',
				action: 'Get a company',
				routing: {
					request: {
						method: 'GET',
						url: '=/companies/{{$parameter["companyId"]}}'
					}
				}
			},
			{
				name: 'List All',
				value: 'list',
				description: 'Retrieve a list of companies',
				action: 'List companies',
				routing: {
					request: {
						method: "GET",
						url: '/companies'
					}
				}
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a specific company by ID',
				action: 'Update a company',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/companies/{{$parameter["companyId"]}}'
					}
				}
			},
		],
	},
];

export const companyDescription: INodeProperties[] = [
	{
		displayName: 'Company Name',
		name: 'companyName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
			},
		},
	},
	{
		displayName: 'Employees',
		name: 'employees',
		type: 'fixedCollection',
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
								displayName: 'Field Name',
								name: 'customFieldName',
								type: 'string',
								default: '',
								required: true,
							},
							{
								displayName: 'Field Value',
								name: 'customFieldValue',
								type: 'string',
								default: '',
								required: true,
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
			}
		}
	},
	{
		displayName: 'Additional Fields',
		description: 'Create a company using this payload',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add additional fields',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['company'],
			}
		},
		default: {},
		options: [
			{
				displayName: 'Contact Name',
				name: 'address_contact_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Address Street',
				name: 'address_street',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Address Zip Code',
				name: 'address_zip_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Address City',
				name: 'address_city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Address Country',
				name: 'address_country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Prospect',
				name: 'is_prospect',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Is Customer',
				name: 'is_customer',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Is B2C',
				name: 'isB2C',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Thirdparty Code',
				name: 'thirdparty_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Intracommunity Number',
				name: 'intracommunity_number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'SIRET',
				name: 'siret',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Comments',
				name: 'comments',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category Names or IDs',
				name: 'categories',
				type: 'multiOptions',
				description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				default: [],
				typeOptions: {
					loadOptionsMethod: 'getCategories',
				},
			},
			{
				displayName: 'Internal ID',
				name: 'internal_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Business Manager',
				name: 'business_manager',
				type: 'string',
				default: '',
			},
			{
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
						displayName: 'Field Name',
						name: 'customFieldName',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Field Value',
						name: 'customFieldValue',
						type: 'string',
						default: '',
						required: true,
					},
				],
			}
		]
	},
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['get', 'update', 'delete'],
				resource: ['company'],
			},
		},
	},
	{
		displayName: 'Search Query',
		description: 'Search query to filter companies',
		name: 'searchQuery',
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
					search: '={{$value}}'
				}
			}
		}
	},
	{
		displayName: 'Sort By',
		description: 'The field to sort the companies by',
		name: 'sortBy',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['company'],
			},
		},
		options: [
			{
				name: 'Unsorted',
				value: '',
			},
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
					sort: '={{$value}}'
				}
			}
		}
	},
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
					page: '={{$value}}'
				}
			}
		}
	},
	{
		displayName: 'Additional Filters',
		description: 'Additional filters to apply to the list of companies',
		name: 'additionalFilters',
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
				displayName: 'Internal ID',
				name: 'internal_id',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							internal_id: '={{$value}}'
						}
					}
				}
			},
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
							type: '={{$value}}'
						}
					}
				}
			},
			{
				displayName: 'SIRET',
				name: 'siret',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							siret: '={{$value}}'
						}
					}
				}
			},
			{
				displayName: 'City',
				name: 'address_city',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							address_city: '={{$value}}'
						}
					}
				}
			},
			{
				displayName: 'Zip Code',
				name: 'address_zipcode',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							address_zipcode: '={{$value}}'
						}
					}
				}
			},
			{
				displayName: 'Is Prospect',
				name: 'is_prospect',
				type: 'options',
				default: 'true',
				options: [
					{
						name: 'True',
						value: 'true',
					},
					{
						name: 'False',
						value: 'false',
					},
				],
				routing: {
					request: {
						qs: {
							is_prospect: '={{$value}}'
						}
					}
				}
			},
			{
				displayName: 'Is Customer',
				name: 'is_customer',
				type: 'options',
				default: 'true',
				options: [
					{
						name: 'True',
						value: 'true',
					},
					{
						name: 'False',
						value: 'false',
					},
				],
			},
			{
				displayName: 'Is Supplier',
				name: 'is_supplier',
				type: 'options',
				default: 'false',
				options: [
					{
						name: 'True',
						value: 'true',
					},
					{
						name: 'False',
						value: 'false',
					},
				],
				routing: {
					request: {
						qs: {
							is_supplier: '={{$value}}'
						}
					}
				}
			},
		]
	}
];
