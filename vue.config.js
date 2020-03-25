module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/style/_colors.scss";`
        }
      }
    }
  };