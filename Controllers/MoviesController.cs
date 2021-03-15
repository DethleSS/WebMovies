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
        

        // GET: api/Movies
        [HttpGet("[action]")]
        public List<Movie> Get()
        {
            return WebMoviesDBContext.GetMovie(); 
        }

        [HttpGet("[action]")]
        public void DeleteById(int id)
        {
            WebMoviesDBContext.DeleteMovieById(id);
        }

    }
}
