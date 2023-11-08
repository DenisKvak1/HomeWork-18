
let Calculate={
    SquarePerimeter:(side)=>typeof(side)=='number' ? (side * 4).toFixed(2) : undefined,
    CubeVolume:(edge)=>typeof(edge)=='number' ? (Math.pow(edge, 3)).toFixed(2) : undefined,
    CubeSideSurfaceArea: (edge) => (typeof edge === 'number' ? (4 * Math.pow(edge, 2)).toFixed(2) : undefined),
    СircumFerence: (radius) => (typeof radius === 'number' ? (2*radius*Math.PI).toFixed(2) : undefined),
    AreaOfCircle: (radius) => (typeof radius === 'number' ? (Math.PI * Math.pow(radius, 2)).toFixed(2) : undefined),
    MaterialDensity: (volume, mass) => (typeof volume === 'number' && typeof mass === 'number' && mass > 0 ? (mass / volume).toFixed(2) : undefined),
    PopulationDensity: (population, area) => (typeof population === 'number' && typeof area === 'number' && area > 0 ? (population / area).toFixed(2) : undefined),
    Hypotenuse: (a, b) => (typeof a === 'number' && typeof b === 'number' && a > 0 && b > 0 ? Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2) : undefined),
    CalculateY: (a) => (typeof a === 'number' ? (Math.pow(a, 2) + 10 / Math.sqrt(Math.pow(a, 2) + 1)).toFixed(2) : undefined),
}
let inputMethod = document.querySelector('#inputMethod');
let inputValue = document.querySelector('#inputValue');
let button = document.querySelector('#calcB');
let result = document.querySelector('#result');
button.addEventListener("click", function() {
    let methodName = inputMethod.value;
    let methodValue = parseFloat(inputValue.value);
    if(methodName!='' && methodValue!=''){
        if (Calculate[methodName] && !isNaN(methodValue)) {
            let methodResult = Calculate[methodName](methodValue);
            if (methodResult !== undefined) {
                result.textContent = `Результат ${methodName}: ${methodResult}`;
            } else {
                result.textContent = `Метод ${methodName} вернул недопустимый результат.`;
            }
        } else {
            result.textContent = "Метод не существует или значение недопустимо.";
        }
        inputMethod.value = '';
        inputValue.value = '';
    }
});

let methodNames = Object.keys(Calculate);
let pElement = document.getElementById("p");
if (methodNames.length > 0) {
    pElement.innerHTML = methodNames.join("<br>");
} else {
    pElement.textContent = "Нет доступных методов.";
 }