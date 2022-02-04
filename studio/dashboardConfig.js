export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fd7648ec806d00ae661edb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hq5gkcxc',
                  apiId: '825ba650-6b43-4b3c-aed3-8384c8224133'
                },
                {
                  buildHookId: '61fd76448e62f50080df5af4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uot2337i',
                  apiId: '08a81ea1-ebf5-4439-854c-b219d224b96e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drobinhood/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uot2337i.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
