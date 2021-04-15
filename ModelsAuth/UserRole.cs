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

        [Required]
        public int UserId { get; set; }
        [Required]
        public int RoleId { get; set; }
    }
}
