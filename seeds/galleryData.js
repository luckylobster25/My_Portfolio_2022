const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'PROJECTS',
  },
  {
    name: 'CONNECT WITH ME',
  },
  {
    name: 'RESUME',

  },
  {
    name: 'ABOUT ME',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
