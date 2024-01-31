
const express = require('express');
const router = express.Router();
const s3Controller = require('../controllers/s3Controller');

router.get('/:bucket/:key', s3Controller.getObject);
router.post('/:bucket/:key', s3Controller.putObject);
router.delete('/:bucket/:key', s3Controller.deleteObject);
router.get('/:bucket', s3Controller.listObjects);
router.get('/', s3Controller.listBuckets);

module.exports = router;
