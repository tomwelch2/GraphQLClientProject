"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var schema = (0, graphql_1.buildSchema)("\n        type Query {\n            Employees(Name: String): Employee\n        }\n\n        type Employee {\n            index: Int,\n            EmpId: Int,\n            Name: String,\n            Salary: Int,\n            BranchId: Int\n        }\n    ");
exports.default = schema;

//# sourceMappingURL=EmployeeSchema.js.map
