<script lang="ts">
	import accentureLogo from '$lib/images/accenturelogo.jpeg';
	import beesLogo from '$lib/images/beeslogo.jpeg';
	import brqLogo from '$lib/images/brqlogo.jpeg';
	import tribancoLogo from '$lib/images/tribancologo.jpeg';
	import itiLogo from '$lib/images/itiitaulogo.jpeg';
	import translations from '$lib/i18n/general';

	const iconMap = {
		iti: itiLogo,
		Accenture: accentureLogo,
		BEES: beesLogo,
		Tribanco: tribancoLogo,
		BRQ: brqLogo
	};

	const my_experiences = translations.previous_experiences;
</script>

{#each my_experiences as experience}
	<div class="mt-5 print:mt-0" />
	<main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10">
		<div
			class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5"
		>
			<article
				class="h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10 group"
			>
				<div class="card-body gap-0 print:p-0">
					{#if experience.title}
						<h2
							class="mb-10 text-primary card-title text-3xl mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
						>
							{experience.title}
						</h2>
					{/if}
					<div class="flex flex-col gap-2">
						<div class="flex font-semibold gap-1.5" />
						<div class="flex flex-row gap-2">
							<img
								class="u-photo rounded shadow-xl hover:shadow-2xl transition-shadow z-10 w-10 h-10 md:w-16 md:h-16"
								alt={experience.company_name}
								src={iconMap[experience.company_name]}
							/>
							<h2 class="card-title text-sm sm:text-2xl">
								<a
									href={experience.url}
									target="_blank"
									class="link bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"
									>{experience.company_name}</a
								>from: {experience.date_start}<span class="mr-1">·</span>to: {experience.date_end}
							</h2>
						</div>
						{#if experience.project_scope}
							<span class="card-title text-primary">{experience.project_scope} &#x1F4AF;</span>
						{/if}
						<div class="card-title m-0 text-secondary">My responsabilities:</div>
						<ul class="ml-8 list-disc card-title text-xl block">
							{#each experience.key_responsabilities as key_reponsability}
								<li>{key_reponsability}</li>
							{/each}
						</ul>
						<div class="">
							<span class="card-title m-0 text-secondary">Technologies used:</span>
							{#each experience.technologies as technology}
								{#if technology}
									<span class="p-3 badge-md badge m-1 badge-info badge-outline">{technology}</span>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			</article>
		</div>
	</main>
{/each}
