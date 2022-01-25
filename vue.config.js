const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "main",
        filename: "remoteEntry.js",
        exposes: {
          "./Dropdown1": "./src/components/dropdown/Dropdown1.vue",
          "./Button": "./src/components/buttons/Button.vue"
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
};
