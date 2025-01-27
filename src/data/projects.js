// Projects data.
// Note: Here we are getting data from a js file. In real-world applications, you can get data from an API.

const projects = [
	{
		id: 1,
		title: 'Orderiom',
		category: 'Freelance',
		img: require('@/assets/images/orderiom-lap.png'),
		description: `With Orderiom, a modern web shop with an integrated ordering system was created, designed for restaurants. They get a digital business card and the opportunity to invest in a growing customer base and their own name.`
	},
	{
		id: 2,
		title: 'Scripty AI',
		category: 'Freelance',
		img: require('@/assets/images/scripty-lap.png'),
		description: `Scripty ist ein modernes Transkriptionsprogramm, welches Audio-
		 und Videodateien in bearbeitungsfähige Texte für die Sprachen deutsch, 
		englisch und französisch umwandelt. Man kann die Transkripte einzeln
		 oder im Team nutzen. Auch weiterhin arbeiten unsere Entwickler an neuen Features und technischen Optimierungen.`
	},
	{
		id: 3,
		title: 'Meet Me Halfway',
		category: 'Freelance',
		img: require('@/assets/images/meetme-lap.png'),
		description: `Another digital marketplace with a customized website and an intelligent ordering system was created for the Persian restaurant Meet Me Halfway as part of Orderiom. Here, too, we worked with the PWA method to ensure that our website was fully adapted to a wide range of devices and to make the website available as a free app for iOS and Android. Accordingly, every customer can download and use the mobile menu immediately via smartphone....`
	},
	{
		id: 4,
		title: 'Ordermood',
		category: 'Freelance',
		img: require('@/assets/images/ordermood-lap.png'),
		description: `With Ordermood, a multi-vendor marketplace was created and thus a connecting platform for the exchange of services for restaurants and their customers. In terms of software, the software solutions Open API, AWS, and the framework vuejs., for the graphic interface design, were used for the front-end development. In the backend area, the well-known open-source PHP web framework Laravel and the widespread open-source scripting language PHP (Hypertext Preprocessor) are used...`
	},
	{
		id: 5,
		title: 'sub-bestellen',
		category: 'Freelance',
		img: require('@/assets/images/sub-bestellen.png'),
		description: `With Sandwich Catering, a modern ordering platform was created for our Subway branch in Zehlendorf. The special thing about it is that the ordering process is extremely easy and quick to go through.`
	},
	{
		id: 6,
		title: 'ECORE',
		category: 'Professional',
		img: require('@/assets/images/ecore-lap.png'),
		description: `Mit dem neutralen ECORE-Scoring erkennen Sie ESG- und Taxonomie-Risiken auf Gebäude- und Portfolioebene – ab nur 30 Fragen und mit tagesaktuellen Daten.`
	},
	{
		id: 7,	
		title: 'Mercedes-Benz Media',
		category: 'Professional',
		img: require('@/assets/images/mbm-lap.png'),
		description:'Exklusive Einblicke und individuelle Angebote: Erleben Sie mit Mercedes-Benz das Maximum aus digitaler Live-PR'
	},
	{
		id: 8,
		title: 'Health Transformation Hub',
		category: 'Professional',
		img: require('@/assets/images/HTH-lap.png'),
		description:"Das HTH-Panel zum Veränderungsklima im deutschen Gesundheitswesen"
	}
];

export default projects;
