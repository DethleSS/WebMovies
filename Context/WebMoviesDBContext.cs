using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;
using WebMovie.Models;
using Microsoft.AspNetCore.Mvc;


namespace WebMovie.Context
{
    public class WebMoviesDBContext
    {
        static public List<Movie> GetMovie()
        {
            using (var db = new LiteDatabase(@"WebMoviesDB.db"))
            {
                var collection = db.GetCollection<Movie>("movies");

                List<Movie> listMovies = new List<Movie>(collection.FindAll());
                return listMovies;
            }
        }

        static public void DeleteMovieById(int id)
        {
            using (var db = new LiteDatabase(@"WebMoviesDB.db"))
            {
                var collection = db.GetCollection<Movie>("movies");
                collection.Delete(id);
            }
        }

        static public void AddMovie(Movie movie)
        {

            using (var db = new LiteDatabase(@"WebMoviesDB.db"))
            {
                var collection = db.GetCollection<Movie>("movies");
                collection.Insert(movie);
                
            }
        }

        static public void UpdateMovie(Movie movie)
        {

            using (var db = new LiteDatabase(@"WebMoviesDB.db"))
            {
                var collection = db.GetCollection<Movie>("movies");
                collection.Update(movie);

            }
        }




    }
}
