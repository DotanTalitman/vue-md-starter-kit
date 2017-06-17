const path = require("path");

module.exports = {

    entry: "./app/main.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "vue-material-css": "vue-material/dist/vue-material.css",
            "vue-md-to": "vue-md-to/md-to.js"
        }
    },

    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader", exclude: "/node_modules/" },
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif|svg)$/, loader: "file", options: { name: '[name].[ext]?[hash]' } }
        ]
    }
}