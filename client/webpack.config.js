const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
const env = dotenv.config({ path: envFile }).parsed || {};

// Створюємо обʼєкт із змінними
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
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
                exportLocalsConvention: "asIs"
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/, // Звичайні .scss файли
        exclude: /\.module\.scss$/, // Не перетинається з .module.scss
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/, // додаємо правило для CSS
        use: [
          "style-loader",  // додає CSS в стилі HTML
          "css-loader",    // інтерпретує CSS файли
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
  mode: "development",
};
