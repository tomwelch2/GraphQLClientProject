import { buildSchema } from "graphql";

let schema = buildSchema(
    `
        type Query {
            Employees(Name: String): Employee
        }

        type Employee {
            index: Int,
            EmpId: Int,
            Name: String,
            Salary: Int,
            BranchId: Int
        }
    `
);



export default schema;