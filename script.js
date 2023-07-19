const formSelectShape = document.querySelector("#form--select-shape");
const selectShape = document.querySelector("#select--shape");
const formAreaCalculator = document.querySelector("#form--area-calculator");
const imgShape = document.querySelector("#img--shape");
const containerForInputs = document.querySelector("#container-for-inputs");
const result = document.querySelector("#result");

class GeometricShape {
    constructor(shape, measureArray, formula) {
        this.shape = shape;
        this.measureArray = measureArray;
        this.formula = formula;
    }

    calculateArea() {
        let inputsArr = [...document.querySelectorAll('.user-inputs-measurements')];
        let valuesObj = {};

        for (let i = 0; i < inputsArr.length; i++) {

            let value = inputsArr[i].value;
            let key = inputsArr[i].id;
            valuesObj[key] = parseInt(value);
            console.log(valuesObj);
        }

       let {a, b, c, r, v} = valuesObj;
       let result = eval(this.formula);
       return (Math.round(result * 100) / 100); 

    }

}


let circle = new GeometricShape("circle", ["r"], "Math.PI*r**2");
let square = new GeometricShape("square", ["a"], "a*a");
let rectangle = new GeometricShape("rectangle", ["a", "b"], "a*b");
let trapezoid = new GeometricShape("trapezoid", ["a", "c", "v"], "((a+c) * v) / 2");
let triangle = new GeometricShape("triangle", ["a", "v"], "(v*a)/2");
// here you can add new geometric shapes:

function createNewForm(e) {
    e.preventDefault();

    let shapeName = selectShape.value;
    imgShape.src=`./img/${shapeName}.png`;

    let measureArr = eval(`${shapeName}.measureArray`);

    let inputsArr = [];
    for (let i = 0; i < measureArr.length; i++) {
        let input = 
        `<div class='user-inputs-measurements'>
        <label for=${measureArr[i]}>${measureArr[i]}</label>
        <input type="number" id=${measureArr[i]} class='user-inputs-measurements'/>
        </div>`;
        inputsArr.push(input);
    }
    containerForInputs.innerHTML = inputsArr.map((input => input)).join('');
    result.innerHTML = '';
}

function calculateArea(e) {
    e.preventDefault();
    let shapeName = selectShape.value;
    let calculatedArea = eval(`${shapeName}.calculateArea()`);
    result.innerHTML = calculatedArea;
    
}

formSelectShape.addEventListener("submit", createNewForm);
formAreaCalculator.addEventListener("submit", calculateArea);