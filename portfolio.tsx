import emoji from 'react-easy-emoji'

export const greetings = {
	name: 'Julio Oliveira',
	title: 'Hello World! Eu sou o Julio!!',
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	resumeLink: 'https://bit.ly/3UF6kgN',
}

export const openSource = {
	githubUserName: 'JulioOLV',
}

export const contact = {}

export const socialLinks = [
	{
		name: 'GitHub',
		icon: 'fa-github',
		url: 'https://github.com/JulioOLV',
		color: 'github',
	},
	{
		name: 'Linkedin',
		icon: 'fa-linkedin',
		url: 'https://www.linkedin.com/in/julio-cc-oliveira/',
		color: 'twitter',
	}
]

export const skillsSection = {
	title: 'Tenho experiência com',
	subTitle: 'CRAZY MACHINE LEARNING DEVELOPER WHO WANTS TO TALK WITH DATA',
	data: [
		{
			title: 'Full Stack Development',
			lottieAnimationFile: '/lottie/skills/fullstack.json',
			skills: [
				emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'),
				emoji('⚡ Building responsive static websites using Next.js'),
				emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
			],
			softwareSkills: [
				{
					skillName: 'HTML-5',
					fontAwesomeClassname: 'vscode-icons:file-type-html',
				},
				{
					skillName: 'CSS-3',
					fontAwesomeClassname: 'vscode-icons:file-type-css',
				},
				{
					skillName: 'JavaScript',
					fontAwesomeClassname: 'logos:javascript',
				},
				{
					skillName: 'Typescript',
					fontAwesomeClassname: 'logos:typescript-icon',
				},
				{
					skillName: 'Reactjs',
					fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
				},
				{
					skillName: 'Nextjs',
					fontAwesomeClassname: 'vscode-icons:file-type-light-next',
				},
				{
					skillName: 'Redux',
					fontAwesomeClassname: 'logos:redux',
				},
				{
					skillName: 'NodeJS',
					fontAwesomeClassname: 'vscode-icons:nodejs',
				},
				{
					skillName: 'Nestjs',
					fontAwesomeClassname: 'logos:nestjs',
				},
				{
					skillName: 'C#',
					fontAwesomeClassname: 'teenyicons:c-sharp-solid',
				},
				{
					skillName: '.NET Core',
					fontAwesomeClassname: 'logos:dotnet',
				},
				{
					skillName: 'NPM',
					fontAwesomeClassname: 'logos:npm-icon',
				},
				{
					skillName: 'Yarn',
					fontAwesomeClassname: 'logos:yarn',
				},
			],
		},
		{
			title: 'Cloud Infra-Architecture',
			lottieAnimationFile: '/lottie/skills/cloudinfra.json',
			skills: [
				emoji('⚡ Experience of working on multiple cloud platforms'),
				emoji('⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'),
				emoji('⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'),
			],
			softwareSkills: [
				{
					skillName: 'Azure',
					fontAwesomeClassname: 'logos:microsoft-azure',
				},
				{
					skillName: 'Heroku',
					fontAwesomeClassname: 'logos:heroku-icon',
				},
				{
					skillName: 'MySQL',
					fontAwesomeClassname: 'logos:mysql',
				},
				{
					skillName: 'SQL Server',
					fontAwesomeClassname: 'vscode-icons:file-type-sql',
				},
				{
					skillName: 'MongoDB',
					fontAwesomeClassname: 'logos:mongodb-icon',
				},
				{
					skillName: 'Github',
					fontAwesomeClassname: 'akar-icons:github-fill',
				},
				{
					skillName: 'Docker',
					fontAwesomeClassname: 'logos:docker-icon',
				},
				{
					skillName: 'Github Actions',
					fontAwesomeClassname: 'logos:github-actions',
				},
				{
					skillName: 'Nginx',
					fontAwesomeClassname: 'logos:nginx',
				},
				{
					skillName: 'Datadog',
					fontAwesomeClassname: 'logos:datadog',
				},
			],
		},
		
	],
}

export const SkillBars = [
	{
		Stack: 'Machine Learning/ Deep Learing Modeling',
		progressPercentage: '90',
	},
	{
		Stack: 'Data Analysis',
		progressPercentage: '85',
	},
	{
		Stack: 'Data Visualization',
		progressPercentage: '80',
	},
	{
		Stack: 'MLOps',
		progressPercentage: '50',
	},
	{
		Stack: 'Cloud',
		progressPercentage: '70',
	},
	{
		Stack: 'Frontend/Design', //Insert stack or technology you have experience in
		progressPercentage: '60', //Insert relative proficiency in percentage
	},
	{
		Stack: 'Backend',
		progressPercentage: '70',
	},
	{
		Stack: 'Programming',
		progressPercentage: '90',
	},
];

