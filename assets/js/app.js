
let Calculate={
    SquarePerimeter:(side)=>typeof(side)=='number' ? (side * 4).toFixed(2) : NaN,
    CubeVolume:(edge)=>typeof(edge)=='number' ? (Math.pow(edge, 3)).toFixed(2) : NaN,
    CubeSideSurfaceArea: (edge) => (typeof(edge) == 'number' ? (4 * Math.pow(edge, 2)).toFixed(2) : NaN),
    СircumFerence: (radius) => (typeof(radius) == 'number' ? (2*radius*Math.PI).toFixed(2) : NaN),
    AreaOfCircle: (radius) => (typeof(radius) == 'number' ? (Math.PI * Math.pow(radius, 2)).toFixed(2) : NaN),
    MaterialDensity: (volume, mass) => (typeof(volume) == 'number' && typeof(mass) == 'number' && mass > 0 ? (mass / volume).toFixed(2) : NaN),
    PopulationDensity: (population, area) => (typeof(population) == 'number' && typeof(area) == 'number' && area > 0 ? (population / area).toFixed(2) : NaN),
    Hypotenuse: (a, b) => (typeof(a) == 'number' && typeof(b) == 'number' && a > 0 && b > 0 ? Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2) : NaN),
    CalculateY: (a) => (typeof(a) == 'number' ? (Math.pow(a, 2) + 10 / Math.sqrt(Math.pow(a, 2) + 1)).toFixed(2) :  NaN),
}
let inputMethod = document.querySelector('#inputMethod');
let inputValue = document.querySelector('#inputValue');
let button = document.querySelector('#calcB');
let result = document.querySelector('#result');
button.addEventListener("click", function() {
    let methodName = inputMethod.value.trim();
    let argsString = inputValue.value.trim();
    let argsArray = argsString.split(',').map(arg => parseFloat(arg.trim()));
    if(methodName!='' && argsString!=''){
        if (Calculate[methodName]) {
            const method = Calculate[methodName];
            if (method.length === argsArray.length) {
                const methodResult = method(...argsArray);
                if (!isNaN(methodResult)) {
                    result.textContent = `Результат ${methodName}: ${methodResult}`;
                } else {
                    result.textContent = `Вы ввели что то кроме цифр и ' , ' `;
                }
                inputMethod.value = '';
                inputValue.value = '';
            } else {
                result.textContent = `Введите нужное количество аргументов (${method.length}) через ,`;
            }
        } else {
            result.textContent = "Метод не существует.";
        }
    }
});


let methodNames = Object.keys(Calculate);
let pElement = document.getElementById("p");
if (methodNames.length > 0) {
    pElement.innerHTML = methodNames.join("<br>");
} else {
    pElement.textContent = "Нет доступных методов.";
}
