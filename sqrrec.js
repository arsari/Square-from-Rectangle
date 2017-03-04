//  node terminal prompt-sync package require
var prompt = require('prompt-sync')();
var colors = require('colors');

// object class function declaration
function Figure(length, height) {
    this.length = length;
    this.height = height;
    this.getArea = function() {
        return this.length * this.height;
    };
    this.getPerimeter = function() {
        return (this.length + this.height) * 2;
    };
    this.draw = function() {
        var tbRow = '  '.repeat(this.length);
        var mRow = '  '.repeat(this.length - 1);
        if (length === height) {
          console.log(tbRow.bgGreen);
          for (var i = 0; i < this.height - 2; i++) {
              console.log(tbRow[0].bgGreen + mRow + tbRow[this.length].bgGreen);
          }
          console.log(tbRow.bgGreen);
        } else {
          console.log(tbRow.bgCyan);
          for (var i = 0; i < this.height - 2; i++) {
              console.log(tbRow[0].bgCyan + mRow + tbRow[this.length].bgCyan);
          }
          console.log(tbRow.bgCyan);
        }
        return '';
    };
}

// input loop
while (true) {
    // script description and user input prompt
    console.log('\n=============================================='.red + 'v1.3.170304'.yellow);
    console.log('This script will draw and calculate the area and perimeter\nof a rectangle and them will draw and calculate the area\nand perimeter of a square using on the following inputs...\n(For exit, press Enter in any of the inputs.)'.cyan);
    console.log('----------------------------------------------------------'.blue);
    var userLength = Number(prompt('Enter a LENGTH value for the Rectangle: '.italic.yellow));
    var userHeight = Number(prompt('Enter a HEIGHT value for the Rectangle: '.italic.yellow));
    console.log('==========================================================\n'.red);

    // user inputs evaluation
    if (isNaN(userLength) || isNaN(userHeight)) {
      console.log('*** INPUT ERROR ***'.bgRed + '\n' + 'Input value of Length and Height should be a Number.'.bgRed);
    } else if (userLength === 0 || userHeight === 0) {
      console.log('-----------------'.bgMagenta);
      console.log('|'.bgMagenta + '  Good Bye!!!  ' + '|'.bgMagenta);
      console.log('-----------------'.bgMagenta + '\n');
      return;
    } else if (userLength < 3 || userHeight < 3 ) {
        console.log('*** INPUT ERROR ***'.bgRed + '\n' + 'Input value of Length and Height should not be less than 3 units.'.bgRed);
    } else {
        // call Figure() class function for rectangle calc
        var userRect = new Figure(userLength, userHeight);

        // rectangle outputs
        userRect.draw();
        console.log('\nRectangle total area is '.bold.yellow + userRect.getArea() + ' sq. units.'.bold.yellow);
        console.log('Rectangle perimeter length is '.bold.yellow + userRect.getPerimeter() + ' units.\n'.bold.yellow);

        // determine square sides length
        var sqrSide = Math.floor(userRect.getPerimeter() / 4);

        // call Figure() class function for square calc
        var userSqr = new Figure(sqrSide, sqrSide);

        // square outputs
        userSqr.draw();
        console.log('\nSquare total area is '.bold.yellow + userSqr.getArea() + ' sq. units.'.bold.yellow);
        console.log('Square perimeter length is '.bold.yellow + userSqr.getPerimeter() + ' units.\n'.bold.yellow);
        return;
    }
}
