const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
});