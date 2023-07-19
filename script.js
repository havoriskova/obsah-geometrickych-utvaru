const formSelectShape = document.querySelector("#form--select-shape");
const selectShape = document.querySelector("#select--shape");
const formAreaCalculator = document.querySelector("#form--area-calculator");
const imgShape = document.querySelector("#img--shape");
const containerForInputs = document.querySelector("#container-for-inputs");
const result = document.querySelector("#result");
// number inputs will be selected after the form--select-shape is selected 
// (the id´s are the same)

//class with
// js-Expression-eval:  var expression = Parser.parse(formula); var result = expression.evaluate({ x: 3 });
// js method eval()
// converts string with formula into a real function which return result

let a, b, c, r, v; // for destructuring assignment


class GeometricShape {
    constructor(shape, measureArray, formula) {
        this.shape = shape;
        this.measureArray = measureArray;
        this.formula = formula;
    }

    calculateArea() {
        console.log('ok');
        let inputsArr = [...document.querySelectorAll('.user-inputs-measurements')];
        let valuesObj = {};

        for (let i = 0; i < inputsArr.length; i++) {

            let value = inputsArr[i].value;
            let key = inputsArr[i].id;
            console.log(key);
            valuesObj[key] = parseInt(value);
            console.log(valuesObj);
        }

       console.log(valuesObj); // --> {a: 1, b:2}

       console.log(valuesObj.a); //

       let {a, b, c, r, v} = valuesObj;

       console.log(this.formula);
       console.log(eval(this.formula));
       let result = eval(this.formula);

      return Math.floor(result); 

    }

}


let circle = new GeometricShape("circle", ["r"], "Math.PI*r**2");
let square = new GeometricShape("square", ["a"], "a*a");
let rectangle = new GeometricShape("rectangle", ["a", "b"], "a*b");
let trapezoid = new GeometricShape("trapezoid", ["a", "c", "v"], "((a+c) * v) / 2");
let triangle = new GeometricShape("triangle", ["a", "v"], "(v*a)/2");

// console.log(circle);
// console.log(circle.measureArray);
//console.log(circle.calculateArea());

function createNewForm(e) {
    e.preventDefault();
    //console.log("working");

    //console.dir(e);
   // console.dir(e.target.baseURI.split("shape=")[1]);
    let shapeName = selectShape.value;
   // console.log(shapeName);
    imgShape.src=`./img/${shapeName}.png`;

    // replace inputs in containerForInputs according to the selected shape:
    //console.log(`${shapeName}.measureArray`);
    let measureArr = eval(`${shapeName}.measureArray`);

    let inputsArr = [];
    for (let i = 0; i < measureArr.length; i++) {
        let input = 
        `<label for=${measureArr[i]}>${measureArr[i]}</label>
        <input type="number" id=${measureArr[i]} class='user-inputs-measurements'/>`;

        inputsArr.push(input);
    }
    containerForInputs.innerHTML = [...inputsArr];
    result.value = '';
}

function calculateArea(e) {
    e.preventDefault();
    
   // console.log('hi');
    let shapeName = selectShape.value;
    let calculatedArea = eval(`${shapeName}.calculateArea()`); //

   console.log(calculatedArea);
   result.value = calculatedArea;
    
}

formSelectShape.addEventListener("submit", createNewForm);
formAreaCalculator.addEventListener("submit", calculateArea);