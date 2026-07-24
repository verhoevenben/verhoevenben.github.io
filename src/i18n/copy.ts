export interface PortfolioItem {
	tag: string;
	title: string;
	desc: string;
	accent: string;
	href: string | null;
	external: boolean;
	photoLabel: string;
	hue: number;
}

export interface Offering {
	title: string;
	desc: string;
	accent: string;
}

export interface Copy {
	nav: { home: string; training: string; blog: string };
	hero: {
		kicker: string;
		title: string;
		sub: string;
		ctaTraining: string;
		ctaContact: string;
	};
	portfolioHeading: string;
	portfolioItems: PortfolioItem[];
	newsHeading: string;
	newsMoreButton: string;
	contact: { heading: string; text: string };
	training: {
		kicker: string;
		title: string;
		intro: string;
		offeringsHeading: string;
		offerings: Offering[];
		testimonial: { quote: string; source: string };
		ctaHeading: string;
		ctaText: string;
		ctaButton: string;
	};
	footerNote: string;
}

export const copy: { nl: Copy; en: Copy } = {
	nl: {
		nav: { home: 'Home', training: 'Training & Coaching', blog: 'Updates' },
		hero: {
			kicker: 'Theatermaker · Wetenschapscommunicator · Trainer',
			title: 'Ben Verhoeven',
			sub: 'Doctor in de taalkunde die wetenschap het podium op tilt. Ik combineer improvisatietheater met wetenschapscommunicatie — als maker, verteller, docent en coach.',
			ctaTraining: 'Bekijk training & coaching',
			ctaContact: 'Neem contact op',
		},
		portfolioHeading: 'Wat ik doe',
		portfolioItems: [
			{
				tag: 'Theater',
				title: 'Theatermaker',
				desc: 'Maak en speel wetenschapstheater bij ERLNMYR — lezingen die een meeslepend, interactief spel worden. Bekijk het aanbod op erlnmyr.be ↗',
				accent: 'oklch(55% 0.15 35)',
				href: 'https://www.erlnmyr.be',
				external: true,
				photoLabel: '[ foto: voorstelling op scène ]',
				hue: 35,
			},
			{
				tag: 'Science communication',
				title: 'Trainer & coach',
				desc: 'Begeleid onderzoekers en professionals in storytelling, podiumaanwezigheid en presenteren, en breng wetenschap tot leven als communicator — met FameLab en Bright Club op de teller.',
				accent: 'oklch(55% 0.15 190)',
				href: '/training',
				external: false,
				photoLabel: '[ foto: workshop / training ]',
				hue: 190,
			},
			{
				tag: 'Presenteren',
				title: 'Spreker, moderator & presentator',
				desc: 'Presenteer events, modereer panelgesprekken en debatten, en breng een boodschap glashelder over aan elk publiek.',
				accent: 'oklch(55% 0.15 90)',
				href: null,
				external: false,
				photoLabel: '[ foto: presentator op podium ]',
				hue: 90,
			},
			{
				tag: 'Improvisatie',
				title: 'Improvisatie-acteur',
				desc: 'Speel al sinds 2011 improv, o.a. bij Commotie en Prism — brons met Team Belgium op het EK improvisatie 2024.',
				accent: 'oklch(55% 0.15 340)',
				href: null,
				external: false,
				photoLabel: '[ foto: improv-scène ]',
				hue: 340,
			},
			{
				tag: 'Onderwijs',
				title: 'Improvisatie-docent',
				desc: 'Doceert momenteel bij Wisper, eerder aan het Conservatorium Mechelen en de Swaajp School of Improv, en geeft workshops op internationale festivals.',
				accent: 'oklch(55% 0.15 250)',
				href: null,
				external: false,
				photoLabel: '[ foto: improv-les ]',
				hue: 250,
			},
		],
		newsHeading: 'Updates',
		newsMoreButton: 'Bekijk alle berichten',
		contact: {
			heading: 'Laten we praten',
			text: 'Op zoek naar een spreker, trainer of theatermaker? Stuur gerust een bericht.',
		},
		training: {
			kicker: 'Voor onderzoekers & professionals',
			title: 'Training & Coaching in wetenschapscommunicatie',
			intro: 'Improvisatietheater leert je flexibel, aanwezig en overtuigend spreken — precies wat je nodig hebt om je onderzoek tot leven te brengen. Ik begeleid onderzoekers en teams met workshops en persoonlijke coaching, op maat van je publiek.',
			offeringsHeading: 'Workshops & begeleiding',
			offerings: [
				{
					title: 'Storytelling voor je onderzoek',
					desc: 'Vind, structureer en vertel het verhaal achter je onderzoek. Via improvisatie-oefeningen bouw je het op en breng je het naar het podium.',
					accent: 'oklch(55% 0.15 35)',
				},
				{
					title: 'Podium- en spreekvaardigheden',
					desc: 'Werk aan verstaanbaarheid, zichtbaarheid en microfoontechniek — en vooral aan podiumaanwezigheid en verbinding met je publiek.',
					accent: 'oklch(55% 0.15 190)',
				},
				{
					title: 'Persoonlijke coaching',
					desc: 'Bereid je grote presentatie of doctoraatsverdediging voor met individuele begeleiding op maat.',
					accent: 'oklch(55% 0.15 90)',
				},
				{
					title: 'Samenwerken & communiceren',
					desc: "Leer jezelf constructief positioneren in team, vergadering of publicatie — verbaal en non-verbaal.",
					accent: 'oklch(55% 0.15 340)',
				},
				{
					title: 'Teambuilding met improvisatie',
					desc: "Leer collega's op een speelse, hilarische manier kennen met een sessie improvisatietheater.",
					accent: 'oklch(55% 0.15 250)',
				},
			],
			testimonial: {
				quote:
					'"Tijdens de workshops ligt de focus niet enkel op structuur of slides, maar vooral op aanwezigheid en zelfvertrouwen op het podium."',
				source: '— feedback van een deelnemer, via LinkedIn',
			},
			ctaHeading: 'Interesse in een workshop of coaching?',
			ctaText: 'Ik denk graag mee over een programma op maat van jouw team of onderzoeksgroep.',
			ctaButton: 'Mail ben@erlnmyr.be',
		},
		footerNote: '© 2026 Ben Verhoeven — ERLNMYR',
	},
	en: {
		nav: { home: 'Home', training: 'Training & Coaching', blog: 'Updates' },
		hero: {
			kicker: 'Theatre maker · Science communicator · Trainer',
			title: 'Ben Verhoeven',
			sub: 'A doctor in linguistics who puts science on stage. I blend improvisational theatre with science communication — as a performer, storyteller, teacher and coach.',
			ctaTraining: 'See training & coaching',
			ctaContact: 'Get in touch',
		},
		portfolioHeading: 'What I do',
		portfolioItems: [
			{
				tag: 'Theatre',
				title: 'Theatre maker',
				desc: 'Create and perform science theatre with ERLNMYR — turning lectures into immersive, interactive shows. See the full programme at erlnmyr.be ↗',
				accent: 'oklch(55% 0.15 35)',
				href: 'https://www.erlnmyr.be',
				external: true,
				photoLabel: '[ photo: on-stage performance ]',
				hue: 35,
			},
			{
				tag: 'Science communication',
				title: 'Trainer & coach',
				desc: 'Guide researchers and professionals in storytelling, stage presence and presenting, and bring science to life as a communicator — with FameLab and Bright Club along the way.',
				accent: 'oklch(55% 0.15 190)',
				href: '/training',
				external: false,
				photoLabel: '[ photo: workshop / training ]',
				hue: 190,
			},
			{
				tag: 'Presenting',
				title: 'Speaker, moderator & host',
				desc: 'Host events, moderate panels and debates, and get a message across clearly to any audience.',
				accent: 'oklch(55% 0.15 90)',
				href: null,
				external: false,
				photoLabel: '[ photo: hosting on stage ]',
				hue: 90,
			},
			{
				tag: 'Improv',
				title: 'Improv performer',
				desc: 'Performing improv since 2011, with Commotie and Prism among others — bronze with Team Belgium at the 2024 European Improv Championships.',
				accent: 'oklch(55% 0.15 340)',
				href: null,
				external: false,
				photoLabel: '[ photo: improv scene ]',
				hue: 340,
			},
			{
				tag: 'Teaching',
				title: 'Improv teacher',
				desc: 'Currently teaches at Wisper, previously at Mechelen Conservatorium and the Swaajp School of Improv, and gives workshops at international festivals.',
				accent: 'oklch(55% 0.15 250)',
				href: null,
				external: false,
				photoLabel: '[ photo: improv class ]',
				hue: 250,
			},
		],
		newsHeading: 'Updates',
		newsMoreButton: 'View all posts',
		contact: {
			heading: "Let's talk",
			text: 'Looking for a speaker, trainer or theatre maker? Feel free to reach out.',
		},
		training: {
			kicker: 'For researchers & professionals',
			title: 'Training & Coaching in Science Communication',
			intro: 'Improvisational theatre teaches you to speak with flexibility, presence and conviction — exactly what it takes to bring your research to life. I coach researchers and teams through workshops and personal coaching, tailored to your audience.',
			offeringsHeading: 'Workshops & coaching',
			offerings: [
				{
					title: 'Storytelling for your research',
					desc: 'Find, structure and tell the story behind your research. Improv exercises help you build it and bring it to the stage.',
					accent: 'oklch(55% 0.15 35)',
				},
				{
					title: 'Stage & speaking skills',
					desc: 'Work on audibility, visibility and microphone technique — and most of all, stage presence and connecting with your audience.',
					accent: 'oklch(55% 0.15 190)',
				},
				{
					title: 'Personal coaching',
					desc: 'Prepare for a major presentation or thesis defence with tailored one-on-one guidance.',
					accent: 'oklch(55% 0.15 90)',
				},
				{
					title: 'Collaboration & communication',
					desc: 'Learn to position yourself constructively in a team, meeting or publication — verbally and non-verbally.',
					accent: 'oklch(55% 0.15 340)',
				},
				{
					title: 'Improv teambuilding',
					desc: 'Get to know your colleagues in a playful, hilarious way through a session of improvisational theatre.',
					accent: 'oklch(55% 0.15 250)',
				},
			],
			testimonial: {
				quote:
					'"In his presentation workshops, the focus isn\'t just on structure or slides, but on presence and confidence on stage."',
				source: '— participant feedback, via LinkedIn',
			},
			ctaHeading: 'Interested in a workshop or coaching?',
			ctaText: "I'm happy to think along about a programme tailored to your team or research group.",
			ctaButton: 'Email ben@erlnmyr.be',
		},
		footerNote: '© 2026 Ben Verhoeven — ERLNMYR',
	},
};
