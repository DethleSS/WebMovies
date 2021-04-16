using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using WebMovie.ModelsAuth;
using WebMovie.Settings;

namespace WebMovie.AuthContext
{
    public class AuthorizationContext : DbContext
    {
        private string connectionstring;
        public AuthorizationContext(string connectionstring)
        {
            this.connectionstring = connectionstring;
        }
        public DbSet<User> User { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<Role> Role { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionstring);
        }
    }
}
