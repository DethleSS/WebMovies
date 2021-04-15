using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using WebMovie.ModelsAuth;

namespace WebMovie.AuthContext
{
    public class AuthorizaionContext : DbContext
    {

        public DbSet<User> User { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<Role> Role { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(local); Database=Authorizaion; Persist Security Info=false; MultipleActiveResultSets=True; Trusted_Connection=True");
        }
    }
}
