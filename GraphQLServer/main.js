"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
require("dotenv").config({ path: path_1.default.join(__dirname, "../", ".env") });
var routes_1 = __importDefault(require("./routes"));
var HOST = process.env.API_HOST;
var PORT = process.env.API_PORT;
//Creating Express Application ---
var app = (0, express_1.default)();
app.use("/", routes_1.default);
//Running server ---
app.listen(PORT, HOST, function () {
    console.log("Server running at " + HOST + ":" + PORT);
});

//# sourceMappingURL=main.js.map
