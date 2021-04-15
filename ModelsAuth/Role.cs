using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.ModelsAuth
{
    public class Role
    {
        [Required]
        public Guid Id { get; set; }      
        public List<Role> UserRoles { get; set; }
        public string NameRole { get; set; } 
    }
}
