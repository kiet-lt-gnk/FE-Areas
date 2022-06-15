const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
module.exports = defineConfig({
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "areas",
        filename: "remoteEntry.js",
        remotes: {
          // store: "store@https://fe-stores.netlify.app/remoteEntry.js",
          stores: "stores@http://localhost:8091/remoteEntry.js",
        },
        exposes: {
          "./store/user": "./src/store/modules/user.js",
        },
        shared: {
          ...deps,
          vue: {
            eager: true,
            singleton: true,
            requiredVersion: deps.vue,
            strictVersion: true,
          },
        },
      }),
    ],
  },
  devServer: {
    port: 8090,
    historyApiFallback: true,
  },
  transpileDependencies: true,
});
