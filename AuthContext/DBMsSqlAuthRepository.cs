using Microsoft.Extensions.Options;
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
        public IOptions<AuthTokenOptions> TokenOption;
        Microsoft.EntityFrameworkCore.DbSet<User> DbUser;
        Microsoft.EntityFrameworkCore.DbSet<Role> DbRole;
        Microsoft.EntityFrameworkCore.DbSet<UserRole> DbUserRole;
        public DBMsSqlAuthRepository(string connectionstring, IOptions<AuthTokenOptions> tokenOption)
        {          
            AuthorizaionContext = new AuthorizationContext(connectionstring);
            TokenOption = tokenOption;
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

            var authParams = TokenOption.Value;
            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Email, account.Email),
                new Claim(JwtRegisteredClaimNames.Sub, account.Id.ToString())
            };

            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentials);

            var tokenHandler = new JwtSecurityTokenHandler().WriteToken(token);
            
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
