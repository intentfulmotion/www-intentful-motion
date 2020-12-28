import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						description
						keywords
					}
				}
			}
		`}
		render={data => (
		)}
	/>
);
