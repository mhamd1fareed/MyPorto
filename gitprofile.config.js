// gitprofile.config.js
const config = {
  github: {
    username: 'BilalYounes', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'http://www.Linkedin.com/in/bilal-younes-2a5591211',
    facebook: '',
    phone: '0982431524',
    email: 'bilalyounes1999@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1zzwScdRCEC3zDKx2_k-N8OCkPRlKcvXU/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'TypeScript',
    'Redux',
    'Git/Github',
    'CSS',
    'HTML5',
    'BootStrap',
    'Material UI',
    'Problem Soliving',
    'Python',
    'C/C++',
  ],
  certifications: [
    {
      name: 'Udemy 28 hours',
      body: 'by Jonas Schmedtmann ',
      year: 'Advanced CSS and sass Flexbox, Grid Animation and more ',
      link: '',
    },
    {
      name: 'Udemy 20 hours',
      body: 'by The Net Ninja (Shaun Pelling)  ',
      year: 'Modern JavaScript (Complete guide, from Novice to Ninja ',
      link: '',
    },
    {
      name: 'udemy 23.5 hours',
      body: 'by The Net Ninja (Shaun Pelling)  ',
      year: 'Build Web Apps with React & Firebase ',
      link: '',
    },
    {
      name: 'udemy 50 hours',
      body: 'by Academind by Maximilian Schwarzmüller  ',
      year: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
      link: '',
    },
  ],
  education: [
    {
      institution: 'IT Engineering',
      degree: 'Damascus University',
      from: '2018',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'NATOURS',
      description: 'Natours is a beautiful website showcasing advanced skills in Sass. The website is designed to be visually stunning and to showcase the power of Sass. The website includes several advanced features such as custom grids, responsive design, mixins, and more.',
      imageUrl:'https://www.robertkevinphillips.com/images/portfolio/natours.jpg',
      link: 'https://bilalyounes.github.io/NATOURS/',
    },
    {
      title: 'Netflix Clone',
      description:
        'This project is a front-end only clone of the popular streaming platform, Netflix, built using ReactJS and styled using SASS',
      imageUrl:'data:image/png;base64,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',
      link: 'https://bilalyounes.github.io/NetflixClone/',
    },
    {
      title: 'BookingApp',
      description:
        'A front-end only booking app inspired by Booking.com, built using ReactJS and styled with pure CSS',
      imageUrl: 'https://downloadr2.apkmirror.com/wp-content/uploads/2019/03/5c825dd78028b.png',
      link: 'https://bilalyounes.github.io/BookingApp/',
    },
    {
      title: 'MealMate',
      description:
        'A food ordering app that allows users to choose from a list of food items in the menu and add them to the cart for ordering',
      imageUrl: 'https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg',
      link: 'https://bilalyounes.github.io/MealMate/',
    },
    {
      title: 'Admin DashBoard',
      description:'This Dashboard Admin App provides a visually appealing and user-friendly interface for displaying important data and information. The front-end has been developed using React.js, Sass, Recharts library, and Material UI components',
      imageUrl: 'data:image/png;base64,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',
      link: 'https://bilalyounes.github.io/AdminDashBoard/',
    },
    {
      title: 'MUI-Social-Media',
      description:'This project was built using ReactJS and the Material-UI (MUI) library',
      imageUrl: 'https://mui.com/static/logo.png',
      link: 'https://bilalyounes.github.io/MUI-Project/',
    },
    {
      title: 'OneForAll',
      description:'OneForAll, it is a fully functioning C2C E-commerce website where people get to buy and sell products through a points-based billing system. And for the administrator there is a dashboard where he can manage the whole website',
      imageUrl: 'https://camo.githubusercontent.com/d7d18135e7fece8fbdaaba6e59c32f88bd893c344fa00cd5ad8297573e094e67/68747470733a2f2f692e6962622e636f2f5648674b7044682f4f6e652d466f722d416c6c2d312e706e67',
      link: 'https://www.youtube.com/watch?v=PU6Gmy2KrZI&feature=youtu.be',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['dark','light'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
