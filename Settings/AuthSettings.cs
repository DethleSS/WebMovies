using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.Settings
{
    public class AuthSettings
    {
        public const string MsSql = "MsSql";
        public string connectionString { get; set; }
    }
}
