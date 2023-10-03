import type { TranslationBase } from '$lib/types/general';

export default {
	previous_experiences: [
		{
			title: 'Previous experiences:',
			date_start: 'Aug, 2022',
			date_end: 'Up to today',
			company_name: 'BEES',
			project_scope: 'Expanding BEES B2B and B2C models to more countries and partners!',
			url: 'https://mybeesapp.com/',
			key_responsabilities: [
				'Writing useful documentation through all projects in BEES scope to leverage the developer experience and onboarding phase of newcomers',
				"Conduction of developer weekly, summarizing changes from other teams that affects our product or team",
				'Developing new User Interfaces with plain Javascript and JQuery for User Authentication',
				'Maintaining and optimizing React components to fulfill new business needs',
				'Writing unit and E2E testing',
				'Setting up new countries instances for existing web applications'
			],
			technologies: [
				'Typescript',
				'Javascript',
				'React',
				'Next',
				'Azure Devops',
				'Azure IAM',
				'Terraform',
				'MongoDB',
				'New Relic',
				'JQuery'
			]
		},
		{
			date_start: 'Jun, 2022',
			date_end: 'Aug, 2022',
			company_name: 'BRQ',
			url: 'https://www.brq.com/en/',
			project_scope: 'Leveraging SRE platform to help developers deliver with ease',
			key_responsabilities: [
				'Writing unit tests for existing components to guarantee code quality and better developer experience for maintainers',
				'Introduced TDD practices to other developers',
				'Created along with other developers some project patterns and code standards to improve newcomers experience'
			],
			technologies: [
				'Next',
				'Node',
				'Javascript',
				'Typescript',
				'Azure Devops',
				'Jenkins',
				'Jest',
				'Playwright',
				'CI/CD'
			]
		},
		{
			date_start: 'Aug, 2021',
			date_end: 'May, 2022',
			company_name: 'Tribanco',
			project_scope: 'Integration with Open Finance',
			url: 'https://www.tribanco.com.br/empresa/',
			key_responsabilities: [
				'Fixing bugs on legacy Ionic-like mobile application',
				'Raising requirements for open-finance integrations to existing solutions',
				'Adapting existing standalone React application to consume BFF'
			],
			technologies: ['React', 'Express', 'Java', 'Javascript', 'OAuth', 'Ionic']
		},
		{
			date_start: 'Feb, 2020',
			date_end: 'Jul, 2021',
			company_name: 'iti',
			project_scope: 'Maintaining and developing new platforms for backoffice',
			url: 'https://iti.itau/',
			key_responsabilities: [
				'Developing a new and responsive web appplication that integrates legacy backoffice applications with new React applications on a MFE solution',
				'Writing unit tests on legacy React application',
				'Implementing Design System on existing and new React components with Styled Components',
				'Migrating projects and CI/CD jobs from external client server to Cloud AWS'
			],
			technologies: ['React', 'Splunk', 'CI/CD', 'Azure AD', 'Jest', 'Cypress', 'Typescript']
		},
		{
			date_start: 'Jun, 2019',
			date_end: 'Feb, 2020',
			project_scope: 'Delivering SAAS',
			company_name: 'Accenture',
			url: 'https://www.accenture.com/us-en',
			key_responsabilities: [
				'Developed the MVP of a new mobile digital loan hybrid app with Vue and Apache Cordova',
				'Migrated database and functions from OracleSQL to MySQL',
				'Worked on adapting Santander banking microsservices to a new Cloud Infrastructure'
			],
			technologies: [
				'Vue',
				'React',
				'Ionic',
				'Apache Cordova',
				'Azure Devops',
				'Mobx',
				'PWA',
				'Hybrid App Development'
			]
		}
	]
} satisfies TranslationBase;
