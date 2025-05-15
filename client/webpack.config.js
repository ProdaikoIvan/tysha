const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  // env може бути обʼєктом, наприклад { production: true } або { production: 'production' }
  // Визначаємо, чи production ми збираємо
  const isProd = env.production === true || env.production === 'production';

  const envFile = isProd ? ".env.production" : ".env.development";
  const envConfig = dotenv.config({ path: envFile }).parsed || {};

  const envKeys = Object.keys(envConfig).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envConfig[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.module\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                esModule: false,
                modules: {
                  localIdentName: "[name]__[local]__[hash:base64:5]",
                  exportLocalsConvention: "asIs",
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: "asset/resource",
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      static: "./build",
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    mode: isProd ? 'production' : 'development',
  };
};