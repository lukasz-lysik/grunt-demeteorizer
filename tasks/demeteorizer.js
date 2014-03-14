/*
 * grunt-demeteorizer
 * 
 *
 * Copyright (c) 2014 Lukasz Lysik
 * Licensed under the MIT license.
 */

'use strict';

var demeteorizer = require('demeteorizer');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('demeteorizer', 'Grunt task for Meteor.js Demeteorizer app"', function() {
    var done = this.async();
    
    var input = (this.data.input || '.');
    var output = (this.data.output || (this.data.input + '.demeteorized'))
    var node_version = '';
    var release = '';
    var tarball = '';
    var appName = '';
    
    if(node_version.indexOf('v') !== 0) {
      node_version = 'v' + node_version;
    }

    grunt.log.writeln('Input: ' + input);
    grunt.log.writeln('Output: ' + output);

    demeteorizer.on('progress', function(msg) {
      grunt.log.writeln(msg);
    });

    demeteorizer.convert(input, output, node_version, release, tarball, appName, function(err) {
      if(err) {
        grunt.log.writeln('ERROR: ' + err);
      }
      else {
        grunt.log.writeln('Demeteorization complete.');
      }
      done();
    });
  });
};
