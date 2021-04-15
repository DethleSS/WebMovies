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
    public class MovieContext : IMovieContext
    {
        private static object syncRoot = new Object();
        private string connectionstring;
        private LiteDatabase db;
        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();                   
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        public MovieContext() { }
        public MovieContext(string connectionstring) 
        {
            this.connectionstring = connectionstring;
        }
        public LiteDatabase GetDb()
        {
            if (db == null)
            {
                lock (syncRoot)
                {
                    if (db == null)

                        db = new LiteDatabase(connectionstring);
                }
            }
            return db;
        }
    }
}
