const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  // Output directory: _site
  
  // Copy `assets` to `assets`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_headers");
  
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
