using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebMovie.Context;
using WebMovie.Models;

namespace WebMovie.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        

        [HttpGet("[action]")]
        public List<Movie> Get()
        {
            return WebMoviesDBContext.GetMovie(); 
        }


        [HttpDelete("{id}")]
        public void DeleteById(int id)
        {
            WebMoviesDBContext.DeleteMovieById(id);
        }

        [HttpPost]
        public void AddMovie(Movie movie)
        {
            WebMoviesDBContext.AddMovie(movie);
        }

        [HttpPost]
        public void UpdateMovie(Movie movie)
        {
            WebMoviesDBContext.UpdateMovie(movie);
        }

    }
}
