const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Using Node.js 14.x +
// use "lib" package from npm
const lib = require('lib')({token: 'tok_dev_6fxHjqhTnmm8XxyqsnUgYp1VeaxSEAFQTdXRGDBNHaUqf23jCGGeASHH2SeCWSsc'});


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
