import {ILoadOptionsFunctions, INodePropertyOptions, INodeType, INodeTypeDescription} from 'n8n-workflow';
import {
	bankDescription, bankOperations,
	companyCategoryDescription, companyCategoryOperations,
	companyDescription, companyOperations
} from "./descriptions";

export class Axonaut implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Axonaut',
		name: 'axonaut',
		icon: 'file:axonaut.svg',
		group: ['transform'],
		version: 1,
		description: 'Use the Axonaut API in your n8n workflows',
		subtitle: '={{$parameter["resource"] + ":" + $parameter["operation"]}}',
		defaults: {
			name: 'Axonaut',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'axonautApi',
				required: true,
			},
		],
		requestDefaults: {
			// TODO: Change for production
			baseURL: 'https://n8n-axonaut.requestcatcher.com/',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				default: 'company',
				noDataExpression: true,
				options: [
					{
						name: 'Bank',
						value: 'bank',
					},
				  {
				    name: 'Company',
				    value: 'company',
				  },
				  {
				    name: 'Company Category',
				    value: 'companyCategory',
				  },
				  {
				    name: 'Company Document',
				    value: 'companyDocument',
				  },
				  {
				    name: 'Contract',
				    value: 'contract',
				  },
				  {
				    name: 'Customer Support / Ticket',
				    value: 'customerSupportTicket',
				  },
				  {
				    name: 'Delivery Note',
				    value: 'deliveryNote',
				  },
				  {
				    name: 'Diverse Operation',
				    value: 'diverseOperation',
				  },
				  {
				    name: 'Employee',
				    value: 'employee',
				  },
				  {
				    name: 'Event',
				    value: 'event',
				  },
				  {
				    name: 'Expense',
				    value: 'expense',
				  },
				  {
				    name: 'Expense Payment',
				    value: 'expensePayment',
				  },
				  {
				    name: 'Invoice Payment',
				    value: 'invoicePayment',
				  },
				  {
				    name: 'Invoice Theme',
				    value: 'invoiceTheme',
				  },
				  {
				    name: 'Language',
				    value: 'language',
				  },
				  {
				    name: 'Opportunity',
				    value: 'opportunity',
				  },
				  {
				    name: 'Payslip',
				    value: 'payslip',
				  },
				  {
				    name: 'Pipe',
				    value: 'pipe',
				  },
				  {
				    name: 'Product & Service',
				    value: 'productService',
				  },
				  {
				    name: 'Project',
				    value: 'project',
				  },
				  {
				    name: 'Projects Nature',
				    value: 'projectsNature',
				  },
				  {
				    name: 'Quotation',
				    value: 'quotation',
				  },
				  {
				    name: 'Sale & Invoice',
				    value: 'saleInvoice',
				  },
				  {
				    name: 'Supplier',
				    value: 'supplier',
				  },
				  {
				    name: 'Supplier Contract',
				    value: 'supplierContract',
				  },
				  {
				    name: 'Supplier Delivery',
				    value: 'supplierDelivery',
				  },
				  {
				    name: 'Task',
				    value: 'task',
				  },
				  {
				    name: 'Tasks Nature',
				    value: 'tasksNature',
				  },
				  {
				    name: 'Tax Rate',
				    value: 'taxRate',
				  },
				  {
				    name: 'Time Tracking',
				    value: 'timeTracking',
				  },
				  {
				    name: 'Workforce',
				    value: 'workforce',
				  }
				]
			},

			// Import custom resources
			...companyOperations,
			...companyDescription,

			...companyCategoryOperations,
			...companyCategoryDescription,

			...bankOperations,
			...bankDescription,
		],
	};

	methods = {
		loadOptions: {
			async getCategories(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('axonautApi');
				const res = await this.helpers.request({
					headers: {
						'userApiKey': credentials.apiKey,
					},
					url: 'https://axonaut.com/api/v2/company-categories',
					method: 'GET',
				})

				const parsedResponse = JSON.parse(res);
				return parsedResponse.map((category: any) => ({
					name: category.name,
					value: category.name,
				}))
			}
		}
	}
}
