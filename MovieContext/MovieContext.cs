using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebMovie.Models;
using System.Configuration;
using LiteDB;
using System.Text;
using Microsoft.Extensions.Options;

namespace WebMovie.MovieContext
{
    public class MoviesContext : MovieContext
    {
        private string connectionstring;
        private LiteDatabase db;

        public void Dispose()
        {
            db.Dispose();
            GC.SuppressFinalize(this);
        }
        public MoviesContext() { }
        public MoviesContext(string connectionstring) 
        {
            this.connectionstring = connectionstring;
        }
        public LiteDatabase GetDb()
        {
            return new LiteDatabase(@connectionstring);
        }
    }
}
