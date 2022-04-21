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
				    
				</p>
			</div>
		</section>
	);
}

export default About;
