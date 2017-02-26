/*  Define un objeto que represente un rectangulo.

    Propiedades: length, height;
    Metodos: getArea(); getPerimeter();
    Area = length * height;
    Perimeter: length * 2 + height * 2;

    Define un objeto que represente un cuadrado utilizando el objeto de rectangulo.
    En un cuadrado; su altura (height) y su largo (length) son iguales (height = length), por lo que solo necesitan un parametro/propiedad  para el objeto;
  */
//  node terminal prompt-sync package require
var prompt = require('prompt-sync')();

//  object function declaration
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
        var tbl = '##'.repeat(this.length);
        var ml = '  '.repeat(this.length - 1);
        console.log(tbl);
        for (var i = 0; i < this.height - 2; i++) {
            console.log(tbl[0] + ml + tbl[this.length]);
        }
        console.log(tbl);
        return '';
    };
}

//  user input prompt
while (true) {
    console.log('==========================================================');
    console.log('This app will draw and calculate the area and perimeter\nof a rectangle and them will draw and calculate the area\nand perimeter of a square using on the following inputs...\n(For exit, enter 0 in any of the inputs.)');
    console.log('----------------------------------------------------------');
    var userLength = Number(prompt('Enter a LENGTH value for the Rectangle: '));
    var userHeight = Number(prompt('Enter a HEIGHT value for the Rectangle: '));
    console.log('==========================================================\n');

    //  user inputs evaluation
    if (userLength === 0 || userHeight === 0) {
      console.log('################');
      console.log('# Thank You!!! #');
      console.log('################\n');
      return;
    } else if (userLength < 3 || userLength === 'NaN' || userHeight < 3 || userHeight === 'NaN') {
        console.log('*** INPUT ERROR ***\nInput value of Length and Height should not be empty or less than 3 units.\n');
    } else {
        //  call Figure() function for rectangle calc
        var userRect = new Figure(userLength, userHeight);

        // rectangle outputs
        console.log(userRect.draw());
        console.log('Rectangle total area is ' + userRect.getArea() + ' sq. units.');
        console.log('Rectangle perimeter length is ' + userRect.getPerimeter() + ' units.\n');

        //  determine square sides length
        var sqSide = Math.floor(userRect.getPerimeter() / 4);

        //  call Figure() function for square calc
        var userSq = new Figure(sqSide, sqSide);

        // square outputs
        console.log(userSq.draw());
        console.log('Square total area is ' + userSq.getArea() + ' sq. units.');
        console.log('Square perimeter length is ' + userSq.getPerimeter() + ' units.\n');
        return;
    }
}
