import { defineConfig } from 'vitepress'

import { teams, studios} from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "\"智-工坊\"创新工作室",
  description: "Documentation by community of Wisdom Studio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组别', link: '/teams' },
      { text: '工作室', link: '/studios'}
    ],

    sidebar: {
      '/teams/' : teams,
      '/studios/' : studios,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer : {
      message: "MIT License",
      copyright: "Copyrigt © 2023 Wisdom Studio Community"
    },
    outlineTitle: '本页大纲',
    docFooter : {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '黑暗模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部 ▲'
  },
})
