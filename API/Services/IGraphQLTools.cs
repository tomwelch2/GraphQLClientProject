using System;
using System.Threading.Tasks;
using API.Models;

namespace API.Services
{
    public interface IGraphQLTools
    {
        public Task<GraphQLRequestModel> MakeQuery(GraphQLRequestModel requestModel);
    }
}
