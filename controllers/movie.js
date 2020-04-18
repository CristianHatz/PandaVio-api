const movieService = require('../services/movie')
const configs = require('../configs')

module.exports.uploadMovie = async (req, res, next) => {
  console.log(req)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files.sampleFile;

  try{
   await movieService.uploadMovie(sampleFile, configs.MOVIE_PATH, sampleFile.name)
  }
  catch(err){
    return res.status(500).send(err);
  }
  res.status(200).send('File uploaded!')
}