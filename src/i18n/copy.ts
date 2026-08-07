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
		kickerItems: string[];
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
			kickerItems: ['Theatermaker', 'Wetenschapscommunicator', 'Improvisator', 'Trainer', 'Presentator'],
			title: 'Ben Verhoeven',
			sub: 'Doctor in de taalkunde die wetenschap het podium op tilt. Ik combineer improvisatietheater en wetenschapscommunicatie — als maker, verteller, docent en coach.',
			ctaTraining: 'Bekijk training & coaching',
			ctaContact: 'Neem contact op',
		},
		portfolioHeading: 'Wat ik doe',
		portfolioItems: [
			{
				tag: 'Wetenschapstheater',
				title: 'Theatermaker',
				desc: 'Ik maak en speel theater geïnspireerd door wetenschap als ERLNMYR. Bekijk het aanbod op erlnmyr.be ↗',
				accent: 'oklch(55% 0.15 35)',
				href: 'https://www.erlnmyr.be/voorstellingen',
				external: true,
				photoLabel: '[ foto: voorstelling op scène ]',
				hue: 35,
			},
			{
				tag: 'Wetenschapscommunicatie',
				title: 'Trainer & coach',
				desc: 'Ik begeleid onderzoekers en professionals in presenteren, storytelling, en podiumvaardigheden, en coach hen voor belangrijke presentaties.',
				accent: 'oklch(55% 0.15 190)',
				href: '/training',
				external: false,
				photoLabel: '[ foto: workshop / training ]',
				hue: 190,
			},
			{
				tag: 'Presenteren',
				title: 'Spreker, moderator & presentator',
				desc: 'Ik presenteer evenementen, modereer panelgesprekken en debatten, en breng een boodschap glashelder over aan elk publiek.',
				accent: 'oklch(55% 0.15 90)',
				href: "https://www.erlnmyr.be/presenteren/",
				external: false,
				photoLabel: '[ foto: presentator op podium ]',
				hue: 90,
			},
			{
				tag: 'Improtheater',
				title: 'Speler',
				desc: 'Ik heb 15 jaar ervaring met improvisatietheater. Zo won ik 3 keer Kemphanen - de wedstrijd voor beste Vlaamse improvoorstelling - en behaalde brons voor België op het EK impro in 2024.',
				accent: 'oklch(55% 0.15 340)',
				href: null,
				external: false,
				photoLabel: '[ foto: improv-scène ]',
				hue: 340,
			},
			{
				tag: 'Improtheater',
				title: 'Docent',
				desc: 'Ik doceer impro bij Wisper, eerder aan Conservatorium Mechelen en de Swaajp School of Improv, en geef workshops op internationale festivals.',
				accent: 'oklch(55% 0.15 250)',
				href: null,
				external: false,
				photoLabel: '[ foto: improv-les ]',
				hue: 250,
			},
		],
		newsHeading: 'Updates',
		newsMoreButton: 'Bekijk alle updates',
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
			kickerItems: ['Theatre maker', 'Science communicator', 'Improviser', 'Trainer', 'Speaker'],
			title: 'Ben Verhoeven',
			sub: 'A doctor in linguistics who puts science on stage. I blend improvisational theatre and science communication — as a performer, storyteller, teacher and coach.',
			ctaTraining: 'See training & coaching',
			ctaContact: 'Get in touch',
		},
		portfolioHeading: 'What I do',
		portfolioItems: [
			{
				tag: 'Science theatre',
				title: 'Theatre maker',
				desc: 'I create and perform theatre inspired by science as ERLNMYR. See the full programme at erlnmyr.be ↗',
				accent: 'oklch(55% 0.15 35)',
				href: 'https://www.erlnmyr.be/en/shows',
				external: true,
				photoLabel: '[ photo: on-stage performance ]',
				hue: 35,
			},
			{
				tag: 'Science communication',
				title: 'Trainer & coach',
				desc: 'I guide researchers and professionals in presenting, storytelling, and stage skills, and coach them for important presentations.',
				accent: 'oklch(55% 0.15 190)',
				href: '/training',
				external: false,
				photoLabel: '[ photo: workshop / training ]',
				hue: 190,
			},
			{
				tag: 'Presenting',
				title: 'Speaker, moderator & host',
				desc: 'I host events, moderate panels and debates, and get a message across clearly to any audience.',
				accent: 'oklch(55% 0.15 90)',
				href: 'https://www.erlnmyr.be/presenting/',
				external: false,
				photoLabel: '[ photo: hosting on stage ]',
				hue: 90,
			},
			{
				tag: 'Improv theatre',
				title: 'Performer',
				desc: "I have 15 years of experience with improvised theatre. I've won Kemphanen — the competition for best Flemish improv show — three times, and took bronze for Belgium at the 2024 European Improv Championship.",
				accent: 'oklch(55% 0.15 340)',
				href: null,
				external: false,
				photoLabel: '[ photo: improv scene ]',
				hue: 340,
			},
			{
				tag: 'Improv theatre',
				title: 'Teacher',
				desc: 'I teach impro at Wisper, previously at Mechelen Conservatorium and the Swaajp School of Improv, and give workshops at international festivals.',
				accent: 'oklch(55% 0.15 250)',
				href: null,
				external: false,
				photoLabel: '[ photo: improv class ]',
				hue: 250,
			},
		],
		newsHeading: 'Updates',
		newsMoreButton: 'Show all updates',
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
