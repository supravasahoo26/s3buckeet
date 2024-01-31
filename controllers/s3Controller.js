// controllers/s3Controller.js
const s3Service = require('../services/s3Service');

const getObject = (req, res) => {
  // Implement logic to retrieve object
  const { bucket, key } = req.params;
  const object = s3Service.getObject(bucket, key);
  if (object) {
    res.json(object);
  } else {
    res.status(404).json({ error: 'Object not found' });
  }
};

const putObject = (req, res) => {
  // Implement logic to store object
  const { bucket, key } = req.params;
  const data = req.body;
  s3Service.putObject(bucket, key, data);
  res.json({ message: 'Object stored successfully' });
};

const deleteObject = (req, res) => {
  // Implement logic to delete object
  const { bucket, key } = req.params;
  if (s3Service.deleteObject(bucket, key)) {
    res.json({ message: 'Object deleted successfully' });
  } else {
    res.status(404).json({ error: 'Object not found' });
  }
};

const listObjects = (req, res) => {
  // Implement logic to list objects in the bucket with optional prefix
  const { bucket } = req.params;
  const prefix = req.query.prefix || '';
  const objects = s3Service.listObjects(bucket, prefix);
  res.json(objects);
};

const listBuckets = (req, res) => {
  // Implement logic to list buckets
  const buckets = s3Service.listBuckets();
  res.json(buckets);
};

module.exports = {
  getObject,
  putObject,
  deleteObject,
  listObjects,
  listBuckets,
};
