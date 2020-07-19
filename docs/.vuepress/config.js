const pluginsConfig = require("./config/pluginsConfig");
const secret = require("./config/secret");

module.exports = {
    base: '/docs/',
    plugins: pluginsConfig,
    locales: {
      '/':{
        lang: 'zh-Hans',
        title: '社区指南'
      }
    },
    head:  [
        ['meta', { name: 'author', content: 'FlarumCN'}],
        ['meta', { name: 'keywords', content: 'Flarum 中文社区, FlarumCN, 社区文档, 社区指南'}],
        ['link', { rel: 'icon', href: '/assets/img/ico.png' }],
    ],

    themeConfig: {
      // logo: '/assets/img/logo.webp',
      smoothScroll: true,
      nav: [
        { text: '指南', link: '/protocol.html' },
        { text: '主站', link: 'https://www.flarum.org.cn/' },
        { text: '社区', link: 'https://discuss.flarum.org.cn/', target:'_self', rel:''  },
      ],
      sidebar: [
        {
          title: '第一部分：用户协议',
          collapsable: false, // 展开侧边栏分组
          children: [
            'protocol'
          ]
        },
      ],
      lastUpdated: '上次更新',
      docsRepo: 'https://gitee.com/FlarumCN/Guidelines',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: '纠错改进！'
    },
    
  }