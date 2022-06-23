module.exports = {
  siteTitle: 'Laurei  | Software Engineer',
  siteDescription:
    'Laurei is a Software Engineering Graduate who loves to create innovative apps.',
  siteKeywords:
    'Laurei , software engineer, java, spring boot, freelance, rest apis',
  siteUrl: 'https://jeaaanius.github.io/',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Laurei ',
  location: 'South Wales, United Kingdom',
  email: 'reicraftscodes@gmail.com',
  github: 'https://github.com/reicraftscodes',
  twitterHandle: '@reicraftscode',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/reicraftscodes',
    },
    {
      name: 'Dribble',
      url: 'https://dribbble.com/reicraftscodes/shots',
    }
    // {
    //   name: 'Linkedin',
    //   url: 'https://www.linkedin.com/in/aljan-porquillo/',
    // },
    // {
    //   name: 'PlayStore',
    //   url: 'https://play.google.com/store/apps/dev?id=5739547867444494455',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/strongforce1',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#FFFFFF',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
