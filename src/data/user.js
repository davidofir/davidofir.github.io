const INFO = {
	main: {
		title: "Reactfolio by Ofir David",
		name: "Ofir D.",
		email: "davidof@sheridancollege.ca",
		logo: process.env.PUBLIC_URL + '/logo.png',
	},

	socials: {
		github: "https://github.com/davidofir",
		linkedin: "https://www.linkedin.com/in/ofir-d/",
	},

	homepage: {
		title: "Ofir David",
		description:
			"A software developer with a passion for crafting robust and scalable solutions across mobile, backend, and front-end web applications. My approach blends innovative thinking with a strong commitment to problem-solving, driven by continuous learning and a talent for translating complex requirements into user-centric software to deliver impactful results.",
	},

	projects: [
		{
			title: "SoundBox (Capstone Project)",
			description:
				"Collaborated with 2 other team members, the project tries to solve a common issue that many music fans face, how to browse reviews from their favorite artists while also connecting with other like-minded fans.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/davidofir/SoundBox",
			imageUrls:[
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Chat.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Discovery.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-EditProfile.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Events.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Feed.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Merch.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Recommendations.png',
				process.env.PUBLIC_URL + '/SoundBox/SoundBox-Song.png',
			],
			frameworks:"React Native, Node.js, Firebase, Azure, Flask",
			languages:"JavaScript, Python",
			features:['Secure login and signup','Chatting with other users including real-time delivery of notifications to the relevant recepients, using a cross-platform notification manager and websockets for real-time transimission of messages',"Recommendations for artists based on the user's activity","Reviewing and rating artists, albums and songs, in addition to reading other users' reviews","Viewing specific artists' upcoming events using an events API","Displaying and routing the user to buy artist merchandise by scraping the merchandise information"]
		},

		{
			title: "FarmMart",
			description:
				"A project that provides users with a platform that allows them to browse local farmers and what kind of produce is sold. The main goal is to allow users to buy fresh produce directly from farmers, while also cutting the middleman.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/davidofir/FarmMart",
			imageUrls:[
				process.env.PUBLIC_URL + '/FarmMart/FarmMart-LandingPage.png',
				process.env.PUBLIC_URL + '/FarmMart/FarmMart-AddStores.png',
				process.env.PUBLIC_URL + '/FarmMart/FarmMart-BrowseStores.png',
				process.env.PUBLIC_URL + '/FarmMart/FarmMart-ContactSeller.jpg',
				process.env.PUBLIC_URL + '/FarmMart/FarmMart-Inbox.png',
				process.env.PUBLIC_URL + '/FarmMart/FarmMart-SendMessage.png',
			],
			frameworks:"React Native, Firebase",
			languages:"JavaScript",
			features:['Secure login and signup','Browsing nearby stores on a map centered around your location','Messaging farmers','Read incoming messages']
		},

		{
			title: "Wardroba",
			description:
				"Collaborated with 2 other group members to create an application whose goal is to make styling and color matching more accessible using image recognition and color extraction.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/kotlin/kotlin.png",
			linkText: "View Project",
			link: "https://github.com/Akochhar29/Wardroba",
			videoUrl:'https://www.youtube.com/embed/5y6Tcgi-cMo',
			frameworks:"Android, Firebase",
			languages:"Kotlin",
			features:['Secure login and signup','Scan an item of clothing',"Extract the image's dominant color color",'receive color matching recommendations','Persist the item color and type for future use using Firebase']
		},

		// {
		// 	title: "Project 4",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },

		// {
		// 	title: "Project 5",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },
	],
};

export default INFO;
