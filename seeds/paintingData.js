const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Weather App',
    artist: 'https://luckylobster25.github.io/weather/',
    exhibition_date: 'This is my weather application using a third party api for weather data. This application was one of the few homeworks in the early stage of class.',
    gallery_id: 1,
    filename: 'weather_app.png',
    description:'https://github.com/luckylobster25/weather',
  },
  {
    title: 'MTT Tech-Blog',
    artist: 'https://thawing-peak-67886.herokuapp.com/',
    exhibition_date: 'This is one of my most recent class homework. It is a full stack web application with user log in.',
    gallery_id: 1,
    filename: 'tech-blog.png',
    description: 'https://github.com/luckylobster25/Tech-Blog',
  },
  {
    title: 'ACH Game Reviews',
    artist: 'https://mighty-beyond-89277.herokuapp.com/',
    exhibition_date: 'This is one of my group project along with my two other classmates. It is a full stack web application with front and back end codes.',
    gallery_id: 1,
    filename: 'game_review.png',
    description: 'https://github.com/luckylobster25/Project_2',
  },
  {
    title: 'Sand + Sea = Summer',
    artist: 'S_Photo',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: '03-sand-sea-summer.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Beach Chairs',
    artist: 'icemanphotos',
    exhibition_date: 'July 4, 2020',
    gallery_id: 2,
    filename: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    artist: 'VRstudio',
    exhibition_date: 'August 14, 2016',
    gallery_id: 2,
    filename: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Colors',
    artist: 'DrivingJack',
    exhibition_date: 'October 15, 2018',
    gallery_id: 3,
    filename: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    artist: 'Vitalii_Mamchuk',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: '07-autumn-mountains.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    artist: 'Vlad Sokolovsky',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: '08-frozen-river.jpg',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
