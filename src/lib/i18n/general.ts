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
				'Responsible for expanding existing web products and features to new countries/partners',
				'Responsible for leveraging technical knowledge using some methods like Mentoring, Onboarding Programs, Documentation, Knowledge Repositories and Pair Programming',
				'Direct technical/career leader of expansion web developers',
				'Leading automation initiatives'
			],
			technologies: [
				'Typescript',
				'Javascript',
				'React',
				'Next',
				'Azure Devops',
				'Azure AD/IAM',
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
				'Developed a environment provider abstraction for ( Next ) Bradesco Bank with Next, Node and Typescript',
				'Introduced and implemented new testing practices to the platform developers'
			],
			technologies: ['Next', 'Node', 'Javascript', 'Typescript', 'Azure Devops', 'Jenkins', 'Jest', 'Playwright', 'CI/CD']
		},
		{
			date_start: 'Aug, 2021',
			date_end: 'May, 2022',
			company_name: 'Tribanco',
      project_scope: 'Integration with Open Finance',
			url: 'https://www.tribanco.com.br/empresa/',
			key_responsabilities: [
				'Responsible for maintaining legacy hybrid applications in Javascript',
				'Worked on the new integrations with Open Finance solution'
			],
			technologies: ['React', 'Express', 'Java', 'Javascript', 'OAuth']
		},
		{
			date_start: 'Feb, 2020',
			date_end: 'Jul, 2021',
			company_name: 'iti',
      project_scope: 'Maintaining and developing new platforms for backoffice',
			url: 'https://iti.itau/',
			key_responsabilities: [
				'Worked on developing a new micro-frontend platform for backoffice web applications',
				'Wrote unit and automated E2E tests for existing legacy backoffice web applications',
				'Designed CI/CD solution along with Architects to replace old legacy solutions to our new cloud-based infra'
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
			technologies: ['Vue', 'React', 'Ionic', 'Apache Cordova', 'Azure Devops', 'Mobx', 'PWA', 'Hybrid App Development']
		}
	]
} satisfies TranslationBase;
