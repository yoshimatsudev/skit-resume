export type ThemeConfig = {
	text?: string;
	name: string;
}[];

export type TranslationBase = {
	previous_experiences: {
		title?: string,
		date_start: string;
		date_end: string;
		company_name: string;
		project_scope: string;
		url: string;
		key_responsabilities: string[];
		technologies: string[];
	}[];
};
