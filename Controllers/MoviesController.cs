using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebMovie.Context;
using WebMovie.Models;
using LiteDB;
using Microsoft.Extensions.Configuration;

namespace WebMovie.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        readonly IRepository db;

        public MoviesController(IConfiguration configuration)
        {
            db = new DBLiteMovieRepository(configuration);
        }
        [HttpGet]
        public List<Movie> Get()
        {
            return db.GetMovies();          
        }

        [HttpGet("{id}")]
        public Movie GetById(int id)
        {
            return db.GetMovieById(id);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            db.DeleteMovieById(id);
        }

        [HttpPost]
        public void AddMovie([FromBody]Movie movie)
        {
            db.AddMovie(movie);
        }

        [HttpPut]
        public void UpdateMovie([FromBody]Movie movie)
        {
            db.UpdateMovie(movie);
        }

    }
}
