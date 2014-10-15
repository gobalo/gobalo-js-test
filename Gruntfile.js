'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    qunit: {
      tests: {
      	src: ['test/**/*.html'],
        options: {
          timeout: 30000,
          "--web-security": "no"
        }
      },
      answers: {
      	src: ['answers/**/*.html'],
        options: {
          timeout: 30000,
          "--web-security": "no"
        }
      },
      
    },
    jshint: {
      tests: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/test.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint', 'qunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-qunit-istanbul");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);
  
  grunt.registerTask('tests', ['jshint:tests', 'qunit:tests']);

};
