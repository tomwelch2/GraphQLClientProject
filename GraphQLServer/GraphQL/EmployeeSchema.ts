import { buildSchema } from "graphql";

let schema = buildSchema(
    `
        type Query {
            Employees(EmpId: Int): Employee
        }

        type Employee {
            EmpId: Int,
            Name: String,
            Salary: Int,
            BranchId: Int
        }
    `
);



export default schema;