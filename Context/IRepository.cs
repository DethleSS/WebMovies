using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebMovie.Models;

namespace WebMovie.Context
{
    interface IRepository 
    {
        List<Movie> GetMovies();
        Movie GetMovieById(int id);
        void DeleteMovieById(int id);
        void AddMovie(Movie movie);
        void UpdateMovie(Movie movie);

    }
}
