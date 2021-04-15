using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Author> Author { get; set; }

        public List<Genre> Genre { get; set; }

        public int ReleaseDate { get; set; }

        public string Picture { get; set; }
    }
}
