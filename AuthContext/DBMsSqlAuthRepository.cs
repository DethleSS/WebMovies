using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebMovie.ModelsAuth;

namespace WebMovie.AuthContext
{
    public class UserLogin
    {
        public string Usertoken;
        public Guid UserID;
        public UserLogin(string usertoken, Guid userID)
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
            var key = Encoding.ASCII.GetBytes("You have a deep, dark fear of spiders, circa 1990");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, account.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return new UserLogin(tokenHandler.WriteToken(token), account.Id);

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
