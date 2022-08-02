const router = require('express').Router();
const apiRoutes = require('./api');
// const product = require('./api/product-routes');

router.use('/api', apiRoutes);
// router.use('/api/product-routes', product);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;