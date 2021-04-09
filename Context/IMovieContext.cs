using LiteDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.Context
{
    interface IMovieContext 
    {
        LiteDatabase GetDb();
        void Dispose(bool disposing);
        void Dispose();
    }
}
