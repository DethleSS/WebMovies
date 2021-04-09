using System;
using System.Collections.Generic;
using LiteDB;
using WebMovie.Models;

namespace WebMovie.Context
{
    public class DBLiteMovieRepository : IRepository
    {
        private readonly LiteDatabase db;

        private IMovieContext dbContext;

        private ILiteCollection<Movie> collection;
        public DBLiteMovieRepository()
        {
            this.dbContext = new MovieContext();
            db = dbContext.GetDb();
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
                dbContext.Dispose();
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
                dbContext.Dispose();
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
                 dbContext.Dispose();
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
                dbContext.Dispose();
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
                dbContext.Dispose();
            }
                
        }


      
    }
}
