using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebMovie.AuthContext;
using WebMovie.ModelsAuth;
using WebMovie.Settings;

namespace WebMovie.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        DBMsSqlAuthRepository db;
        public AuthController(IOptionsSnapshot<AuthSettings> settings)
        {
            db = new DBMsSqlAuthRepository(settings.Get(AuthSettings.MsSql).connectionString);
        }

        [HttpGet]
        public List<User> GetUsers()
        {
            return db.GetUsers();
        }

        [HttpPost]
        public UserLogin UserLogin([FromBody] User user)
        {
            return db.UserLogin(user);
        }


    }
}
