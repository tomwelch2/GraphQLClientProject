const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        path: path.resolve(__dirname, "index.js")
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ] 
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}