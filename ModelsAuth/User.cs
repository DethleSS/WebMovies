using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.ModelsAuth
{
    public class User
    {
        public Guid Id { get; set; }


        public string Email { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string SecondName { get; set; }

        public string UserName { get; set; }

        public List<UserRole> UserRole { get; set; }

    }
}
