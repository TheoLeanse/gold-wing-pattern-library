import React from 'react';

export default ({ data }) => (
	<div>
		<div>Gold Wing pattern library</div>
		{data.allMarkdownRemark.edges.map(edge => (
			<div>
				<div>{edge.node.frontmatter.title}</div>
				<div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
			</div>
		))}
	</div>
);

export const pageQuery = graphql`
	query AllPatterns {
		allMarkdownRemark {
			edges {
				node {
					id
					html
					frontmatter {
						title
						path
						date
					}
				}
			}
		}
	}
`;
