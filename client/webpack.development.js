const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(
  {
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
    },
  },
  config
);
