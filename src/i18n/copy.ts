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

export interface AboutSection {
	heading: string;
	paragraphs: string[];
}

export interface Copy {
	nav: { home: string; training: string; blog: string; about: string };
	hero: {
		kickerItems: string[];
		title: string;
		sub: string;
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
	about: {
		kicker: string;
		title: string;
		intro: string;
		sections: AboutSection[];
	};
}

export const copy: { nl: Copy; en: Copy } = {
	nl: {
		nav: { home: 'Home', training: 'Wetenschapscommunicatie', blog: 'Updates', about: 'Over' },
		hero: {
			kickerItems: ['Theatermaker', 'Wetenschapscommunicator', 'Improvisator', 'Trainer', 'Presentator'],
			title: 'Ben Verhoeven',
			sub: 'Doctor in de taalkunde die wetenschap het podium op tilt. Ik combineer improvisatietheater en wetenschapscommunicatie — als maker, verteller, docent en coach.',
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
		about: {
			kicker: 'Achtergrond',
			title: 'Over Ben Verhoeven',
			intro:
				'ERLNMYR is het bedrijf van improvisator en doctor in de taalkunde Ben Verhoeven. Tijdens zijn wetenschappelijke carrière raakte hij gefascineerd door wetenschapscommunicatie en hij gebruikte daar ook steeds frequenter zijn improvisatievaardigheden voor. Bens achtergrond en lopende projecten in zowel wetenschap als improvisatie schetsen we hieronder.',
			sections: [
				{
					heading: 'Improvisatie',
					paragraphs: [
						'Ben speelt al improvisatietheater sinds 2011. Na enkele jaren op de spreekwoordelijke schoolbanken, richtte hij in 2014 samen met enkele gelijkgestemde zielen Swaajp Improtheater op, een Antwerps theatergezelschap en later ook improvisatieschool.',
						'Ben is ook lid van het muzikaal improtheater Commotie, waarmee hij in 2017 én 2023 de prijs voor "beste longform improvoorstelling van Vlaanderen" in de wacht sleepte bij de improwedstrijd Kemphanen.',
						'Ben schuimt steevast internationale improfestivals af om er workshops en masterclasses te volgen en er voorstellingen te zien, maar ook om er les te geven en zelf op te treden met bijvoorbeeld het Nederlands-Belgische ensemble "Werewolves, the improv show" of het trio Prism dat zich in 2019 eveneens tot de beste kon kronen in een nieuwe wedstrijd van Kemphanen.',
						'Als gedreven organisator is Ben ook stichtend lid van The SIN – een internationaal netwerk van ambitieuze improspelers en -organisatoren in Europa.',
						'Ook muzikaal kan je Ben aan het werk zien. En dat dus niet enkel met zijn stem, maar ook met zijn handen en voeten. Zo zet hij geregeld een stap opzij om het theater niet te leiden maar net als percussionist bij te staan. Een mooi voorbeeld is Improovelicious, het internationaal improfestival in Leuven waar hij in 2018 de drums verzorgde.',
						'In 2022 verscheen het hoofdstuk "Improvisation and the Scientific Method" in het boek Essays on Improv dat hij samen met Gael Doorneweerd-Perry schreef.',
						'In 2024 behaalde hij met team België brons op het EK improvisatietheater in München.',
						'Hij geeft les bij Wisper na eerdere ervaringen bij Conservatorium Mechelen en de Swaajp School of Improv.',
					],
				},
				{
					heading: 'Wetenschap',
					paragraphs: [
						'Ben is computerlinguïst van opleiding. Kort geschetst is hij dus een taalkundige die taal bestudeert en modelleert met computers.',
						'Zijn academische carrière begon in 2012 met een internationale stage aan de North-West University in Zuid-Afrika waar hij onderzoek deed naar hoe de betekenis van nieuw samengestelde woorden automatisch achterhaald kan worden.',
						'Wat later startte hij als doctorandus aan UAntwerpen op het AMiCA-project, waar teksttechnologie wordt gebruikt om grensoverschrijdend gedrag op sociale media automatisch te herkennen. In 2014 behaalde hij een prestigieus aspirantmandaat bij het Fonds voor Wetenschappelijk Onderzoek Vlaanderen (FWO) waarmee hij vier jaar de tijd kreeg om onderzoek te doen naar auteursprofilering. De centrale onderzoeksvraag: "Welke eigenschappen van een auteur kunnen we voorspellen op basis van enkel diens tekst?"',
						'Reeds tijdens dit doctoraat was Ben gebeten door wetenschapscommunicatie, en met succes. Zo behaalde hij een derde plaats op FameLab Belgium, deed hij aan wetenschapscomedy op Bright Club Brussels, en was hij actief op menige Dag van de Wetenschap, Wetenschapsweek, en Kinderuniversiteit. Door al deze inspanningen werd hij in 2017 onderscheiden met de jaarprijs wetenschapscommunicatie van de KVAB.',
						'In juni 2018 verdedigde hij zijn doctoraatsproefschrift en behaalde hij succesvol het diploma Doctor in de Taalkunde.',
					],
				},
			],
		},
	},
	en: {
		nav: { home: 'Home', training: 'Science Communication', blog: 'Updates', about: 'About' },
		hero: {
			kickerItems: ['Theatre maker', 'Science communicator', 'Improviser', 'Trainer', 'Speaker'],
			title: 'Ben Verhoeven',
			sub: 'A doctor in linguistics who puts science on stage. I blend improvisational theatre and science communication — as a performer, storyteller, teacher and coach.',
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
		about: {
			kicker: 'Background',
			title: 'About Ben Verhoeven',
			intro:
				"ERLNMYR is the business of improviser and doctor in linguistics Ben Verhoeven. During his scientific career he became fascinated with science communication for which he used more and more of his improvisational skills. Below you will find an overview of Ben's background and running projects in both science and improvisation.",
			sections: [
				{
					heading: 'Improvisation',
					paragraphs: [
						'Ben has been acting in improvisational theater since 2011. After a couple of years in the proverbial classroom, he co-founded Swaajp Improtheater with a couple of like-minded spirits; a real Antwerp theater company and later on even improvisational school.',
						'Ben is also a member of Commotie, a musical improv ensemble that in 2017 and 2023 earned the award for "best longform improv show in Flanders" at the improv competition Kemphanen.',
						'Ben is often seen at international improv festivals, whether it is to watch performances and learn from workshops and masterclasses, to teach workshops himself, or to perform for example with the Dutch-Belgian ensemble "Werewolves, the improv show" or with the trio Prism. With the latter group he won the Kemphanen award again in 2019.',
						'As a passionate organizer he is also founding member of The SIN — an international network of ambitious improv players and organizers in Europe.',
						"You can also catch Ben at work musically. And not just with his voice, but with his hands and feet too. It's not uncommon for him to step aside from the stage to assist the theatrical performance as percussionist. A beautiful example is Improovelicious, an international improv festival in Leuven where he was the in-house drummer in 2018.",
						'In 2022, the chapter "Improvisation and the Scientific Method" appeared in the book Essays on Improv, which he co-wrote with Gael Doorneweerd-Perry.',
						'In 2024 he won bronze with Team Belgium at the European Improv Championship in Munich.',
						'He teaches at Wisper, following earlier stints at Mechelen Conservatorium and the Swaajp School of Improv.',
					],
				},
				{
					heading: 'Science',
					paragraphs: [
						'Ben is a computational linguist by education. In short, this means that he is a linguist that studies and models language with computers.',
						'His academic career started in 2012 with the international internship at the North-West University in South Africa, where he researched how the meaning of newly compounded words can automatically be discovered.',
						'Some time later he started his doctorate at the University of Antwerp with the AMiCA project, a project that uses text technology to automatically recognize transgressive behaviour on social media. In 2014 he received a Young Researchers Grant from FWO Vlaanderen (the Flemish foundation for scientific research), which allowed him four more years to research author profiling. The main research question: "Which characteristics of the author can we predict solely based on their text".',
						'During this doctorate, Ben got interested in science communication. With success, as show his third place at FameLab Belgium, his science comedy at Bright Club Brussels and his presence at many Science Days, Science Weeks and the Children\'s University. Because of these efforts and achievements, in 2017 he was awarded the Annual Science Communication Prize at the KVAB, the Royal Flemish Academy of Belgium for Science and the Arts.',
						'In June 2018, Ben defended his doctoral thesis and was successfully granted the diploma and title of Doctor in Linguistics.',
					],
				},
			],
		},
	},
};
