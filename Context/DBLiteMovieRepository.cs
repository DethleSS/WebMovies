using System;
using System.Collections.Generic;
using LiteDB;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using WebMovie.Models;

namespace WebMovie.Context
{
    public class DBLiteMovieRepository : IRepository
    {
        private readonly LiteDatabase db;
        private readonly IMovieContext MovieContext;
        private ILiteCollection<Movie> collection;
        public DBLiteMovieRepository(IConfiguration configuration)
        {

            MovieContext = new MovieContext(configuration.GetValue<string>("LiteDbConnectionString"));
            db = MovieContext.GetDb();
            this.collection = this.db.GetCollection<Movie>("movies");
            
        }

        public List<Movie> GetMovies()
        {
            try
            {
                return new List<Movie>(this.collection.FindAll());
            }
            finally
            {
                MovieContext.Dispose();
            }
                
        }

        public Movie GetMovieById(int id)
        {
            try
            {
                return this.collection.FindById(id);
            }
            finally
            {
                MovieContext.Dispose();
            }
                
        }

        public void DeleteMovieById(int id)
        {
            try
            {
                this.collection.Delete(id);
            }
            finally
            {
                MovieContext.Dispose();
            }
        }

        public void AddMovie(Movie movie)
        {
            try
            {
                this.collection.Insert(movie);
            }
            finally
            {
                MovieContext.Dispose();
            }
                
        }

        public void UpdateMovie(Movie movie)
        {
            try
            {
                this.collection.Update(movie);
            }
            finally
            {
                MovieContext.Dispose();
            }
                
        }


      
    }
}
