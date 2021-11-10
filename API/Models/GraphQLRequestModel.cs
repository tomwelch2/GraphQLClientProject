using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace API.Models
{
    public class GraphQLRequestModel
    {
        public string queryType { get; set; }
        public int empId { get; set; }
        public string attrs { get; set; }
    }
}
