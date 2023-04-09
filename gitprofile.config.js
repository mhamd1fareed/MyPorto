// gitprofile.config.js
const config = {
  github: {
    username: 'mhamd1fareed', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['MyPorto'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    facebook: '',
    phone: '0956983371',
    email: 'mhamd1fareed@gmail.com'
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1zzwScdRCEC3zDKx2_k-N8OCkPRlKcvXU/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'Restfull API',
    'MVC Design Pattern',
    'SQL/MySQL',
    'Git/Github',
    'Postman',
    'C++',
    'Java',
    'OOP',
    'CSS',
    'HTML5',
    'Problem Solving',
    'Team Work',
    
  ],
  certifications: [
    {
      name: 'Learn Laravel 8 API Development Tutorial Step by Step',
      body: 'by Sanjy Komar ',
      year: '',
      link: '',
    },
    {
      name: 'Learn Laravel in Arabic',
      body: 'by Ahmed Imam',
      year: ' ',
      link: '',
    },

    {
      name: 'Laravel API Server from Scratch',
      body: 'by Sam [Acadea.io youtube]',
      year: '',
      link: '',
    },
    {
      name: 'Data structure and algorithm',
      body: 'Adel Naseem',
      year: '',
      link: '',
    },
  ],
  education: [
    {
      institution: 'IT Engineering',
      degree: 'Damascus University',
      from: '2019',
      to: 'now',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: 'NATOURS',
  //     description: 'Natours is a beautiful website showcasing advanced skills in Sass. The website is designed to be visually stunning and to showcase the power of Sass. The website includes several advanced features such as custom grids, responsive design, mixins, and more.',
  //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU144JSb4SvYCnxaZ4fBZi0bZtw3AEnepjAQ&usqp=CAU',
      
  //   },
  //   {
  //     title: 'Netflix Clone',
  //     description:
  //       'This project is a front-end only clone of the popular streaming platform, Netflix, built using ReactJS and styled using SASS',
  //     imageUrl:'data:image/png;base64,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',
     
  //   },
  //   {
  //     title: 'BookingApp',
  //     description:
  //       'A front-end only booking app inspired by Booking.com, built using ReactJS and styled with pure CSS',
  //     imageUrl: 'https://downloadr2.apkmirror.com/wp-content/uploads/2019/03/5c825dd78028b.png',
     
  //   },
  //   {
  //     title: 'MealMate',
  //     description:
  //       'A food ordering app that allows users to choose from a list of food items in the menu and add them to the cart for ordering',
  //     imageUrl: 'https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg',
   
  //   },
  //   {
  //     title: 'Admin DashBoard',

  //   },
  //   {
  //     title: 'MUI-Social-Media',
  //     description:'This project was built using ReactJS and the Material-UI (MUI) library',
  //     imageUrl: 'https://mui.com/static/logo.png',
     
  //   },
  //   {
  //     title: 'OneForAll',
  //     description:'OneForAll, it is a fully functioning C2C E-commerce website where people get to buy and sell products through a points-based billing system. And for the administrator there is a dashboard where he can manage the whole website',
  //     imageUrl: 'https://camo.githubusercontent.com/d7d18135e7fece8fbdaaba6e59c32f88bd893c344fa00cd5ad8297573e094e67/68747470733a2f2f692e6962622e636f2f5648674b7044682f4f6e652d466f722d416c6c2d312e706e67',
  //     link: 'https://www.youtube.com/watch?v=PU6Gmy2KrZI&feature=youtu.be',
  //   },
  // ],
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
