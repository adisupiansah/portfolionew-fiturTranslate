// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://adisupiansah.my.id',
  generateRobotsTxt: true,
  exclude: ['/404'],
  additionalPaths: async (params) => {
    return [
      { loc: '/', changefreq: 'daily', priority: 0.9 },
      { loc: '/about', changefreq: 'weekly', priority: 0.8 },
      { loc: '/comment', changefreq: 'monthly', priority: 0.7 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
      { loc: '/project', changefreq: 'monthly', priority: 0.5 },
    ];
  },
};