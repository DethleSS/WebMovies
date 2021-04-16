using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebMovie.ModelsAuth;

namespace WebMovie.AuthContext
{
    interface IAuthRepository
    {
        List<User> GetUsers();
        List<Role> GetRoles();
        List<UserRole> GetUserRoles();
    }
}
