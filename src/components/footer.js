import React from 'react';
import './style.scss';

const Footer = () => (
	<footer className="footer center has-background-primary has-text-white">
		<p className="is-size-6 has-text-centered">
			&copy; {new Date().getFullYear()} Intentful Motion, Inc.
		</p>
	</footer>
);

export default Footer;
