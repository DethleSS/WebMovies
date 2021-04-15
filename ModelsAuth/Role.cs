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

        [Required]
        public string RRole { get; set; } 
    }
}
