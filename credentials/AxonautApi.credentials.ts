import {IAuthenticateGeneric, Icon, ICredentialType, INodeProperties} from 'n8n-workflow';

export class AxonautApi implements ICredentialType {
	name = 'axonautApi';
	displayName = 'Axonaut API';
	documentationUrl = 'https://axonaut.com/api/v2/doc';
	icon = 'file:axonaut.svg' as Icon;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				userApiKey: '={{$credentials.apiKey}}'
			}
		},
	};
}
