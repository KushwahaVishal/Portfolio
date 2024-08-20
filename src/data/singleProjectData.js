// Import images
import Image1 from '../images/BHP_website.png';
import SolarSafeKleen from '../images/SolarsafeKleen.png';
import SolarSafeKleen1 from '../images/SolarSafeKleen1.png';
import SolarSafeKleen2 from '../images/SolarSafeKleen2.png';
import Portfolio1 from '../images/Portfolio1.png';
import Portfolio2 from '../images/Portfolio2.png';
import Portfolio3 from '../images/Portfolio3.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
	{

		id: 1,
		title: 'Banglore Home Prices',
		category: 'Data Science',
		img: Image1,
		ProjectHeader: {
			title: 'Banglore Home Prices',
			publishDate: 'Aug 16, 2024',
			tags: 'Python/Machine Learning',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Banglore Home Prices',
				img: Image1,
			},
			/*{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},*/
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Personal Project',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Price Prediction ',
				},
				{
					id: 3,
					title: 'Website',
					details: 'http://ec2-54-165-156-73.compute-1.amazonaws.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '8109387343',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'The objective is to build a real estate price prediction website by developing a model with sklearn and linear regression, creating a Flask server for predictions, and designing a user interface with HTML, CSS, and JavaScript, covering key data science concepts and tools.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Numpy',
						'Pandas',
						'MatplotLib',
						'Sklearn',
						'Python Flask',
						'HTML/CSS/JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Data Preparation and Cleaning',
					details: 'Handling data quality issues is critical for successful project outcomes. Key tasks include addressing incomplete records or missing values through imputation or removal techniques, detecting and managing extreme values (outliers) that could skew the results using statistical methods, standardizing data formats and units to ensure consistency across the dataset, and normalizing features to bring them to a common scale, thereby enhancing model performance. Solutions involve using libraries like Pandas and Numpy, leveraging visualization tools such as Matplotlib, and creating preprocessing pipelines with Scikit-learn.',
				},
				{
					id: 2,
					heading: 'Feature Engineering',
					details:'Effective feature engineering significantly impacts model performance. Key tasks include identifying and selecting features that significantly influence house prices, developing new features from existing data to improve model accuracy, and choosing the most impactful features to prevent overfitting and enhance generalization. Solutions include consulting domain experts, applying feature importance techniques, and iterating on feature engineering strategies.'
				},
				{
					id: 3,
					heading: 'Model Tuning and Validation',
					details:'Optimizing the model is crucial for achieving the best results. Key tasks include identifying the optimal parameters for the model using techniques like GridSearchCV, ensuring the model generalizes well through methods like K-Fold Cross-Validation, and balancing model complexity to avoid common performance pitfalls like overfitting and underfitting. Solutions involve systematic hyperparameter tuning, applying regularization techniques, and implementing robust cross-validation.'		
				},
				{
					id: 4,
					heading: 'Server Integration',
					details:'Integrating the model with the Flask server can be challenging. Key tasks include ensuring the model is correctly loaded and utilized by the server, efficiently processing user inputs and generating predictions, and managing errors and invalid inputs gracefully. Solutions include using model serialization (e.g., Pickle), designing robust API endpoints, and conducting thorough testing.'			
				},
				{
					id: 5,
					heading: 'Deployment:',
					details:'Deploying the application on AWS EC2 comes with its own set of challenges. Key tasks include setting up the EC2 instance, security groups, and server settings correctly, ensuring the application can handle varying loads and remains reliable under different conditions, and implementing robust measures to protect the application and its data. Solutions involve configuring AWS EC2 instances, monitoring performance, and applying security best practices.'				
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],
		},
		// RelatedProject: {
		// 	title: 'Related Projects',
		// 	Projects: [
		// 		{
		// 			id: 1,
		// 			title: 'Mobile UI',
		// 			img: Image4,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: 'Web Application',
		// 			img: Image5,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: 'UI Design',
		// 			img: Image6,
		// 		},
		// 		{
		// 			id: 4,
		// 			title: 'Kabul Mobile App UI',
		// 			img: Image3,
		// 		},
		// 	],
		// },
	},
	{

		id: 2,
		title: 'SolarSafeKleen',
		category: 'Web Application',
		img: SolarSafeKleen,
		ProjectHeader: {
			title: 'SolarSafeKleen',
			publishDate: 'Jan 25, 2024',
			tags: 'HTML/CSS/JavaScript/PHP/Laravel',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'SolarSafeKleen',
				img: SolarSafeKleen,
			},
			{
				id: 2,
				title: 'SolarSafeKleen',
				img: SolarSafeKleen1,
			},
			{
				id: 3,
				title: 'SolarSafeKleen',
				img: SolarSafeKleen2,
			},
			// {
			// 	id: 4,
			// 	title: 'SolarSafeKleen',
			// 	img: SolarSafeKleen3,
			// },
			
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Personal Project',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Solar Panel Installation and Cleaning',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.solarsafekleen.com/',
				},
				{
					id: 4,
					title: 'Phone',
					details: '8109387343',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Solarsafekleen provides reliable solar energy solutions, specializing in the installation and maintenance of high-quality solar panels. We ensure optimal performance and longevity with personalized, cost-effective services. Our mission is to make the world greener by delivering excellence and trust.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'PHP',
						'Laravel',
						'MySQL',
						'HTML/CSS/JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Cross-Browser Compatibility',
					details: 'Ensuring consistent functionality and appearance across different browsers like Chrome, Firefox, Safari, and Edge can be challenging due to their varied rendering engines. Regular testing in multiple browsers and using tools like BrowserStack can help identify issues. Implementing CSS resets or normalizing CSS can reduce inconsistencies across browsers, ensuring a unified experience for users.'
				},
				{
					id: 2,
					heading: 'Responsive Design',
					details:'Achieving a fully responsive website that looks great on all devices, from desktops to mobile phones, is essential. This can be accomplished by employing responsive design techniques such as fluid grids, flexible images, and media queries. Frameworks like Bootstrap provide a solid foundation for building responsive sites, making it easier to cater to a diverse range of screen sizes and devices.'
				},
				{
					id: 3,
					heading: 'Performance Optimization',
					details:'Website performance is critical, especially for users on slower networks. Optimizing images, minifying CSS and JavaScript files, leveraging browser caching, and implementing lazy loading for images are key strategies to improve load times. Utilizing tools like Google PageSpeed Insights can help identify performance bottlenecks and guide further optimizations.'
				},
				{
					id: 4,
					heading: 'Security',
					details:'Protecting your website from vulnerabilities such as SQL injection, XSS, and CSRF is vital to maintaining user trust and data integrity. In PHP, using prepared statements and parameterized queries can mitigate SQL injection risks, while sanitizing user inputs helps prevent XSS attacks. Laravel CSRF tokens and regular updates to PHP and Laravel versions further enhance security.'
				},
				{
					id: 5,
					heading: 'Database Management',
					details:'Efficient database management is crucial for ensuring data integrity and smooth interactions with the database. Laravel Eloquent ORM simplifies database'
				},
				{
					id: 6,
					heading: 'Routing and URL Management',
					details:'Managing complex routing and ensuring clean, SEO-friendly URLs is essential in Laravel. Leveraging Laravel’s robust routing system and using named routes can streamline URL management. Implementing slugs in URLs enhances SEO, making the website more discoverable and user-friendly while maintaining clean and organized routing.'
				},
				{
					id: 7,
					heading: 'State Management and Data Binding',
					details:'Handling state management and data binding in complex JavaScript applications can be challenging. Integrating JavaScript frameworks or libraries like Vue.js or React with Laravel enhances state management and data binding capabilities. Vue.js, in particular, integrates seamlessly with Laravel, offering an efficient way to manage application state and user interactions.'
				},
				{
					id: 8,
					heading: 'User Authentication and Authorization',
					details:'Implementing secure user authentication and role-based access control is crucial for protecting sensitive data and managing user permissions. Laravel’s built-in authentication scaffolding and middleware provide a robust framework for managing user roles and permissions, ensuring secure and controlled access to different parts of the application.'
				},
				{
					id: 9,
					heading: 'Error Handling and Debugging',
					details:'Efficient error handling and debugging are essential for maintaining a smooth user experience and identifying issues quickly. Laravel’s built-in error handling features and tools like Laravel Debugbar facilitate effective debugging. Implementing proper logging through Laravel’s logging channels ensures that errors are tracked and can be addressed promptly.	'
				},
				{
					id: 10,
					heading: 'Deployment and Version Control',
					details:'Deploying a Laravel application to a live server while managing versions and updates can be complex. Using Git for version control and platforms like GitHub or GitLab for code management simplifies the process. Deployment services like Forge, or platforms like AWS, DigitalOcean, or Heroku, streamline the deployment process, ensuring that updates and changes are managed efficiently.'
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],
		},
		// RelatedProject: {
		// 	title: 'Related Projects',
		// 	Projects: [
		// 		{
		// 			id: 1,
		// 			title: 'Mobile UI',
		// 			img: Image4,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: 'Web Application',
		// 			img: Image5,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: 'UI Design',
		// 			img: Image6,
		// 		},
		// 		{
		// 			id: 4,
		// 			title: 'Kabul Mobile App UI',
		// 			img: Image3,
		// 		},
		// 	],
		// },
	},
	
	{

		id: 3,
		title: 'Portfolio',
		category: 'Web Application',
		img: SolarSafeKleen,
		ProjectHeader: {
			title: 'Portfolio',
			publishDate: 'Aug 20, 2024',
			tags: 'HTML/CSS/JavaScript/React/Tailwind',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Portfolio',
				img: Portfolio1,
			},
			{
				id: 2,
				title: 'Portfolio',
				img: Portfolio2,
			},
			{
				id: 3,
				title: 'Portfolio',
				img: Portfolio3,
			},
			// {
			// 	id: 4,
			// 	title: 'SolarSafeKleen',
			// 	img: SolarSafeKleen3,
			// },
			
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Portfolio Project',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Personal Project',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.solarsafekleen.com/',
				},
				{
					id: 4,
					title: 'Phone',
					details: '8109387343',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To design and develop a personal portfolio website that effectively highlights my professional skills, projects, and achievements in the fields of [Your Specialization, e.g., Web Development, Data Science, UI/UX Design, etc.]. The website will serve as a dynamic, visually appealing platform to present my work, demonstrate my expertise, and provide potential employers, clients, and collaborators with an easy way to contact me',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'Tailwind',
						'HTML',
						'CSS/JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Responsive Design',
					details: 'Ensuring that the website looks good on all screen sizes and devices can be tricky. Tailwind CSS provides utility classes for responsiveness, but fine-tuning components to work across various viewports can still be challenging.'				},
				{
					id: 2,
					heading: 'Tailwind CSS Customization',
					details:'Tailwind is utility-first, which means a lot of styling can be done through class names. However, creating complex designs might require custom configurations or extending Tailwind, which can be complex.'
				},
				{
					id: 3,
					heading: 'Performance Optimization',
					details:'React is powerful, but if not optimized, it can lead to performance issues. Managing component re-renders, optimizing images, and ensuring smooth animations are crucial to maintaining performance.'
				},
				{
					id: 4,
					heading: 'State Management',
					details:'Managing state effectively in a React application, especially when dealing with forms, user interactions, and dynamic content, can be challenging. Deciding when to lift state up, use context, or external state management libraries like Redux can be difficult.'
				},
				{
					id: 5,
					heading: 'SEO and Accessibility:',
					details:'Making a React-based website SEO-friendly and accessible requires additional steps. Ensuring proper metadata, implementing server-side rendering (SSR) or static site generation (SSG), and following accessibility guidelines are important challenges.'
				},
				{
					id: 6,
					heading: 'Deploying to GitHub Pages',
					details:'Deploying a React app to GitHub Pages involves building the project, configuring the repository correctly, and ensuring that routing works as expected. Handling custom domains and HTTPS can add extra complexity.'				},
				{
					id: 7,
					heading: 'Integrating Third-Party Services:',
					details:'Integrating services like EmailJS for form submissions or Google Analytics for tracking requires careful configuration and handling of API keys securely.'
				},
				{
					id: 8,
					heading: 'Form Handling',
					details:'Handling forms, especially with validation and connecting to services like EmailJS, requires careful attention. Ensuring that forms are user-friendly, error messages are clear, and submissions are smooth can be challenging.'
				},
				{
					id: 9,
					heading: 'Dark Mode and Theming',
					details:'Implementing dark mode and other theming options with Tailwind CSS requires a well-structured approach to avoid conflicts and ensure a consistent look across the website.'
				},
				{
					id: 10,
					heading: 'Maintaining a Clean Codebase:',
					details:'As the project grows, keeping the codebase clean, modular, and maintainable can be a challenge. Ensuring reusable components, avoiding code duplication, and following best practices in React development are key.'
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],
		},
	},
];