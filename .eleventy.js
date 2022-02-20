module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./source-files/assets")
  eleventyConfig.addPassthroughCopy("./source-files/archive")
  //eleventyConfig.addPassthroughCopy("./source-files/blog")

  // Return your Object options:
  return {
    dir: {
      input: "source-files",
      output: "public-site"
    }
  }
};