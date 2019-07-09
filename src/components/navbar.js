import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import Logo from '../images/logo.svg'

const Navbar = () => {
	const toggleMobileMenu = () => {
		document.getElementById("mobile-menu").classList.toggle('is-active')
		document.getElementById("navbar-menu").classList.toggle('is-active')
	}

	return (
		<div className="container">
			<nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a href="/">
						<figure className="image is-128x128">
							<img src={Logo} alt="Intentful Motion" />
						</figure>
					</a>
					<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" id="mobile-menu" onClick={() => {toggleMobileMenu()}}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbar-menu" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Products</a>
							<div className="navbar-dropdown box">
								<a className="navbar-item amp-product" href="https://amp.intentfulmotion.com">aMp</a>
							</div>
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Solutions</a>
							<div className="navbar-dropdown box">
								<div className="columns">
									<div className="column">
										<h6 className="is-subtitle is-size-6">Industries</h6>
										<a className="navbar-item">Smart Cities</a>
										<a className="navbar-item">Shared Mobility</a>
										<a className="navbar-item">Self Driving Cars</a>
										<a className="navbar-item">Mapping</a>
									</div>
									<div className="column">
										<h6 className="is-subtitle is-size-6">Use Cases</h6>
										<a className="navbar-item">Machine Learning</a>
									</div>
								</div>
							</div>
						</div>
						<a className="navbar-item">About</a>
						<a className="navbar-item">Blog</a>
					</div>
				</div>
			</nav>
		</div>
	)
};

export default Navbar;
