'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the breathtaking generator-santander generator!`)
    );
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
  }

  install() {
    this.installDependencies();
  }
};
