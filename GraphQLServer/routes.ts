import path from "path";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import EmployeeSchema from "./EmployeeSchema";
require("dotenv").config({ path: path.resolve(__dirname, ".env") });


//Creating Express Router ---

const router: express.Router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/graphql", graphqlHTTP({
    schema: EmployeeSchema,
    graphiql: true,
}));




export default router;