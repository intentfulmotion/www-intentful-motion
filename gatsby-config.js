module.exports = {
	siteMetadata: {
		title: 'Intentful Motion',
		author: 'Nishanth Samala',
		siteUrl: 'https://intentfulmotion.com',
		description: 'The safety net for micromobility',
		keywords: `Micromobility, smart lighting, smart cities, urban planning, electric bicycles, scooters, e-bikes, longboards, e-skate, electric longboards, skateboards, onewheel, boosted`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Intentful Motion',
				short_name: 'Intentful Motion',
				start_url: '/',
				background_color: '#0B2D39',
				theme_color: '#0B2D39',
				display: 'standalone',
				icon: 'src/images/logo.svg',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
