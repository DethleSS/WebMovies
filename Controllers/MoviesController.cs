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
        public void Post(String name)
        {
            WebMoviesDBContext.AddMovie(name);
        }


    }
}
