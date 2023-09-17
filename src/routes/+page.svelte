<script lang="ts">
	import '../app.css';
	import spiderLogo from '$lib/images/spider.jpeg';
	import accentureLogo from '$lib/images/accenturelogo.jpeg';
	import beesLogo from '$lib/images/beeslogo.jpeg';
	import brqLogo from '$lib/images/brqlogo.jpeg';
	import tribancoLogo from '$lib/images/tribancologo.jpeg';
	import itiLogo from '$lib/images/itiitaulogo.jpeg';

	const myTechnologies = [
		'Javascript',
		'Typescript',
		'React',
		'Next',
		'SvelteKit',
		'Azure Devops',
		'AWS',
		'CI/CD',
		'Terraform',
		'Linux',
		'Shell scripting',
		'Playwright',
		'Jest',
		'Firebase',
		'Supabase',
		'Pocketbase',
		'Tailwind',
		'SQL',
		'MongoDB',
		'GraphQL',
		'Electron'
	];
</script>

<div class="bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16" style="">
	<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap h-feed">
		<div
			class="flex-1 w-full max-w-screen-md order-first mx-auto xl:mr-0 xl:ml-8 xl:max-w-md"
			style=""
		>
			<div
				class="h-card flex flex-col gap-4 sticky top-24 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs"
			>
				<!-- <a href="https://urara-demo.netlify.app" class="hidden u-url u-uid">Daniel Yoshimatsu</a> -->
				<figure class="relative mx-auto group">
					<img
						class="u-photo rounded-full shadow-xl hover:shadow-2xl transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
						src={spiderLogo}
						alt="Daniel Yoshimatsu"
					/>
					<div
						class="absolute z-20 rounded-full w-8 h-8 md:w-10 md:h-10 bottom-0 right-0 bg-base-100 shadow-xl text-lg md:text-xl text-center py-0.5 md:py-1.5"
					>
						&#x1F47E;
					</div>
				</figure>
				<div class="text-center flex flex-col gap-2">
					<h2 class="text-2xl font-bold mt-0 mb-2 p-name">Daniel Yoshimatsu</h2>
					<p class="opacity-75 p-note">Software Engineer / Frontend Developer</p>
				</div>
			</div>
		</div>
		<div
			class="flex-1 w-full max-w-screen-md xl:order-last mx-auto xl:ml-0 xl:mr-8 xl:max-w-md"
			style=""
		>
			<div
				class="print:grid-cols-6 print:grid print:max-h-32 print:card flex xl:flex-wrap gap-2 overflow-x-auto xl:overflow-x-hidden overflow-y-hidden max-h-24 my-auto xl:max-h-fit max-w-fit xl:max-w-full pl-8 md:px-0 xl:pl-8 xl:pt-8"
			>
				{#each myTechnologies as technology}
					<button
						id={technology}
						class="btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 mt-4 mb-8 print:mb-0 print:mt-0 xl:m-0"
						>{technology}</button
					>
				{/each}
			</div>
		</div>
		<div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0">
			<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
				<div
					class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
				>
					<article
						class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
					>
						<div class="card-body gap-0">
							<div class="flex flex-col gap-2">
								<div class="flex font-semibold gap-1.5" />
								<h2
									itemprop="name headline"
									class="text-primary card-title text-3xl mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
								>
									&#x1F44B; Hello world!
								</h2>
								<h2 class="card-title text-2xl">
									I'm a Software Developer based in &#127463;&#127479; Brazil with about 6 years of
									experience building fast, responsive and scalable web applications.
								</h2>
							</div>
						</div>
					</article>
				</div>
			</main>
			<div class="mt-5" />
			<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
				<div
					class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
				>
					<article
						class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
					>
						<div class="card-body gap-0">
							<div class="flex flex-col gap-2">
								<div class="flex font-semibold gap-1.5" />
								<h2
									class="mb-10 text-primary card-title text-3xl mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
								>
									Previous experiences:
								</h2>
								<div class="flex flex-row gap-2">
									<img
										class="u-photo rounded shadow-xl hover:shadow-2xl transition-shadow z-10 w-10 h-10 md:w-16 md:h-16"
										alt="BEES"
										src={beesLogo}
									/>
									<h2 class="card-title md:text-2xl">
										<a
											href="https://mybeesapp.com/"
											class="link bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
											>BEES</a
										>From: Aug, 2022<span class="mr-1">·</span>Up to today
									</h2>
								</div>
								<ul class="ml-8 list-disc card-title block">
									<li>
										Responsible for expanding existing web products and features to new
										countries/partners
									</li>
									<li>
										Responsible for leveraging technical knowledge using some methods like
										Mentoring, Onboarding Programs, Documentation, Knowledge Repositories and Pair
										Programming
									</li>
									<li>Direct technical/career leader of expansion web developers</li>
									<li>Leading automation initiatives</li>
								</ul>
							</div>
						</div>
					</article>
				</div>
			</main>
			<div class="mt-5" />
			<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
				<div
					class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
				>
					<article
						class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
					>
						<div class="card-body gap-0">
							<div class="flex flex-col gap-2">
								<div class="flex font-semibold gap-1.5" />
								<div class="flex flex-row gap-2">
									<img
										class="u-photo rounded shadow-xl hover:shadow-2xl transition-shadow z-10 w-10 h-10 md:w-16 md:h-16"
										alt="BRQ"
										src={brqLogo}
									/>
									<h2 class="card-title md:text-2xl">
										<a
											href="https://www.brq.com/en/"
											class="link bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
											>BRQ</a
										>From: Jun, 2022<span class="mr-1">·</span>To: Aug, 2022
									</h2>
								</div>
								<ul class="ml-8 list-disc card-title block">
									<li>
										Developed a environment provider abstraction for ( Next ) Bradesco Bank with
										Next, Node and Typescript
									</li>
									<li>
										Introduced and implemented new testing practices to the platform developers
									</li>
								</ul>
							</div>
						</div>
					</article>
				</div>
			</main>
			<div class="mt-5" />
			<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
				<div
					class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
				>
					<article
						class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
					>
						<div class="card-body gap-0">
							<div class="flex flex-col gap-2">
								<div class="flex font-semibold gap-1.5" />
								<div class="flex flex-row gap-2">
									<img
										class="u-photo rounded shadow-xl hover:shadow-2xl transition-shadow z-10 w-10 h-10 md:w-16 md:h-16"
										alt="Tribanco"
										src={tribancoLogo}
									/>
									<h2 class="card-title md:text-2xl">
										<a
											href="https://www.tribanco.com.br/empresa/"
											class="link bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
											>Tribanco</a
										>From: Aug, 2021<span class="mr-1">·</span>To: May, 2022
									</h2>
								</div>
								<ul class="ml-8 list-disc card-title block">
									<li>Responsible for maintaining legacy hybrid applications in Javascript</li>
									<li>Worked on the new integrations with Open Finance solution</li>
								</ul>
							</div>
						</div>
					</article>
				</div>
			</main>
			<div class="mt-5" />
			<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
				<div
					class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
				>
					<article
						class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
					>
						<div class="card-body gap-0">
							<div class="flex flex-col gap-2">
								<div class="flex font-semibold gap-1.5" />
								<div class="flex flex-row gap-2">
									<img
										class="u-photo rounded shadow-xl hover:shadow-2xl transition-shadow z-10 w-10 h-10 md:w-16 md:h-16"
										alt="iti"
										src={itiLogo}
									/>
									<h2 class="card-title md:text-2xl">
										<a
											href="https://www.iti.itau"
											class="link bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
											>iti</a
										>From: Feb, 2020<span class="mr-1">·</span>To: Jul, 2021
									</h2>
								</div>
								<ul class="ml-8 list-disc card-title block">
									<li>
										Worked on developing a new micro-frontend platform for backoffice web
										applications
									</li>
									<li>
										Wrote unit and automated E2E tests for existing legacy backoffice web
										applications
									</li>
									<li>
										Designed CI/CD solution along with Architects to replace old legacy solutions to
										our new cloud-based infra
									</li>
								</ul>
							</div>
						</div>
					</article>
				</div>
			</main>
			<div class="mt-5" />
			<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
				<div
					class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
				>
					<article
						class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
					>
						<div class="card-body gap-0">
							<div class="flex flex-col gap-2">
								<div class="flex font-semibold gap-1.5" />
								<div class="flex flex-row gap-2">
									<img
										class="u-photo rounded shadow-xl hover:shadow-2xl transition-shadow z-10 w-10 h-10 md:w-16 md:h-16"
										alt="Accenture"
										src={accentureLogo}
									/>
									<h2 class="card-title md:text-2xl">
										<a
											href="https://www.iti.itau"
											class="link bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
											>Accenture</a
										>From: Jun, 2019<span class="mr-1">·</span>To: Feb, 2020
									</h2>
								</div>
								<ul class="ml-8 list-disc card-title text-xl block">
									<li>
										Developed the MVP of a new mobile digital loan hybrid app with Vue and Apache
										Cordova
									</li>
									<li>Migrated database and functions from OracleSQL to MySQL</li>
									<li>
										Worked on adapting Santander banking microsservices to a new Cloud
										Infrastructure
									</li>
								</ul>
							</div>
						</div>
					</article>
				</div>
			</main>
			<div class="bottom-0 md:static md:mt-8" style="">
				<div class="divider mt-0 mb-8 hidden lg:flex" />
				<footer
					id="footer"
					class="footer footer-center text-base-content shadow-inner p-8 md:rounded-box"
				>
					<div class="prose">
						<p>
							<a
								href="https://www.linkedin.com/in/fronteng/"
								rel="noopener noreferrer external"
								target="_blank">Linkedin</a
							>
							<span class="mr-1">·</span>
							<a
								href="https://github.com/yoshimatsudev"
								rel="noopener noreferrer external"
								target="_blank">Github</a
							>
							<span class="mr-1">·</span><a
								href="https://api.whatsapp.com/send?phone=5511981684887"
								rel="noopener noreferrer external"
								target="_blank">Whatsapp</a
							> <br />
							Made by Daniel Yoshimatsu <br />
							Inspired by
							<a
								rel="noopener noreferrer external"
								target="_blank"
								href="https://github.com/importantimport/urara">Urara</a
							>
							and powered by
							<a rel="noopener noreferrer external" target="_blank" href="https://kit.svelte.dev/"
								>SvelteKit</a
							>
						</p>
					</div>
				</footer>
			</div>
		</div>
	</div>
</div>
