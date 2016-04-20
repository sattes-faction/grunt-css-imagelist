# grunt-css-imagelist

> A Grunt plugin for autogenerating css definitions for images in a folder. It just gets all image files within a folder
> and creates a css file which contains a css definition with the found images as background images.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-imagelist --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-imagelist');
```

## The "css_imagelist" task

### Overview
In your project's Gruntfile, add a section named `css_imagelist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_imagelist: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.prefix
Type: `String`
Default value: ``

A string which is prepended to each css definition.

Example: `icon-` would result in `.icon-phone` for an image `phone`.

#### options.image_path
Type: `String`
Default value: `../images/`

defines the folder where the referenced images are located.

Example: `../images/icons/` would result in `background: url("../images/icons/...")`

#### options.prepend
Type: `String`
Default value: ``

Whatever you define here will be placed at the top of the css file, followed by 2 linebreaks. Can be used for defining global styles or inserting copyright info in a comment block or whatever.

### Usage Examples

#### Default Options

You can use Grunt glob patterns here.

```js
grunt.initConfig({
  css_imagelist: {
    files: {
      'dest/css/icons.css': ['images/colors.png', 'images/music.png'],
    },
  },
});
```

#### Custom Options

```js
grunt.initConfig({
  css_imagelist: {
    options: {
      prepend: '[class^="icon-"] {\n  width: 20px;\n  height: 20px;\n}',
      prefix: '.icon-',
    },
    files: {
      'dest/css/icons.css': ['images/*.png'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## To do
 * add image dimensions
 * filter input files to select images only

## Release History
 * 2014-05-30   v0.1.1   updated grunt peerDependency
 * 2014-05-30   v0.1.0   initial release
