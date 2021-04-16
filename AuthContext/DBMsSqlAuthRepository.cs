using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using WebMovie.ModelsAuth;

namespace WebMovie.AuthContext
{
    public class UserLogin
    {
        public JwtSecurityTokenHandler Usertoken;
        public Guid UserID;
        public UserLogin(JwtSecurityTokenHandler usertoken, Guid userID)
        {
            this.Usertoken = usertoken;
            this.UserID = userID;
        }
    }
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

        public UserLogin UserLogin(User user)
        {
            User account = DbUser.FirstOrDefault(x => x.Email == user.Email);
            if(account == null || !BCrypt.Net.BCrypt.Verify(user.Password, account.Password))
            {
                return null;
            }
            var tokenHandler = new JwtSecurityTokenHandler();

            return new UserLogin(tokenHandler, account.Id);

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
