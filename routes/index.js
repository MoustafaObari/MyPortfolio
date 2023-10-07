var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next){
  res.render('projects', { title: 'Projects' });
 });

router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.post('/contact', (req, res) => {
const { firstName, lastName, contactNumber, email, message } = req.body;

  console.log('Received Contact Form Submission:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Contact Number:', contactNumber);
  console.log('Email:', email);
  console.log('Message:', message);

  res.redirect('/');
});
module.exports = router;
