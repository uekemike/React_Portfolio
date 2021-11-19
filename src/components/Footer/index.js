import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/uekemike"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("./../../assets/logos/github-logo.png").default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/ufuoma-ekemike-7741408b/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("./../../assets/logos/linkedin-logo.png").default}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/uekemike"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/twitter-logo.png").default}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;