import Movie from "../model/MovieModel.js";
class moviesController {
  //get/movie
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.find();
      res.status(200).json({
        message: "get all movie done",
        data: movies,
      });
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
  }
  //get/movie:id
  async getMoviesDetail(req, res) {
    try {
        const movies = await Movie.findById(req.params.id);
        if(!movies){
            return  res.status(404).json({
                message:"movie not found",
            })
        }
        res.status(200).json({
          message: "get movie detail done",
          data: movies,
        });
      } catch (error) {
          res.status(400).json({
              message:error.message
          })
      }
  }
  //post/movie
   async createMovies(req, res) {
    //req.body
     const newMovie = new Movie(req.body);
     const saveMovie = await newMovie.save();
     try {
      res.status(201).json({
        message:"create Movie successfully",
        data:saveMovie
     });
     } catch (error) {
        res.status(400).json({
          message:error.message
        });
     }
  }
  //put/movie/:id
  async updateMovies(req, res) {
    try {
      const movies = await Movie.findByIdAndUpdate(req.params.id,req.body);
      if(!movies){
          return res.status(404).json({
              message: "Movie not found"
          })
      }
      const updateMovies = await Movie.findById(req.params.id);
      res.status(200).json({
        message: "update movie successfully!!!",
        data: updateMovies
      });
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
  }
  //Delete/movie/:id
  async deleteMovies(req, res) {
    try {
        const movies = await Movie.findByIdAndDelete(req.params.id);
        if(!movies){
            return res.status(404).json({
                message: "Movie not found"
            })
        }
        res.status(200).json({
          message: "delete movie done",
        });
      } catch (error) {
          res.status(400).json({
              message:error.message
          })
      }
  }
}
export default moviesController;
