class MovieService {
  async uploadMovie(sampleFile, path='./movies', name) {
    await sampleFile.mv(`${path}/${name}`)
  }
}

module.exports = new MovieService()