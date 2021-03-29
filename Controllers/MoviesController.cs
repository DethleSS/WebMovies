using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebMovie.Context;
using WebMovie.Models;
using LiteDB;

namespace WebMovie.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        [HttpGet]
        public List<Movie> Get()
        {
            return WebMoviesDBContext.GetMovie(); 
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            WebMoviesDBContext.DeleteMovieById(id);
        }

        [HttpPost]
        public void AddMovie([FromBody]Movie movie)
        {
            WebMoviesDBContext.AddMovie(movie);

        }

        [HttpPut]
        public void UpdateMovie([FromBody]Movie movie)
        {
            WebMoviesDBContext.UpdateMovie(movie);

        }

    }
}
