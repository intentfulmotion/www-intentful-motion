import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero is-large">
		<div className="hero-body">
			<div className="container center">
				<div className="content has-text-centered">
					<h2 className="is-title is-size-1">The safety net for micromobility</h2>
					<h6 className="is-subtitle is-size-6">More information soon.</h6> 
				</div>
			</div>
		</div>
		<div className="hero-footer">
			<div className="container center">
				<div className="content has-text-centered">
					<a className="amp-product" href="https://amp.intentfulmotion.com">aMp</a>
					<h6 className="is-subtitle is-size-6">Looking for our smart lighting kit? Find it at it's new home here</h6>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
