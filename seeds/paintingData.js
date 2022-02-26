const { Painting } = require('../models');

const paintingdata = [
  // Project seed --- start
  {
    title: 'Weather App',
    link: 'https://luckylobster25.github.io/weather/',
    textBox: 'This is my weather application using a third party api for weather data. This application was one of the few homeworks in the early stage of class.',
    gallery_id: 1,
    filename: 'weather_app.png',
    description:'https://github.com/luckylobster25/weather',
  },
  {
    title: 'MTT Tech-Blog',
    link: 'https://thawing-peak-67886.herokuapp.com/',
    textBox: 'This is one of my most recent class homework. It is a full stack web application with user log in.',
    gallery_id: 1,
    filename: 'tech-blog.png',
    description: 'https://github.com/luckylobster25/Tech-Blog',
  },
  {
    title: 'ACH Game Reviews',
    link: 'https://mighty-beyond-89277.herokuapp.com/',
    textBox: 'This is one of my group project along with my two other classmates. It is a full stack web application with front and back end codes.',
    gallery_id: 1,
    filename: 'game_review.png',
    description: 'https://github.com/luckylobster25/Project_2',
  },
  // Project seed --- end
  // **********************************************
  // Connect with me --- start
  {
    title: 'GitHub',
    link: 'S_Photo',
    textBox: 'June 10, 2019',
    gallery_id: 2,
    filename: 'github.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'LinkedIn',
    link: 'icemanphotos',
    textBox: 'July 4, 2020',
    gallery_id: 2,
    filename: 'linkedin.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  // Connect with me --- end
  {
    title: 'Fall Colors',
    link: 'DrivingJack',
    textBox: 'October 15, 2018',
    gallery_id: 3,
    filename: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    link: 'Vitalii_Mamchuk',
    textBox: 'November 3, 2016',
    gallery_id: 3,
    filename: '07-autumn-mountains.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    link: 'Vlad Sokolovsky',
    textBox: 'December 24, 2020',
    gallery_id: 4,
    filename: '08-frozen-river.jpg',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    link: 'Smit',
    textBox: 'January 20, 2018',
    gallery_id: 4,
    filename: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
