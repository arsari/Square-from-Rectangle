//  node terminal prompt-sync package require
var prompt = require('prompt-sync')();

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
        var tbRow = '##'.repeat(this.length);
        var mRow = '  '.repeat(this.length - 1);
        console.log(tbRow);
        for (var i = 0; i < this.height - 2; i++) {
            console.log(tbRow[0] + mRow + tbRow[this.length]);
        }
        console.log(tbRow);
        return '';
    };
}

// input loop
while (true) {
    // user input prompt
    console.log('==========================================================');
    console.log('This script will draw and calculate the area and perimeter\nof a rectangle and them will draw and calculate the area\nand perimeter of a square using on the following inputs...\n(For exit, enter 0 in any of the inputs.)');
    console.log('----------------------------------------------------------');
    var userLength = Number(prompt('Enter a LENGTH value for the Rectangle: '));
    var userHeight = Number(prompt('Enter a HEIGHT value for the Rectangle: '));
    console.log('==========================================================\n');

    // user inputs evaluation
    if (userLength === 0 || userHeight === 0) {
      console.log('################');
      console.log('# Thank You!!! #');
      console.log('################\n');
      return;
    } else if (userLength < 3 || userLength === 'NaN' || userHeight < 3 || userHeight === 'NaN') {
        console.log('*** INPUT ERROR ***\nInput value of Length and Height should not be empty or less than 3 units.\n');
    } else {
        // call Figure() class function for rectangle calc
        var userRect = new Figure(userLength, userHeight);

        // rectangle outputs
        userRect.draw();
        console.log('\nRectangle total area is ' + userRect.getArea() + ' sq. units.');
        console.log('Rectangle perimeter length is ' + userRect.getPerimeter() + ' units.\n');

        // determine square sides length
        var sqrSide = Math.floor(userRect.getPerimeter() / 4);

        // call Figure() class function for square calc
        var userSqr = new Figure(sqrSide, sqrSide);

        // square outputs
        userSqr.draw();
        console.log('\nSquare total area is ' + userSqr.getArea() + ' sq. units.');
        console.log('Square perimeter length is ' + userSqr.getPerimeter() + ' units.\n');
        return;
    }
}
