# grunt-demeteorizer

> Grunt task for Meteor.js Demeteorizer app"

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-demeteorizer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-demeteorizer');
```

## The "demeteorizer" task

### Overview

### Options

#### input
Type: `String`
Default value: `'.'`

Directory with Meteor application

#### output
Type: `String`
Default value: `'.demeteorized'`

Output directory

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  demeteorizer: {
    my_app: {
      input: 'app/',
      output: '.demeteorized'
    }
  },
});
```
