/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

module.exports = {
  // 这里配置的是产品名称，产品名称中间有空格的，使用下划线代替，如 iDesktop_Java
  pathPrefix: `/iDesktop`,
  siteMetadata: {
    title: 'React: 看看这是控制首页吗',
    siteUrl: 'https://reactjs.org',
    // rssFeedTitle: 'React',
    // rssFeedDescription: 'Rss是哪里',
    // languages: {
    //   langs: ['en', 'zh'],
    //   defaultLangKey: 'en'
    // }
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-source-react-error-codes',
    'gatsby-transformer-authors-yaml',
    // 'gatsby-transformer-home-example-code',
    'gatsby-transformer-versions-yaml',
    'gatsby-plugin-netlify',
    'gatsby-plugin-glamor',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#61dafb',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content/zh',
        path: `${__dirname}/content/zh`,
      },
    },  
     {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content/en',
        path: `${__dirname}/content/en`,
      },
    },
    // `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840,
            },
          },
          'gatsby-remark-header-custom-ids',
          // {
          //   resolve: 'gatsby-remark-code-repls',
          //   options: {
          //     defaultText: '<b>Try it on CodePen</b>',
          //     directory: `${__dirname}/examples/`,
          //     externals: [
          //       `//unpkg.com/react/umd/react.development.js`,
          //       `//unpkg.com/react-dom/umd/react-dom.development.js`,
          //     ],
          //     dependencies: [`react`, `react-dom`],
          //     redirectTemplate: `${__dirname}/src/templates/codepen-example.js`,
          //     target: '_blank',
          //   },
          // },
          // {
          //   resolve: 'gatsby-remark-embed-snippet',
          //   options: {
          //     classPrefix: 'gatsby-code-',
          //     directory: `${__dirname}/examples/`,
          //   },
          // },
          'gatsby-remark-use-jsx',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-41298772-1',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //      {
    //       site {
    //         siteMetadata {
    //           title: rssFeedTitle
    //           description: rssFeedDescription
    //           siteUrl
    //           site_url: siteUrl
    //         }
    //       }
    //     }`,
    //     feeds: [
    //       {
    //         serialize: ({query: {site, allMarkdownRemark}}) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign(
    //               {},
    //               {
    //                 title: edge.node.frontmatter.title,
    //                 description: edge.node.html,
    //                 date: require('moment')(edge.node.fields.date).format(
    //                   'MMMM DD, YYYY, h:mm A',
    //                 ),
    //                 url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //                 guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               },
    //             );
    //           });
    //         },
    //         query: `
    //           {
    //               allMarkdownRemark
    //               (limit: 10,
    //               filter: {fileAbsolutePath: {regex: "/blog/"}},
    //               sort: {fields: [fields___date],
    //               order: DESC}) {
    //                 edges {
    //                   node {
    //                     fields {
    //                       date
    //                       slug
    //                     }
    //                     frontmatter {
    //                       title
    //                     }
    //                     html
    //                   }
    //                 }
    //               }
    //             }
    //         `,
    //         output: '/feed.xml',
    //       },
    //     ],
    //   },
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'en',
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: true,
        pagesPaths: ['/content/', '/src/pages/'],
      },
    },
  ],
};

const myQuery = `{
  allSitePage {
    nodes {
      objectID: id
      component
      path
      componentChunkName
      internal {
        type
        contentDigest
        owner
      }
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'index name to target', // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];

// module.exports = {
//   plugins: [
//     {
//       // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
//       resolve: `gatsby-plugin-algolia`,
//       options: {
//         appId: "0260N9RE38",
//         // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
//         // Tip: use Search API key with GATSBY_ prefix to access the service from within components
//         apiKey: "b03ab47c329f6c18945a50b8f09d3771",
//         indexName:"idesktop-zh9", // for all queries
//         queries,
//         chunkSize: 10000, // default: 1000
//         settings: {
//           // optional, any index settings
//           // Note: by supplying settings, you will overwrite all existing settings on the index
//         },
//         enablePartialUpdates: true, // default: false
//         matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
//         concurrentQueries: false, // default: true
//         skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
//       },
//     },
//   ],
// };