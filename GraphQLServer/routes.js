"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var EmployeeSchema_1 = __importDefault(require("./EmployeeSchema"));
require("dotenv").config({ path: path_1.default.resolve(__dirname, ".env") });
//Creating Express Router ---
var router = express_1.default.Router();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
router.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: EmployeeSchema_1.default,
    graphiql: true,
}));
exports.default = router;

//# sourceMappingURL=routes.js.map
