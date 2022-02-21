const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'PROJECTS',
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
    weatherapp: 'https://luckylobster25.github.io/weather/',
    techblog: 'https://thawing-peak-67886.herokuapp.com/',
    gamereview: 'https://mighty-beyond-89277.herokuapp.com/'
  },
  {
    name: 'CONNECT WITH ME',
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    name: 'RESUME',
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    name: 'ABOUT ME',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
