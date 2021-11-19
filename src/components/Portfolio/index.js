import React from 'react';
import Project from '../Project';


function Portfolio() {
	const projects = [
		{
			name: 'Georgia Screen Movie app',
			description:
				'Georgia Screen Movie app. Here you can gather additional information about a movie simply by entering its name. ',
			image: 'movieProject-image.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				],
			github: 'https://github.com/Skylar-Harwell/Movie_Project',
			deployed: 'https://skylar-harwell.github.io/Movie_Project/',
		},
		{
			name: 'Code Refactor',
			description:
				'This is a Code Refactoring project. Refactoring is the improving of code without changing what it does. The Scout Rule was used here.',
			image: 'digital-marketing-meeting-image.jpg',
			technologies: [
				'HTML/CSS',
				],
			github: 'https://github.com/uekemike/CodeRefactor_HW',
			deployed: 'https://uekemike.github.io/CodeRefactor_HW/',
		},
		{
			name: 'Day Planner',
			description:
				'A simple calendar application that allows a user to save events for each hour of the day.',
			image: 'workdayScheduler-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/uekemike/DailyPlanner',
			deployed: 'https://uekemike.github.io/DailyPlanner/',
		},
		{
			name: 'Progressive Budget',
			description:
				'Progressive Budget is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.PNG',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/uekemike/BudgetTrackers',
			deployed: '',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weatherDashboard-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/uekemike/Weather-Dashboard',
			deployed: 'https://uekemike.github.io/Weather-Dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'passwordgenerator-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/uekemike/PasswordGenerator',
			deployed: 'https://uekemike.github.io/PasswordGenerator/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/uekemike/Note_Taker',
			deployed: 'https://stormy-falls-10110.herokuapp.com/'
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
						
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;