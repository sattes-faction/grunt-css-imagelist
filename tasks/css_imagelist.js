/*
 * grunt-css-imagelist
 * https://github.com/sattes-faction/grunt-css-imagelist
 *
 * Copyright (c) 2014 Simon Sattes
 * Licensed under the MIT license.
 */

'use strict';

var path = require("path");
var chalk = require('chalk');

module.exports = function(grunt) {

  grunt.registerMultiTask('css_imagelist', 'A Grunt plugin for autogenerating css definitions for images in a folder', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      prefix: '',
      images_path: '../images/',
      prepend: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var css = options.prepend === '' ? '' : (options.prepend + '\n\n');
      css += f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var extname = path.extname(filepath);
        var filename = path.basename(filepath, extname);
        var cssDefinition = "." + options.prefix + filename +" {\n  background-image: url(\"" + options.images_path + path.basename(filepath) + "\");\n}";
        return cssDefinition;
      }).join(grunt.util.normalizelf("\n\n"));

      // Write the destination file.
      grunt.file.write(f.dest, css);

      // Print a success message.
      grunt.log.writeln('File "' + chalk.cyan(f.dest) + '" created.');
    });
  });
};
