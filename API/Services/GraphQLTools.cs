using System;
using Hangfire;
using API.Models;
using GraphQL.Client;
using GraphQL;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using System.Threading.Tasks;

namespace API.Services
{
    public class GraphQLTools : IGraphQLTools
    {
        public GraphQLTools()
        {
        }

        public async Task<GraphQLRequestModel> MakeQuery(GraphQLRequestModel requestModel)
        {
            var graphQLClient = new GraphQLHttpClient("http://0.0.0.0:5050/graphql", new NewtonsoftJsonSerializer());

            var request = new GraphQLRequest
            {
                Query = @"
                    query {
                        Employees(EmpId: 1)
                        {
                            Name
                        }
                    }
                "
            };

            var result = await graphQLClient.SendQueryAsync<GraphQLRequestModel>(request);

            return result.Data;
        }
    }
}
