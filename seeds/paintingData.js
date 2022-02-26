const { Painting } = require('../models');

const resumeDoc = function(){
  return `Email: chuechang.full.stack.developer@gmail.com`
}
const paintingdata = [
  // Project seed --- start
  {
    title: 'Weather App',
    link: 'https://luckylobster25.github.io/weather/',
    textBox: 'This is my weather application using a third party api for weather data. This application was one of the few homeworks in the early stage of class.',
    gallery_id: 1,
    filename: 'weather_app.png',
    optional:'https://github.com/luckylobster25/weather',
  },
  {
    title: 'MTT Tech-Blog',
    link: 'https://thawing-peak-67886.herokuapp.com/',
    textBox: 'This is one of my most recent class homework. It is a full stack web application with user log in.',
    gallery_id: 1,
    filename: 'tech-blog.png',
    optional: 'https://github.com/luckylobster25/Tech-Blog',
  },
  {
    title: 'ACH Game Reviews',
    link: 'https://mighty-beyond-89277.herokuapp.com/',
    textBox: 'This is one of my group project along with my two other classmates. It is a full stack web application with front and back end codes.',
    gallery_id: 1,
    filename: 'game_review.png',
    optional: 'https://github.com/luckylobster25/Project_2',
  },
  // Project seed --- end
  // **********************************************
  // Connect with me --- start
  {
    title: 'GitHub',
    link: 'https://github.com/luckylobster25',
    textBox: 'Visit my GitHub for more projects and activities.',
    gallery_id: 2,
    filename: 'github.jpg',
    optional: '',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chue-chang-674b71223/',
    textBox: 'LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Connect with me on LinkedIn.',
    gallery_id: 2,
    filename: 'linkedin.jpg',
    optional: '',
  },
  // Connect with me --- end
  // **********************************************
  // resume --- start
  {
    title: 'Resume',
    link: 'https://docs.google.com/document/d/1Md2YTnXiN5elxp-1gzQTzZ7vAKB9EYNo/edit?usp=sharing&ouid=102247594498975174947&rtpof=true&sd=true',
    textBox: resumeDoc(),
    gallery_id: 3,
    filename: 'resume.jpg',
    optional:
      '',
  },
  // resume --- end
  // **********************************************
  // about me --- start
  {
    title: 'Hiking',
    link: 'https://www.alltrails.com/us/minnesota',
    textBox: 'I like to hike and travel around the united states. ',
    gallery_id: 4,
    filename: 'hiking.JPEG',
    optional:
      '',
  },
  {
    title: 'League Of Legend',
    link: 'https://www.leagueoflegends.com/en-us/',
    textBox: 'League of Legend or "LOL" is one of my favorite game of all time.',
    gallery_id: 4,
    filename: 'leagueoflegend.jpg',
    optional:
      '',
  },
  {
    title: 'Gardening',
    link: 'https://www.miraclegro.com/en-us/library/gardening-basics/10-top-gardening-tips-beginners',
    textBox: 'During spring and summer, I love to plant flowers and vegatables around the house.',
    gallery_id: 4,
    filename: 'gardening.JPEG',
    optional:
      '',
  },
];
// about me --- end

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
