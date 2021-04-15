using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.ModelsAuth
{
    public class UserRole
    {
        [Required]
        public Guid Id { get; set; }

        public User User { get; set; }
        public Role Role { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
    }
}
