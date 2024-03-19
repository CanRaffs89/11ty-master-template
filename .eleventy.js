const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {
    config.addShortcode("year", () => `${new Date().getFullYear()}`);
    config.addPlugin(eleventyNavigationPlugin);
    config.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    config.addPassthroughCopy('./src/assets');
    config.addPassthroughCopy('./src/admin');
    return {
        dir: {
            input: 'src',
            output: 'public'
        },
        htmlTemplateEngine: 'njk'
    }
}