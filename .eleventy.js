// .eleventy.js
module.exports = function(eleventyConfig) {
    // --- Passthroughs: keep your existing static pages/assets ---
    eleventyConfig.addPassthroughCopy({ "./css": "css" });
    eleventyConfig.addPassthroughCopy({ "./more": "more" });
    eleventyConfig.addPassthroughCopy({ "./posts": "posts" });
    //eleventyConfig.addPassthroughCopy({ "more/images/icon.png": "favicon.ico" });
    ["./index.html", "./blogs.html", "./projects.html"].forEach(f => eleventyConfig.addPassthroughCopy(f));
    eleventyConfig.addPassthroughCopy("favicon.ico");

    eleventyConfig.addCollection("tidbits", (api) => {
        return api.getFilteredByGlob("./content/tidbits/*.md").sort((a, b) => b.date - a.date);
    });

    const { DateTime } = require("luxon");
    eleventyConfig.addNunjucksFilter("date", (dateObj, fmt = "LLL d, yyyy") => {
        if (!dateObj) return "";
        try {
            // If it's already a Date, format it
            if (dateObj instanceof Date) {
                return DateTime.fromJSDate(dateObj).toFormat(fmt);
            }
            // Try to parse if it's a string
            const dt = DateTime.fromISO(String(dateObj));
            return dt.isValid ? dt.toFormat(fmt) : String(dateObj);
        } catch {
            return String(dateObj);
        }
    });

    return {
        dir: { input: ".", includes: "src/_includes", layouts: "src/_includes", output: "_site" },
        pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };

};