export const educationInfo = [
	{
		schoolName: 'Lovely Professional University',
		subHeader: 'Bachelors of Computer Science and Engineering',
		duration: 'June 2019 - Present',
		desc: 'Participated in the various coding contest and published a paper.',
		grade: 'Grade A',
		descBullets: [
			'I am currently pursuing minor in Machine Learning.',
			'I have also studied DBMS, OS, Computer Networks and other computer science fundamentals.',
		],
	},
];

export const experience = [
	{
		role: 'Machine Learning Engineer',
		company: 'Omdena',
		companylogo: '/img/icons/common/omdena.png',
		date: 'Sept 2021 – Jul 2022',
		desc: 'I worked as Machine Learning Engineer to design and create the AI algorithms capable of learning and making predictions. I worked here as a type and contributed myself as a enthusiastic ML Developer.',
		descBullets: [
			'Improved accuracy of the model from 82 percent to 91 percent in the career recommendation model.',
			'Formulated an AutoML pipeline to automatically search for the best neural model for Natural Language Processing tasks.',
			'Analyzed factors contributing to homelessness in Texas and proposed a solution for homelessness.',
			'Took the charge of developing an image augmentation pipeline for school image datasets.',
		],
	},
	{
		role: 'Junior Machine Learning Engineer',
		company: 'iNeuron.ai',
		companylogo: '/img/icons/common/ineuron.jpg',
		date: 'Jul 2021 – Sep 2021',
		descBullets: [
			'Developed a solution that should be able to predict whether the mushroom is poisonous or edible.',
			'Created a web app for the visualization of drug activity using streamlit.',
		],
	},
	{
		role: 'Open Source Collaborator',
		company: 'KWOC',
		companylogo: '/img/icons/common/kwoc.png',
		date: 'Nov 2021 - Feb 2022',
		desc: 'Worked as Open Source Software Developer to create a web app for the analyis, in which I integrated computer vision AI model to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
	},
];

export const projects = [
	{
		name: 'developer-portfolio',
		desc: 'Software Developer Portfolio built with react.js, next.js, typerScript, tailWind CSS and Sanity that helps you showcase your work and skills as a software developer.',
		github: 'https://github.com/mohitmishra786/My-Portfolio',
		// link: 'https://bit.ly/3AINU77',
	},
	{
		name: 'Tea-Quality Predictor',
		desc: 'I developed a detector and classifier model which will detect the correct image and classify its quality and also with that I also developed Flask API and used it for the deployment into Microsoft Azure. I had used AWS for the deployment of the model.',
		github: 'https://github.com/mohitmishra786/Tea-Leaf-Quality',
	},
	{
		name: 'Homelessness in Texas',
		desc: 'Get hands-on experience in technical skills with Exploratory Data Analysis. This project focuses mainly on the root causes of the increasing Homelessness in Texas. The data has been collected from Texas Homeless Network, Joint Centre for Housing Studies Harvard, Texas Government, Homelessness Information System, GitHub, and Kaggle. We were able to compare how COVID-19 has affected Texas and how the effects of COVID-19 have attributed to the other socio-economic factors of homelessness and homelessness rates.',
		github: 'https://github.com/mohitmishra786/Homelessness-in-Texas',
		link: 'https://bit.ly/3AINU77',
	},
	{
		name: 'Career Recommendation System',
		desc: 'In order to make this engine available for students, we created a web application using Flask as the backend. After filling out the form the student clicks on Recommendation to receive the top recommendation from the engine with a probability for each Major Core and with an explanation of the relevant scores fed to the engine. There any many algorithms used, which were built to predict the compatibility to a particular career given a students high school test scores.',
		github: 'https://github.com/mohitmishra786/Career-Recommendation-System',
	},
];

export const feedbacks = [
	{
		name: 'John Smith',
		feedback:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
	},
	{
		name: 'John Smith',
		feedback:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: 'Julio Oliveira',
	description:
		'ToDo',
	author: 'Julio Oliveira',
	image: 'https://avatars.githubusercontent.com/u/71754779?v=4',
	keywords: [
		'Portfolio',
		'JulioOLV Portfolio ',
	],
}