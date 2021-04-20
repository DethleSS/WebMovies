using LiteDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.MovieContext
{
    interface MovieContext 
    {
        LiteDatabase GetDb();
        void Dispose();
    }
}
