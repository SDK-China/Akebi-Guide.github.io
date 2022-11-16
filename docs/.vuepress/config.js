module.exports = {
    head: [
        [
            'link',
            { rel: 'icon', href: 'logo_ico.png' }
        ]
    ],
    title: '',
    description: 'A Easy Guide for Akebi',
    nextLinks: true,
    prevLinks: true,
    themeConfig: {
        sidebar: {
            '/guide/': [
                '',
                'guide',
                'gui',
                'teleports'
            ],
        },
        displayAllHeaders: true,
        logo: '/assets/img/akebigc.png',
    }
}
// module.exports = {
// }