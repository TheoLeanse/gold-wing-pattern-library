module.exports = {
	plugins: [
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/pattern`,
				name: 'pattern'
			}
		},
		`gatsby-transformer-remark`
	]
};
