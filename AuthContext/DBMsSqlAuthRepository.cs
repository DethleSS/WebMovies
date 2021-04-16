using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebMovie.ModelsAuth;

namespace WebMovie.AuthContext
{
    public class DBMsSqlAuthRepository : IAuthRepository
    {
        AuthorizationContext AuthorizaionContext;
        Microsoft.EntityFrameworkCore.DbSet<User> DbUser;
        Microsoft.EntityFrameworkCore.DbSet<Role> DbRole;
        Microsoft.EntityFrameworkCore.DbSet<UserRole> DbUserRole;
        public DBMsSqlAuthRepository(string connectionstring)
        {          
            AuthorizaionContext = new AuthorizationContext(connectionstring);
            DbUser = AuthorizaionContext.User;
            DbRole = AuthorizaionContext.Role;
            DbUserRole = AuthorizaionContext.UserRole;
        }

        public List<User> GetUsers()
        {
            return new List<User>(DbUser);
        }
        public List<Role> GetRoles()
        {
            return new List<Role>(DbRole);

        }
        public List<UserRole> GetUserRoles()
        {
            return new List<UserRole>(DbUserRole);
        }
    }
}
