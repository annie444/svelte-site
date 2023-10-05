<script lang="ts">
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';
	import { disabled } from '$stores';
	import Icon from '@iconify/svelte';
	import { enhance } from '$app/forms';

	let parallax: Parallax;
	let innerWidth: number;
	let innerHeight: number;
	let xxlScreen: boolean;
	let lgScreen: boolean;
	let section = 0;

	let faceSpan: number;
	let introSpan: number;
	let firstSpan: number;
	let firstBgSpan: number;
	let skillsSpan: number;
	let secondSpan: number;
	let secondBgSpan: number;
	let ctaSpan: number;
	let formSpan: number;
	let cSpan: number; // lol
	let padding: number;

	const faceStart = 0;
	let introStart: number;
	let firstStart: number;
	let firstSectionStart: number;
	let skillsStart: number;
	let secondStart: number;
	let secondSectionStart: number;
	let ctaStart: number;
	let formStart: number;
	let cStart: number;

	let numSections: number;

	let mounted: boolean = false;

	$: {
		if (innerWidth && innerHeight) {
			secondSpan = parseFloat((1396636 / innerWidth / innerHeight).toPrecision(2));
			ctaSpan = parseFloat((48 / innerHeight).toPrecision(2));
			formSpan = parseFloat((438 / innerHeight).toPrecision(2));
			cSpan = parseFloat((56 / innerHeight).toPrecision(2));
			padding = parseFloat((16 / innerHeight).toPrecision(2));
		}
		if (innerWidth && innerHeight && innerWidth >= 1536) {
			// 2xl
			firstSpan = parseFloat(
				(2066528 / (innerWidth * innerHeight) + 256 / innerHeight).toPrecision(2)
			);
			firstBgSpan = firstSpan - parseFloat((0.1875 * firstSpan).toPrecision(2));
			faceSpan = parseFloat((innerWidth / 1280).toPrecision(2));
			introSpan = parseFloat((403200 / ((innerWidth - 192) * 0.75) / innerHeight).toPrecision(2));
			skillsSpan = parseFloat((450 / innerHeight / innerHeight).toPrecision(2));
			xxlScreen = true;
			lgScreen = true;
		} else if (innerWidth && innerHeight && innerWidth >= 1280) {
			// xl
			firstSpan = parseFloat(
				(2066528 / (innerWidth * innerHeight) + 256 / innerHeight).toPrecision(2)
			);
			firstBgSpan = firstSpan - parseFloat((0.1875 * firstSpan).toPrecision(2));
			faceSpan = parseFloat((innerWidth / 1024).toPrecision(2));
			introSpan = parseFloat((403200 / ((innerWidth - 192) * 0.75) / innerHeight).toPrecision(2));
			skillsSpan = parseFloat((450 / innerHeight / innerHeight).toPrecision(2));
			xxlScreen = true;
			lgScreen = true;
		} else if (innerWidth && innerHeight && innerWidth >= 1024) {
			// lg
			firstSpan = parseFloat(
				(2033664 / (innerWidth * innerHeight) + 592 / innerHeight).toPrecision(2)
			);
			firstBgSpan = firstSpan - parseFloat((0.1875 * firstSpan).toPrecision(2));
			faceSpan = parseFloat((innerWidth / 768).toPrecision(2));
			introSpan = parseFloat((403200 / (innerWidth * 0.75) / innerHeight).toPrecision(2));
			skillsSpan = parseFloat((450 / innerHeight / innerHeight).toPrecision(2));
			xxlScreen = false;
			lgScreen = true;
		} else if (innerWidth && innerHeight && innerWidth >= 768) {
			// md
			firstSpan = parseFloat(
				(2033664 / (innerWidth * innerHeight) + 592 / innerHeight).toPrecision(2)
			);
			firstBgSpan = firstSpan - parseFloat((0.1875 * firstSpan).toPrecision(2));
			faceSpan = parseFloat((innerWidth / 640).toPrecision(2));
			introSpan = parseFloat((403200 / innerWidth / innerHeight).toPrecision(2));
			skillsSpan = parseFloat(
				((48 / innerHeight + 372448 / innerWidth) / innerHeight).toPrecision(2)
			);
			xxlScreen = false;
			lgScreen = false;
		} else if (innerWidth && innerHeight && innerWidth >= 640) {
			// sm
			firstSpan = parseFloat(
				(2033664 / (innerWidth * innerHeight) + 592 / innerHeight).toPrecision(2)
			);
			firstBgSpan = firstSpan - parseFloat((0.1875 * firstSpan).toPrecision(2));
			faceSpan = parseFloat((innerWidth / 576).toPrecision(2));
			introSpan = parseFloat((403200 / innerWidth / innerHeight).toPrecision(2));
			skillsSpan = parseFloat(
				((48 / innerHeight + 372448 / innerWidth) / innerHeight).toPrecision(2)
			);
			xxlScreen = false;
			lgScreen = false;
		} else if (innerWidth && innerHeight) {
			firstSpan = parseFloat(
				(2033664 / (innerWidth * innerHeight) + 592 / innerHeight).toPrecision(2)
			);
			firstBgSpan = firstSpan - parseFloat((0.1875 * firstSpan).toPrecision(2));
			faceSpan = parseFloat((innerWidth / 544).toPrecision(2));
			introSpan = parseFloat((403200 / innerWidth / innerHeight).toPrecision(2));
			skillsSpan = parseFloat(
				((48 / innerHeight + 372448 / innerWidth) / innerHeight).toPrecision(2)
			);
			xxlScreen = false;
			lgScreen = false;
		}

		introStart = faceStart + faceSpan + padding;
		firstStart = introStart + introSpan + padding;
		firstSectionStart = firstStart + parseFloat((0.03125 * firstSpan).toPrecision(2));
		let skillsPlace = firstStart + firstBgSpan + parseFloat((0.0625 * firstSpan).toPrecision(2));
		skillsStart = skillsPlace - parseFloat((0.25 * firstSpan).toPrecision(2));
		secondStart = skillsPlace + skillsSpan + padding * 2;
		secondSectionStart = secondStart + parseFloat((0.06125 * secondSpan).toPrecision(2));
		let ctaPlace = secondStart + secondSpan;
		ctaStart = ctaPlace - parseFloat((0.25 * secondSpan).toPrecision(2));
		formStart = ctaPlace + ctaSpan;
		cStart = formStart + formSpan;

		numSections = Math.ceil(cStart + cSpan);
		console.table([
			[
				'faceSpan',
				'introSpan',
				'firstSpan',
				'firstBgSpan',
				'skillsSpan',
				'secondSpan',
				'ctaSpan',
				'formSpan',
				'cSpan',
				'padding',
				'faceStart',
				'introStart',
				'firstStart',
				'firstSectionStart',
				'skillsStart',
				'secondStart',
				'secondSectionStart',
				'ctaStart',
				'formStart',
				'cStart',
				'numSections'
			],
			[
				faceSpan,
				introSpan,
				firstSpan,
				firstBgSpan,
				skillsSpan,
				secondSpan,
				ctaSpan,
				formSpan,
				cSpan,
				padding,
				faceStart,
				introStart,
				firstStart,
				firstSectionStart,
				skillsStart,
				secondStart,
				secondSectionStart,
				ctaStart,
				formStart,
				cStart,
				numSections
			]
		]);
		if (numSections && numSections !== Number.NaN) {
			mounted = true;
		}
	}

	type E = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };
	const increaseSection = (n: number | E | undefined) => {
		const inc = n && typeof n === 'number' ? n : 1;
		parallax.scrollTo(section + inc + 1);
		section = section + inc;
	};

	const decreaseSection = (n: number | E | undefined) => {
		const inc = n && typeof n === 'number' ? n : 1;
		parallax.scrollTo(section - inc + 1);
		section = section - inc;
	};

	const goToTop = () => {
		parallax.scrollTo(1);
		section = 0;
	};

	const goToBottom = () => {
		parallax.scrollTo(5);
		section = 4;
	};

	let stickyLayer1 = '';
	let topButton = 'opacity-75';
	let stickyLayer2 = 'opacity-0';
	let stickyLayer3 = 'opacity-0';
	let stickyLayer4 = 'opacity-0';
	let bottomButton = 'opacity-100 pointer-events-auto cursor-pointer';
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if mounted}
	<Parallax sections={numSections} disabled={$disabled} bind:this={parallax}>
		<ParallaxLayer
			offset={introStart}
			rate={0.1}
			span={introSpan}
			class="flex flex-row w-full justify-center items-center"
		>
			<div class="flex flex-row justify-center items-center w-full lg:max-w-[75%]">
				{#if xxlScreen}
					<Icon icon="ic:baseline-less-than" width={300} height={500} color="white" />
				{/if}
				<p class="2xl:max-w-[75%] text-lg">
					Welcome to my personal website! You can call me Annie! I'm a passionate machine learning
					engineer and medical researcher currently based in sunny Los Angeles, CA. My journey in
					the world of engineering started at the young age of six when I first laid hands on an
					Arduino, sparking a lifelong love affair with technology. Those early days laid the
					foundation for what would evolve into a thrilling and dynamic career. While my roots are
					firmly grounded in the fields of medical machine learning and embedded systems, my spirit
					of innovation knows no bounds. Fast forward to today, and you'll find me in the role of a
					Senior Software Engineer at WardrobeDepot. Here, I'm fully immersed in the art of crafting
					efficient and innovative software solutions that propel modern businesses into the future.
					My journey in software engineering has been a rollercoaster of exciting experiences,
					ranging from hacking smart home devices to developing web applications that turbocharge
					productivity. Yet, my passion extends far beyond the lines of code. One of my stronges
					motivations is that of a more equitable world. It's an ambitious goal, but one that I
					wholeheartedly commit to. I view the ascent of modern technology as a double-edged sword.
					While it carries the promise of a brighter future, it also presents potential challenges
					if we are not vigilant. That's why I consistently position myself at the forefront of
					exploration, tirelessly delving into how AI and technology can serve humanity's betterment
					while skillfully avoiding potential pitfalls. Let's embark on a collective journey
					together through the realms of technology, machine learning, and the pursuit of a more
					just and equitable society!
				</p>
				{#if xxlScreen}
					<Icon icon="ic:baseline-greater-than" width={300} height={500} color="white" />
				{/if}
			</div>
		</ParallaxLayer>

		<ParallaxLayer
			offset={skillsStart}
			rate={0.1}
			span={skillsSpan}
			class="flex flex-col w-full justify-center items-center"
		>
			<h1 class="h1 text-white">Skills</h1>
			<div class="flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-4 max-h-[25%]">
				<div class="flex flex-col m-2">
					<h3 class="h3 text-white my-2">Languages</h3>
					<ul class="list flex flex-col flex-wrap">
						<li>C/C++</li>
						<li>Python</li>
						<li>R</li>
						<li>MATLAB</li>
						<li>Shell</li>
						<li>PHP</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>Java</li>
						<li>Rust</li>
						<li>SQL</li>
					</ul>
				</div>
				<div class="flex flex-col m-2">
					<h3 class="h3 text-white my-2">AI/ML Concepts</h3>
					<ul class="list flex flex-col flex-wrap">
						<li>Deep Learning</li>
						<li>[ Convolutional ] Neural Networks</li>
						<li>[ Convolutional ] LSTMs</li>
						<li>Regression Algorithms</li>
						<li>Unsupervised Learning</li>
						<li>Supervised Learning</li>
						<li>GA/GP/Evolutionary Computing</li>
						<li>Image Processing</li>
						<li>Facial Recognition</li>
						<li>Reinforcement Learning</li>
						<li>Large Language Modeling</li>
						<li>Transformer Models</li>
						<li>A/B & Multi-arm Testing</li>
						<li>Distributed Computing</li>
					</ul>
				</div>
				<div class="flex flex-col m-2">
					<h3 class="h3 text-white my-2">CS Concepts</h3>
					<ul class="list flex flex-col flex-wrap">
						<li>Memory Management</li>
						<li>MLOps & DevOps & GitOps</li>
						<li>Graph-QL & gRPC & REST APIs</li>
						<li>IP-SEC & SSL/TLS</li>
						<li>GCS & AWS & Azure</li>
						<li>Complexity Optimization</li>
						<li>Object Oriented Programming</li>
						<li>Functional Programming</li>
						<li>L1 to L7 Networking</li>
						<li>Data Structures</li>
						<li>System Design</li>
						<li>Scalability Optimization</li>
					</ul>
				</div>
				<div class="flex flex-col m-2">
					<h3 class="h3 text-white my-2">Frameworks</h3>
					<ul class="list flex flex-col flex-wrap">
						<li>Tensorflow & PyTorch</li>
						<li>Kubernetes & Docker</li>
						<li>CUDAs + Keras</li>
						<li>NumPy & Pandas</li>
						<li>Svelte</li>
						<li>Vue</li>
						<li>React</li>
						<li>Laravel</li>
						<li>Actix & Axum</li>
						<li>Flask & Django</li>
						<li>Drogon</li>
					</ul>
				</div>
			</div>
		</ParallaxLayer>

		<ParallaxLayer
			offset={ctaStart}
			rate={0.15}
			span={ctaSpan}
			class="flex flex-col w-full justify-center items-center"
		>
			<h1 class="h1">Let's Get In Touch!</h1>
		</ParallaxLayer>

		<ParallaxLayer
			offset={faceStart}
			rate={0.5}
			span={faceSpan}
			class="bg-black w-full flex justify-center items-center"
		>
			<img
				src="/headshot.webp"
				class="headshot"
				alt="Closeup headshot of a smiling blonde woman with a white headband and orange triangular earrings on."
			/>
		</ParallaxLayer>

		<ParallaxLayer
			offset={faceStart}
			rate={2.5}
			span={faceSpan}
			class="flex w-full justify-center items-center"
		>
			<span class="initial initial-a">A</span>
			<span class="initial initial-e">E</span>
		</ParallaxLayer>

		<ParallaxLayer
			offset={firstStart}
			rate={0.5}
			span={firstBgSpan}
			class="bg-white flex w-full justify-center items-start pointer-events-none"
		/>

		<ParallaxLayer
			offset={firstSectionStart}
			rate={1.25}
			span={firstSpan}
			class="flex w-full flex-col justify-stretch items-stretch pointer-events-none"
		>
			<div class="flex flex-col xl:flex-row w-full justify-items-start justify-start items-center">
				<h1 class="h1 lg:m-8 m-4 justify-self-start text-black third-header">Work Experience</h1>
				{#if xxlScreen}
					<span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start" />
				{/if}

				<div class="flex flex-col xl:grid grid-1 w-full justify-center items-center">
					<div class="mx-4 my-3">
						<h2 class="card-header h2 text-black">Senior Software Engineer</h2>
						<section>
							<h3 class="text-black align-middle px-4">
								<span class="h3">Wardrobe Depot</span> - October 2021 to Present
							</h3>
							<ul class="list p-4 text-black">
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Moved stack from Shopify to a customized full-stack web application utilizing a
										micro-services architecture on Kubernetes that easily scaled their customer
										bandwidth by 500% with an overall decrease in operating costs.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Conducted cross cloud cost analysis on AWS EC2 and S3, GCP GKE, and Akamai Suite
										to identify the cheapest architectures for each average monthly user saving over
										$1,200 in cloud costs monthly.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Designed git-triggered CI/CD pipelines with automated docker container
										optimization decreasing the time to production for new features by 3 weeks.
									</span>
								</li>
							</ul>
						</section>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="mx-4 my-3">
						<h2 class="card-header h2 text-black">Computational Analyst</h2>
						<section>
							<h3 class="text-black align-middle px-4">
								<span class="h3">Howard Hughes Medial Institute</span> - June 2022 to February 2023
							</h3>
							<ul class="list p-4 text-black">
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Led and managed multiple projects focused on the integration cutting-edge AI &
										ML technologies into their facial recognition and 2-photon neural microscopy
										analysis pipeline decreasing time to publication by 6 months.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Integrated neural and facial recognition pipelines creating an automated
										workflow increasing the number of experiments processed per day by over 200x.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Developed a novel protocol for quantifying rodent facial expressions providing
										the first ever real-time segmentation of rodent facial features.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black"> Research in review for publication </span>
								</li>
							</ul>
						</section>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="mx-4 my-3">
						<h2 class="card-header h2 text-black">Bioinformatics Engineer</h2>
						<section>
							<h3 class="text-black align-middle px-4">
								<span class="h3">Carver College of Medicine</span> - May 2016 to August 2018
							</h3>
							<ul class="list p-4 text-black">
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Designed multiple data analysis pipelines for histology analysis, confocal
										microscopy, CT/MRI data, and alignment & quantification for genomics,
										transcriptomics, & proteomics shaving an average of 1 year off the data analysis
										timeline.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Designed novel ML models for object recognition throughout microscopy and CT
										imaging with an accuracy of 95%, roughly twice as good as the previous approach.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Integrated all data processing with the university’s computational core,
										increasing data bandwidth by 500x.
									</span>
								</li>
								<li class="li text-black">
									<span class="text-black">&#8226;</span>
									<span class="flex-auto text-black">
										Identified the primary maladaptive immune response in cystic fibrosis lung
										tissue.
									</span>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</div>

			<div class="flex flex-col xl:flex-row w-full justify-items-start justify-start items-center">
				<h1 class="h1 lg:m-8 m-4 text-black third-header">Education</h1>
				{#if xxlScreen}
					<span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start" />
				{/if}

				<div
					class="flex flex-col xl:grid grid-2 max-w-[27%] min-w-[23rem] justify-items-start justify-start items-center"
				>
					<div class="flex flex-col justify-items-start justify-start items-start mx-4 my-3">
						<h2 class="h2 text-black text-left">Hampshire College</h2>
						<h3 class="h3 text-black text-left">Bachelors of the Arts</h3>
						<p class="pt-4 text-black text-left">
							I graduated in May 2022 with major focuses on Pre-Medicine and Computer Science. My
							thesis work looked at the intersections of neuroscience, identiy, and cutting-edge
							machine learning techniques in transcriptomics.
						</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col xl:flex-row w-full justify-items-start justify-start items-center">
				<h1 class="h1 lg:m-8 m-4 text-black third-header">Projects</h1>
				{#if xxlScreen}
					<span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start" />
				{/if}

				<div class="flex flex-col xl:grid grid-3 justify-items-start justify-start items-center">
					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<a
							class="unstyled pointer-events-auto cursor-pointer"
							href="https://github.com/annie444/genetic-sgd"
						>
							<h3 class="h3 text-left">
								Lexicase Selection of Deep Neural Network Weights and Biases
							</h3>
						</a>
						<p class="pt-4 text-black">
							A genetic algorithm for optimizing stochastic gradient decent during the training of
							neural networks using a lexicase selection algorithm as the fitness algorithm in order
							to <em><i>"leap"</i></em> out of a local minimum.
						</p>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<a
							class="unstyled pointer-events-auto cursor-pointer"
							href="/downloads/Bioinformatic_Approaches_to_Aligning_Non-Canonical_Splice-sites_Using_RNA-Seq_Data.pdf"
							download="Bioinformatic_Approaches_to_Aligning_Non-Canonical_Splice-sites_Using_RNA-Seq_Data.pdf"
						>
							<h3 class="h3 text-left">Non-Canonical Alignment and Quantification Techniques</h3>
						</a>
						<p class="pt-4 text-black">
							A review of techniques used to align non-canonical splice sites in next-gen
							transcriptomics data to the reference genome without an undue bias for canonical
							splicing as well as a proposal for a novel RNA-Seq alignment algorithm.
						</p>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<h3 class="h3 text-black text-left">
							<em><i>Poo Wi-Fi</i></em> - Trash based public wireless internet
						</h3>
						<p class="pt-4 text-black">
							Wi-Fi enabled trash can that rewards people for cleaning up litter by providing public
							wifi based on how much litter is disguarded and how correctly it is sorted into their
							respective compartments for recycling and compost. Presented my work at the 2015
							InnovateIowa conference.
						</p>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<a
							class="unstyled pointer-events-auto cursor-pointer"
							href="https://github.com/annie444/SLEAPyFaces"
						>
							<h3 class="h3 text-left">
								<em><i>SLEAPyFaces</i></em> - Combine neural and facial data from across experiments
								in one line of code
							</h3>
						</a>
						<p class="pt-4 text-black">
							A python library for the data extraction, transformation, and loading of videos of
							rodent faces and neural data for feature extraction and staticstical analysis.
						</p>
					</div>

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<a
							class="unstyled pointer-events-auto cursor-pointer"
							href="https://github.com/annie444/instacrawl"
						>
							<h3 class="h3 text-left">
								<em><i>InstaCrawl</i></em> - Instagram post scraper and algorithm performance analytics
							</h3>
						</a>
						<p class="pt-4 text-black">
							A CLI tool written in python for scraping Instagram profiles and running the posts
							through Meta's various ML models from HuggingFace from image segmentation to semantic
							text categorization.
						</p>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<h3 class="h3 text-black text-left">Envision CR Youth: Humans of Cedar Rapids</h3>
						<p class="pt-4 text-black">
							Began a blog group in Cedar Rapids, IA to provide a platform for disenfranchised
							people to begin the discussions that people would usually shy away from. This project
							has been taken on by <a
								class="unstyled cursor-pointer pointer-events-auto"
								href="https://iowabig.org/">IowaBIG</a
							>.
						</p>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<h3 class="h3 text-black text-left">Evolution of Grapes: Vitis Herbarium</h3>
						<p class="pt-4 text-black">
							Partnered with Dr. Julie Kang at the University of Northern Iowa working on the
							evolution of the grape. The purpose of this project is to study the evolution of
							developmental, morphological, and molecular traits of species in the Vitaceae family.
							By studying the evolution of how traits such as leaves and berries evolved will give
							information on how the Vitis species and cultivars acquired their commercially
							successful traits.
						</p>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<h3 class="h3 text-black text-left">ACEs of Eastern Iowa</h3>
						<p class="pt-4 text-black">
							Implemented mindfulness training for elementary youth in under-represented communities
							around Cedar Rapids, IA. Organized town halls with the Cedar Rapids Community School
							District board focused on raising the voices of parents of children in
							under-represented communities.
						</p>
					</div>
				</div>
			</div>
		</ParallaxLayer>

		<ParallaxLayer
			offset={secondStart}
			rate={0.5}
			span={secondSpan}
			class="bg-black flex w-full justify-center items-start pointer-events-none"
		/>

		<ParallaxLayer
			offset={secondSectionStart}
			rate={1.25}
			span={secondSpan}
			class="flex flex-col w-full justify-center items-center pointer-events-none"
		>
			<div class="flex flex-col xl:flex-row w-full justify-items-start justify-start items-center">
				<h1 class="h1 lg:m-8 m-4 text-white third-header">Publications</h1>
				{#if xxlScreen}
					<span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start" />
				{/if}

				<div class="flex flex-col xl:grid grid-4 justify-items-start justify-start items-center">
					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<header class="text-2xl h2 text-white font-bold">
							Transduction of pig small airway epithelial cells and distal lung progenitor cells by
							AAV4
						</header>
						<section class="text-base text-slate-200">
							O. Chen, S. E Mather, C. M Brommel, B. A Hamilton, A. Ehler, R. A Villacreses, R. E
							Girgis, M. Abou Alaiwa, D. A Stoltz, J. Zabner, X. Li
						</section>
						<footer class="text-xl text-slate-200">
							<i>Cells</i> 2021 Apr 25
							<cite
								><a
									class="unstyled cursor-pointer pointer-events-auto"
									href="https://doi.org/10.3390/cells10051014"
									>https://doi.org/10.3390/cells10051014</a
								></cite
							>
						</footer>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-20" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<header class="text-2xl h2 text-white font-bold">
							V-type ATPase Mediates Airway Surface Liquid Acidification in Pig Small Airway
							Epithelial Cells
						</header>
						<section class="text-base text-slate-200">
							X. Li, I. Thornell, R. Villacreses Rada, C. Brommel, L. Lu, S. Mather, A. Ehler, P.
							Karp, M. Welsh, J. Zabner
						</section>
						<footer class="text-xl text-slate-200">
							<i>American Journal of Respiratory Cell and Molecular Biology</i> 2021 Mar 30
							<cite
								><a
									class="unstyled cursor-pointer pointer-events-auto"
									href="https://doi.org/10.1165/rcmb.2020-0349OC"
									>https://doi.org/10.1165/rcmb.2020-0349OC</a
								></cite
							>
						</footer>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col xl:flex-row w-full justify-items-start justify-between items-center"
			>
				<div
					class="flex flex-col xl:flex-row min-w-[60%] justify-items-start justify-start items-center"
				>
					<h1 class="h1 lg:m-8 m-4 text-white third-header">Awards</h1>
					{#if xxlScreen}
						<span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start" />
					{/if}

					<div class="flex flex-row xl:grid grid-4 justify-items-start justify-start items-center">
						<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
							<header class="text-2xl h2 text-white font-bold">Grand Prize</header>
							<section class="text-base text-slate-200">
								Google Hackathon &#64; University of Illinois Urbana-Champagne
							</section>
							<footer class="text-xl text-slate-200">March 2018</footer>
						</div>
						{#if xxlScreen}
							<span class="divider-vertical h-20" />
						{/if}

						<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
							<header class="text-2xl h2 text-white font-bold">Belin Blank Scholar</header>
							<section class="text-base text-slate-200">
								Belin Blank Summer Institute &#64; University of Iowa
							</section>
							<footer class="text-xl text-slate-200">January 2013</footer>
						</div>
					</div>
				</div>

				<div
					class="flex flex-col xl:flex-row min-w-[40%] justify-items-start justify-start items-center"
				>
					<h1 class="h1 lg:m-8 m-4 text-white third-header">Certifications</h1>
					{#if xxlScreen}
						<span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start" />
					{/if}

					<div class="flex flex-row xl:grid grid-5 justify-items-start justify-start items-center">
						<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
							<header class="text-2xl h2 text-white font-bold">
								Walking In Balance With All Our Relations
							</header>
							<section class="text-base text-slate-200">
								Worked with Strong Oak, a representative of the North American Intertribal
								Coalition, on restorative justice techniques. This included training and practice of
								the techniques as well as regular meetings in the mountains of Western Massachusetts
								on Mi'kmuq land.
							</section>
							<footer class="text-xl text-slate-200">Visioning B.E.A.R. - May 2021</footer>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col xl:flex-row w-full justify-items-start justify-start items-center">
				<h1 class="h1 lg:m-8 m-4 text-white third-header">Coursework</h1>
				{#if xxlScreen}
					<span class="divider-vertical w-2 m-0 p-0 h-30 justify-self-start" />
				{/if}

				<div
					class="flex flex-row flex-wrap lg:grid grid-6 justify-items-start justify-start items-center"
				>
					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Endocrinology </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white">
							Bioinformatics & Computational Molecular Biology
						</span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Engineering Computing </span>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Machine Learning </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Research in Artificial Intelligence </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Hormones and Behavior </span>
					</div>

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Organic Chemistry I & II </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Linear & Matrix Algebra </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Multi-Variate Calculus </span>
					</div>
					{#if xxlScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Methods in Microbiology </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Animal Physiology </span>
					</div>
					{#if xxlScreen || lgScreen}
						<span class="divider-vertical h-10" />
					{/if}

					<div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start">
						<span class="text-xl h3 text-white"> Epigenetics </span>
					</div>
				</div>
			</div>
		</ParallaxLayer>

		<ParallaxLayer
			offset={formStart}
			rate={1.25}
			span={formSpan}
			class="flex w-full flex-row items-center justify-center"
		>
			<form
				action="?/send"
				method="POST"
				class="min-w-[50%] h-full max-w-[100%]"
				use:enhance={() => {
					return async ({ result, update }) => {
						if (result.type !== 'success') {
							console.log(result);
						} else {
							update();
						}
					};
				}}
			>
				<label for="name" class="label p-2">
					<span class="text-xl h4 text-white">Name:</span>
					<input
						type="text"
						class="input cursor-pointer pointer-events-auto"
						name="name"
						id="name"
					/>
				</label>
				<label for="email" class="label p-2">
					<span class="text-xl h4 text-white">Email:</span>
					<input
						type="email"
						class="input cursor-pointer pointer-events-auto"
						name="email"
						id="email"
					/>
				</label>
				<label for="subject" class="label p-2">
					<span class="text-xl h4 text-white">Subject:</span>
					<input
						type="text"
						class="input cursor-pointer pointer-events-auto"
						name="subject"
						id="subject"
					/>
				</label>
				<label for="body" class="label p-2">
					<span class="text-xl h4 text-white">Message:</span>
					<textarea class="input cursor-pointer pointer-events-auto h-full" name="body" id="body" />
				</label>
				<input
					type="submit"
					class="p-2 my-2 bg-white text-black h4 cursor-pointer pointer-events-auto hover:opacity-75 transition-all duration-300"
					value="Send"
				/>
			</form>
		</ParallaxLayer>

		<ParallaxLayer
			offset={cStart}
			rate={0.25}
			span={cSpan}
			class="flex flex-col w-full items-center justify-start"
		>
			<span class="h3 text-base p-4 text-slate-300"
				>&#169; Analetta Rae Marie Ehler &#8213; 2023</span
			>
		</ParallaxLayer>

		<StickyLayer
			offset={{ top: 0, bottom: 1.25 }}
			class="flex flex-row transition-all items-start justify-center bg-transparent pointer-events-none {stickyLayer1}"
			onProgress={(p) => {
				if (p > 0.9) {
					stickyLayer1 = 'opacity-0';
				} else if (p <= 0.9) {
					stickyLayer1 = 'opacity-100';
				}
				if (section === 0 && p > 0.8) {
					section = 1.5;
				} else if (section === 1.5 && p < 0.5) {
					section = 0;
				}
				if (p > 0.2) {
					topButton = 'opacity-100 pointer-events-auto cursor-pointer';
				} else {
					topButton = 'opacity-75';
				}
			}}
		>
			<div class="w-full flex bg-transparent flex-row justify-between items-center">
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button type="button" class="button m-1 bg-white p-1 {topButton}" on:click={goToTop}>
						<Icon icon="ph:caret-double-left" color="black" height={32} />
					</button>
					<button type="button" class="button m-1 bg-white p-1 {topButton}" on:click={goToTop}>
						<Icon icon="ph:caret-left" color="black" height={32} />
					</button>
				</div>
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto bg-white p-1"
						on:click={() => increaseSection(1.25)}
					>
						<Icon icon="ph:caret-right" color="black" height={32} />
					</button>
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto bg-white p-1"
						on:click={goToBottom}
					>
						<Icon icon="ph:caret-double-right" color="black" height={32} />
					</button>
				</div>
			</div>
		</StickyLayer>

		<StickyLayer
			offset={{ top: 1.25, bottom: 2.75 }}
			class="flex flex-row transition-all items-start justify-center bg-transparent pointer-events-none {stickyLayer2}"
			onProgress={(p) => {
				if (p > 0.9 || p < 0.1) {
					stickyLayer2 = 'opacity-0';
				} else if (p <= 0.9 && p >= 0.1) {
					stickyLayer2 = 'opacity-100';
				}
				if (section === 1.5 && p > 0.8) {
					section = 3;
				} else if (section === 3 && p < 0.5) {
					section = 1.5;
				}
			}}
		>
			<div class="w-full flex bg-transparent flex-row justify-between items-center">
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button
						type="button"
						class="button pointer-events-auto cursor-pointer m-1 bg-black p-1"
						on:click={goToTop}
					>
						<Icon icon="ph:caret-double-left" color="white" height={32} />
					</button>
					<button
						type="button"
						class="button pointer-events-auto cursor-pointer m-1 bg-black p-1"
						on:click={() => decreaseSection(1.5)}
					>
						<Icon icon="ph:caret-left" color="white" height={32} />
					</button>
				</div>
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto bg-black p-1"
						on:click={() => increaseSection(1.5)}
					>
						<Icon icon="ph:caret-right" color="white" height={32} />
					</button>
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto bg-black p-1"
						on:click={goToBottom}
					>
						<Icon icon="ph:caret-double-right" color="white" height={32} />
					</button>
				</div>
			</div>
		</StickyLayer>

		<StickyLayer
			offset={{ top: 2.75, bottom: 3.75 }}
			class="flex flex-row transition-all items-start justify-center bg-transparent pointer-events-none {stickyLayer3}"
			onProgress={(p) => {
				if (p > 0.9 || p < 0.1) {
					stickyLayer3 = 'opacity-0';
				} else if (p <= 0.9 && p >= 0.1) {
					stickyLayer3 = 'opacity-100';
				}
				if (section === 3 && p > 0.8) {
					section = 4;
				} else if (section === 4 && p < 0.5) {
					section = 3;
				}
			}}
		>
			<div class="w-full flex bg-transparent flex-row justify-between items-center">
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button
						type="button"
						class="button pointer-events-auto cursor-pointer m-1 bg-white p-1"
						on:click={goToTop}
					>
						<Icon icon="ph:caret-double-left" color="black" height={32} />
					</button>
					<button
						type="button"
						class="button pointer-events-auto cursor-pointer m-1 bg-white p-1"
						on:click={() => decreaseSection(1.5)}
					>
						<Icon icon="ph:caret-left" color="black" height={32} />
					</button>
				</div>
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto bg-white p-1"
						on:click={() => increaseSection(1)}
					>
						<Icon icon="ph:caret-right" color="black" height={32} />
					</button>
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto bg-white p-1"
						on:click={goToBottom}
					>
						<Icon icon="ph:caret-double-right" color="black" height={32} />
					</button>
				</div>
			</div>
		</StickyLayer>

		<StickyLayer
			offset={{ top: 3.75, bottom: 5 }}
			class="flex flex-row transition-all items-start justify-center bg-transparent pointer-events-none {stickyLayer4}"
			onProgress={(p) => {
				if (p > 0.9 || p < 0.1) {
					stickyLayer4 = 'opacity-0';
				} else if (p <= 0.9 && p >= 0.1) {
					stickyLayer4 = 'opacity-100';
				}
				if (p < 0.8) {
					bottomButton = 'opacity-100 pointer-events-auto cursor-pointer';
				} else {
					bottomButton = 'opacity-50';
				}
			}}
		>
			<div class="w-full flex bg-transparent flex-row justify-between items-center">
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button type="button" class="button m-1 bg-white p-1" on:click={goToTop}>
						<Icon icon="ph:caret-double-left" color="black" height={32} />
					</button>
					<button type="button" class="button m-1 bg-white p-1" on:click={() => decreaseSection(1)}>
						<Icon icon="ph:caret-left" color="black" height={32} />
					</button>
				</div>
				<div class="flex bg-transparent flex-row justify-center items-center">
					<button
						type="button"
						class="cursor-pointer {bottomButton} m-1 button pointer-events-auto bg-white p-1"
						on:click={goToBottom}
					>
						<Icon icon="ph:caret-right" color="black" height={32} />
					</button>
					<button
						type="button"
						class="cursor-pointer m-1 button pointer-events-auto {bottomButton} bg-white p-1"
						on:click={goToBottom}
					>
						<Icon icon="ph:caret-double-right" color="black" height={32} />
					</button>
				</div>
			</div>
		</StickyLayer>
	</Parallax>
{/if}

<style>
	.initial {
		position: absolute;
		font-family: 'Noto Serif Display';
		font-weight: 200;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
	}

	.initial-a {
		margin-right: 20rem;
		margin-bottom: 10rem;
		z-index: 1000;
	}

	.initial-e {
		margin-left: 20rem;
		margin-top: 10rem;
	}

	.headshot {
		height: 544px;
		width: 544px;
		border-radius: 100%;
		object-fit: cover;
	}

	@media only screen and (min-width: 640px) {
		.headshot {
			height: 576px;
			width: 576px;
		}
		.initial {
			font-size: 80rem;
		}
	}
	/* sm */

	@media only screen and (min-width: 768px) {
		.headshot {
			height: 640px;
			width: 640px;
		}
		.initial {
			font-size: 80rem;
		}
	}
	/* md */

	@media only screen and (min-width: 1024px) {
		.headshot {
			height: 768px;
			width: 768px;
		}
		.initial {
			font-size: 40rem;
		}
		.initial-a {
			margin-right: 15rem;
		}
		.initial-e {
			margin-left: 15rem;
		}
		.grid-1 {
			grid-template-columns: 1fr 1px 1fr 1px 1fr;
		}
		.grid-2 {
			grid-template-columns: 1fr 1px;
		}
		.grid-3 {
			grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
			grid-template-rows: repeat(2, 1fr);
		}
		.grid-4 {
			grid-template-columns: 1fr 1px 1fr;
		}
		.grid-5 {
			grid-template-columns: 1fr;
		}
		.grid-6 {
			row-gap: 1rem;
			grid-template-columns: 1fr 1px 1fr 1px 1fr;
			grid-template-rows: repeat(4, 1fr);
		}
	}
	/* lg */

	@media only screen and (min-width: 1280px) {
		.headshot {
			height: 1024px;
			width: 1024px;
		}
		.initial {
			font-size: 50rem;
		}
		.third-header {
			writing-mode: vertical-rl;
			text-orientation: sideways-right;
			transform: rotate(180deg);
		}
	}
	/* xl */

	@media only screen and (min-width: 1536px) {
		.headshot {
			height: 1280px;
			width: 1280px;
		}
		.initial {
			font-size: 75rem;
		}
	}
	/* 2xl */

	button.button {
		border-radius: 100%;
	}

	:global(div, p, h1, h2, h3, header, section, span, footer) {
		pointer-events: none;
	}

	a {
		transition:
			color 300ms,
			text-shadow 300ms,
			font-weight 300ms;
	}

	a:link {
		color: #696969;
		font-weight: normal;
	}

	a:visited {
		color: #aaaaaa;
		font-weight: normal;
	}

	/* mouse over link */
	a:hover {
		color: #aaaaaa;
		font-weight: bold;
		text-shadow: 1.5px 1.5px 1px #696969;
	}

	img {
		max-width: unset;
	}
</style>
