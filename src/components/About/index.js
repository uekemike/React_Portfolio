import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Ufuoma.PNG').default}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				    QA Engineer currently learning to be a full stack developer at Gerogia Tech
					bootcamp. Learning  new skils like JavaScript, CSS, React.js, and responsive web
					design. With a focus on	mobile-first design and development. With each project,
					my aim is to imporve my skill set for a better understanding and to deliver my 
					projects with industry best practice.
				</p>
			</div>
		</section>
	);
}

export default About;