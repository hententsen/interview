module.exports = {
  title: '我的博客',
  description: 'XXX',
  theme: 'reco',
  base: '/interview/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "himiao的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/4101609822356871" },
          { text: "Gitee", link: "https://gitee.com/hesenk" }
        ]
      }
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/1" },
          { title: "第二篇", path: "/handbook/2" },
        ]
      } 
    ]
  }
}