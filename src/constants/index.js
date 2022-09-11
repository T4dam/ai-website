import {
	facebook,
	instagram,
	linkedin,
	twitter,
	send,
	shield,
	star,
	entrepreneur,
	techcrunch,
	techradar,
	person01,
	person02,
	person03,
	person04,
	person05,
	camera,
	world,
	credit,
	cloud,
	creditShadow,
	worldShadow,
	cloudShadow,
	robot1,
	robot2,
	circuit,
} from '../assets';

export const navLinks = [
	// {
	// 	id: 'home',
	// 	title: 'Home',
	// },
	{
		id: 'howitworks',
		title: 'How it works',
	},
	{
		id: 'features',
		title: 'Features',
	},
	{
		id: 'product',
		title: 'Product',
	},
	{
		id: 'articles',
		title: 'Articles',
	},
];

export const features = [
	{
		id: 'feature-1',
		icon: camera,
		title: 'Securtity',
		content:
			'Programmed to automatically report suspicious activity to the authorities.',
	},
	{
		id: 'feature-2',
		icon: shield,
		title: 'Good return on investment',
		content:
			'The drone has its own mind and therefore it requires little to no maintainace.',
	},
	{
		id: 'feature-3',
		icon: send,
		title: 'Easy to use',
		content:
			'Just tell the drone what shots need to be taken and it will take care of the rest',
	},
];

export const feedback = [
	{
		id: 'feedback-1',
		content:
			'This is crazy! I never thought I would see this in my lifetime. This technology seems to be a sentient.',
		name: 'Herman Jensen',
		title: 'Founder & Leader',
		img: person01,
	},
	{
		id: 'feedback-2',
		content:
			'Sometimes I think it can understand my thoughts before I tell it to do something. Very impressive.',
		name: 'Cloudia Smith',
		title: 'Founder & Leader',
		img: person02,
	},
	{
		id: 'feedback-3',
		content:
			'The small drone is unbelievable. How can a drone this size can think and fly like a living thing?!',
		name: 'Kenn Gallagher',
		title: 'Founder & Leader',
		img: person03,
	},
	{
		id: 'feedback-4',
		content:
			'Such a wonderful technology. I am glad I invested in the early stage of development.',
		name: 'Lisa Groot',
		title: 'Founder & Leader',
		img: person04,
	},
	{
		id: 'feedback-5',
		content:
			'Most powerful device I have ever used. I am humbled by the technology.',
		name: 'John Vainer',
		title: 'Founder & Leader',
		img: person05,
	},
];

export const stats = [
	{
		id: 'stats-1',
		title: 'User Active',
		value: '3800+',
	},
	{
		id: 'stats-2',
		title: 'Trusted by Company',
		value: '230+',
	},
	{
		id: 'stats-3',
		title: 'Transaction',
		value: '$230M+',
	},
];

export const footerLinks = [
	{
		title: 'Useful Links',
		links: [
			{
				name: 'Home',
				link: '#',
			},
			{
				name: 'Features',
				link: '#',
			},
			{
				name: 'Product',
				link: '#',
			},
			{
				name: 'Clients',
				link: '#',
			},
			{
				name: 'Terms & Services',
				link: '#',
			},
		],
	},
	{
		title: 'Community',
		links: [
			{
				name: 'Help Center',
				link: '#',
			},
			{
				name: 'Patrions',
				link: '#',
			},
			{
				name: 'Discord',
				link: '#',
			},
			{
				name: 'Blog',
				link: '#',
			},
			{
				name: 'Newsletters',
				link: '#',
			},
		],
	},
	{
		title: 'Other projects',
		links: [
			{
				name: 'CoinTrack',
				link: '#',
			},
			{
				name: 'Tasky',
				link: '#',
			},
		],
	},
];

export const howItWorks = [
	{
		id: '1',
		icon: credit,
		shadow: creditShadow,
		title: 'Buy the drone',
		discription: 'Buy the drone from our website or from a local retailer.',
	},
	{
		id: '2',
		icon: cloud,
		shadow: cloudShadow,
		title: 'Set up the drone',
		discription: 'Turn the drone on and connect it to the StartLink internet.',
	},
	{
		id: '3',
		icon: world,
		shadow: worldShadow,
		title: 'Hello World',
		discription: 'Your drone is now self-aware and ready to fly.',
	},
];

export const socialMedia = [
	{
		id: 'social-media-1',
		icon: instagram,
		link: 'https://www.instagram.com/',
	},
	{
		id: 'social-media-2',
		icon: facebook,
		link: 'https://www.facebook.com/',
	},
	{
		id: 'social-media-3',
		icon: twitter,
		link: 'https://www.twitter.com/',
	},
	{
		id: 'social-media-4',
		icon: linkedin,
		link: 'https://www.linkedin.com/',
	},
];

// export const clients = [
// 	{
// 		id: 'client-1',
// 		logo: airbnb,
// 	},
// 	{
// 		id: 'client-2',
// 		logo: binance,
// 	},
// 	{
// 		id: 'client-3',
// 		logo: coinbase,
// 	},
// 	{
// 		id: 'client-4',
// 		logo: dropbox,
// 	},
// ];
export const featured = [
	// {
	// 	id: 'feature-1',
	// 	logo: forbes,
	// },
	{
		id: 'feature-2',
		logo: entrepreneur,
	},
	{
		id: 'feature-3',
		logo: techcrunch,
	},
	// {
	// 	id: 'feature-4',
	// 	logo: engadget,
	// },
	{
		id: 'feature-4',
		logo: techradar,
	},
];
export const news = [
	{
		id: 'news-1',
		img: robot2,
		title: 'Thinking drone company eyes humanoind robot industry',
	},
	{
		id: 'news-2',
		img: circuit,
		title: 'Aiddron CEO raises 1.5B saying humanoids are the future',
	},
	{
		id: 'news-3',
		img: robot1,
		title: 'Here is a concept of a military robot powered by Aiddron AI',
	},
];
