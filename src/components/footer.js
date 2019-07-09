import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-primary has-text-white">
				<p className="is-size-6 has-text-centered">
					&copy; {new Date().getFullYear()} Intentful Motion, Inc.
				</p>
			</footer>
		)}
	/>
);

export default Footer;
