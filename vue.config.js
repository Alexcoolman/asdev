module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/var.scss";',
      },
    },
  },
};
