const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Rosie\'s Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  base:'/rosie_blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // Please keep looking down to see the available options.
    dateFormat: 'YYYY-MM-DD',
    nav: [
        {
          text:'Blog',
          link:'/'
        },
        // {
        //   text:'Tags',
        //   link:'/tag/'
        // },
        // Config For using plugin only
        {
          text:'Writings',
          link:'/writings/'
        }
    ],
    directories:[
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
      },
      {
        // Config for using plugin only
        id: 'writing', // Unique id for current classifier
        dirname: '_writings', // Matched directory name
        path: '/writings/', // Entry page for current classifier
        title: 'Writings', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter:{ //Front matter for entry page.
          tag: 'vuepress'
        },
        itemLayout: 'Writing', // Layout for matched pages.
        itemPermalink: '/writings/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
          lengthPerPage: 5, // Default
        },
      }
    ],
    globalPagination:
    {
      prevText:'Previous', // Text for previous links.
      nextText:'Next', // Text for next links.
      //lengthPerPage:'2', // Maximum number of posts per page.
      layout:'Pagination', // Layout for pagination page
    },
    footer: {
      contact: [
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/rosieyu1995/',
        },
      ],
    },
    smoothScroll: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
