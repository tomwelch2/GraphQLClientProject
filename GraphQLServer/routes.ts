import path from "path";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import EmployeeSchema from "./GraphQL/EmployeeSchema";
import pg from "pg";
import { Parser } from "graphql/language/parser";
require("dotenv").config({ path: path.resolve(__dirname, ".env") });


//Creating Express Router ---

const router: express.Router = express.Router();

//GraphQL Roots ---

let EmployeeRoot = {
    Employees: async (args : any) => {
        let client = new pg.Client({
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            host: process.env.PG_HOST,
            database: process.env.PG_DB
        });

        client.connect();

        let data = await client.query(`SELECT * FROM "Employees" WHERE "Name" = '${args.Name}'`);
        console.log(data.rows)
        return data.rows[0];
    }
};

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/graphql", graphqlHTTP({
    schema: EmployeeSchema,
    graphiql: true,
    rootValue: EmployeeRoot
}));

router.get("/", (req, res) => {
    res.json({ hello: "world" })
})


export default router;