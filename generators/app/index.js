'use strict';

const generators                  = require('yeoman-generator');


class Generator extends generators.Base {

  get initializing() {
    return {
      output: function() {
        this.log('Welcome at Yo Burger!');
      }
    }
  }

  get writing() {
    return {
      output: function() {
        this.fs.copy(this.templatePath(), this.destinationPath());
      }
    }
  }

}

module.exports = Generator;
