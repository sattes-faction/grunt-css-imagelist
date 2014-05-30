/*
 * grunt-css-imagelist
 * https://github.com/sattes-faction/grunt-css-imagelist
 *
 * Copyright (c) 2014 Simon Sattes
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    css_imagelist: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/colors.png', 'test/fixtures/music.png']
        }
      },
      custom_options: {
        options: {
          prefix: 'icon-',
          images_path: '../images/icons/',
          prepend: '[class^="icon-"] {\n  width: 20px;\n  height: 20px;\n}'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/*.png']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'css_imagelist', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
