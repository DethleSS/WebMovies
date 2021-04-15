using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovie.ModelsAuth
{
    public class User
    {
        [Required]
        public Guid UId { get; set; }
        [Required]
        public string UEmail { get; set; }
        [Required]
        public int UPassword { get; set; }
        [Required]
        public string UFirstName { get; set; }
        [Required]
        public string USecondName { get; set; }
        [Required]
        public string UUserName { get; set; }
        [Required]
        public int URole { get; set; }

    }
}
