using System;
using System.Collections.Generic;
using LiteDB;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using WebMovie.Models;
using WebMovie.Settings;

namespace WebMovie.MovieContext
{
    public class DBLiteMovieRepository : IRepository
    {
        private readonly LiteDatabase db;
        private readonly MoviesContext MovieContext;
        private ILiteCollection<Movie> collection;
        public DBLiteMovieRepository(MoviesContext movieContext)
        {

            MovieContext = movieContext;
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
                db.Dispose();
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
                db.Dispose();
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
                db.Dispose();
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
                db.Dispose();
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
                db.Dispose();
            }
                
        }


      
    }
}
