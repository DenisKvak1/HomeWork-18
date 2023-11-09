
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
    Descriptions: {
        SquarePerimeter: "Calculate the perimeter of a square",
        CubeVolume: "Calculate the volume of a cube",
        CubeSideSurfaceArea: "Calculate the surface area of a cube",
        СircumFerence: "Calculate the circumference of a circle",
        AreaOfCircle: "Calculate the area of a circle",
        MaterialDensity: "Calculate material density",
        PopulationDensity: "Calculate population density",
        Hypotenuse: "Calculate the hypotenuse of a right triangle",
        CalculateY: "Calculate Y value",
    },
}
function updateInputsForFunction(func, containerId) {
    const inputContainer = document.getElementById(containerId);
    const argNames = func.toString().match(/\(([^)]+)\)/)[1].split(',').map(arg => arg.trim());

    inputContainer.innerHTML = ''; 
    argNames.forEach(argName => {
        const input = document.createElement('input');
        inputContainer.appendChild(input);
        input.classList.add('form-control','w-25','mt-2');
    });
}
function populateSelectOptions(optionsArray, selectId) {
    const selectElement = document.getElementById(selectId);
    let o=0;
    optionsArray.forEach(optionValue => {
        const optionElement = document.createElement('option');

        optionElement.value = o + 'select';

        optionElement.textContent = Calculate.Descriptions[optionValue];
        selectElement.appendChild(optionElement);
        o++;
    });
}
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
                    inputMethod.value = '';
                    inputValue.value = ''; 
                } else {
                    result.textContent = `Вы ввели что то кроме цифр и ' , ' `;
                }
            } else {
                result.textContent = `Введите нужное количество аргументов (${method.length}) через ,`;
            }
        } else {
            result.textContent = "Метод не существует.";
        }
    }
});
let inputMethod = document.querySelector('#formul');
inputMethod.addEventListener('change', function() {
    const selectedDescription = inputMethod.textContent;
    const selectedMethod = Object.keys(Calculate.Descriptions).find(key => Calculate.Descriptions[key] === selectedDescription);
    if (Calculate[selectedMethod]) {
        updateInputsForFunction(Calculate[selectedMethod], 'input-block');
    }
});
const methodNames = Object.keys(Calculate).filter(key => key !== 'Descriptions');
populateSelectOptions(methodNames, 'formul');
updateInputsForFunction(Calculate.SquarePerimeter, 'input-block');


