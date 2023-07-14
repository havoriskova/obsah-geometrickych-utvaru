const formSelectShape = document.querySelector("#form--select-shape");
const selectShape = document.querySelector("#select--shape");
const formAreaCalculator = document.querySelector("#form--area-calculator");
const imgShape = document.querySelector("#img--shape");
const containerForInputs = document.querySelector("#container-for-inputs");
const result = document.querySelector("#container-for-inputs");
// number inputs will be selected after the form--select-shape is selected 
// (the id´s are the same)

//class with
// methods for append new inputs in containerForInputs
// js-Expression-eval:  var expression = Parser.parse(formula); var result = expression.evaluate({ x: 3 });
// js method eval()
// converts string with formula into a real function which return result
class GeometricShape {
    constructor(shape, measureArr, formula) {
        this.shape = shape;
        this.measureArr = measureArr;
        this.formula = formula;
    }

   
}



let circle = new GeometricShape("circle", ["r"], "pi*r**2");
let square = new GeometricShape("square", ["a"], "a*a");


function createNewForm(e) {
    e.preventDefault();
    //console.log("working");

    //console.dir(e);
   // console.dir(e.target.baseURI.split("shape=")[1]);
   let shapeName = selectShape.value;
    imgShape.src=`./img/${shapeName}.png`;

      // for (let i = 0; i < this.measureArr.length; i++) {
    //     `<label for=${this.measureArr[i]}>${this.measureArr[i]}</label>
    //     <input type="number" id=${this.measureArr[i]}/>`
    // }
}

formSelectShape.addEventListener("submit", createNewForm);