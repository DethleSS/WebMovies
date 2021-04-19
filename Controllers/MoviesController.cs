﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebMovie.MovieContext;
using WebMovie.Models;
using LiteDB;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using WebMovie.Settings;
using WebMovie.AuthContext;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace WebMovie.Controllers
{

    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        readonly IRepository db;
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);
        public MoviesController(IOptionsSnapshot<MovieSettings> settings)
        {
            db = new DBLiteMovieRepository(settings.Get(MovieSettings.LiteDb).connectionString);

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
