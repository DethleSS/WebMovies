using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;
using WebMovie.Models;

namespace WebMovie.Context
{
    public class WebMoviesDBContext
    {
        static public Movie CreateDbContext()
        {
            using (var db = new LiteDatabase(@"WebMoviesDB.db"))
            {
                // Получаем коллекцию
                var collection = db.GetCollection<Movie>("movies");

                var theGreenMile = new Movie { Id = 1, Name = "TheGreenMile", Picture = "", ReleaseDate = 1999 };

                theGreenMile.Author = new List<Author> { new Author { Id = 1, FirstName = "Frank", SecondName = "Darabont", Photo = "http://t3.gstatic.com/images?q=tbn:ANd9GcQpKnTs-8XS5LkRJrQeK_8eqpVlf0kx4XHFcI51eJ8UB2npoLcrUdR0KPknu9zP" } };
                theGreenMile.Genre = new List<Genre> { new Genre { Id = 1, NameGenre = "Drama" } };

                // Добавляем компанию в коллекцию
                return theGreenMile;
                // Получаем все документы
                /*var result = collection.FindAll();
                foreach (Movie movie in result)
                {
                    Console.WriteLine(movie.Name);
                    foreach (Author author in movie.Author)
                    {
                        Console.WriteLine(author.FirstName, author.SecondName);
                    }
                    foreach (Genre genre in movie.Genre)
                    {
                        Console.WriteLine(genre.NameGenre);
                    }

                    Console.WriteLine();
                }*/
            }
        }
    }
}
