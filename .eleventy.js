const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {
    config.addPlugin(eleventyNavigationPlugin);
    config.addPassthroughCopy('./src/assets');
    return {
        dir: {
            input: 'src',
            output: 'public'
        },
        htmlTemplateEngine: 'njk'
    }
}