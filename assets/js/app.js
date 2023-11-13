let Calculate = {
    SquarePerimeter: (side) =>  (side * 4).toFixed(2) ,
    CubeVolume: (edge) => (Math.pow(edge, 3)).toFixed(2),
    CubeSideSurfaceArea: (edge) =>(4 * Math.pow(edge, 2)).toFixed(2),
    СircumFerence: (radius) => (2 * radius * Math.PI).toFixed(2),
    AreaOfCircle: (radius) =>(Math.PI * Math.pow(radius, 2)).toFixed(2),
    MaterialDensity: (volume, mass) =>(mass / volume).toFixed(2),
    PopulationDensity: (population, area) => (population / area).toFixed(2),
    Hypotenuse: (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2),
    CalculateY: (a) => (Math.pow(a, 2) + 10 / Math.sqrt(Math.pow(a, 2) + 1)).toFixed(2),
    Descriptions: {
        SquarePerimeter: "Периметр Квадрата",
        CubeVolume: "Объем Куба",
        CubeSideSurfaceArea: "Площадь поверхности Куба",
        СircumFerence: "Длина окружности круга",
        AreaOfCircle: "Площадь круга",
        MaterialDensity: "Плотность материала",
        PopulationDensity: "Плотность населения",
        Hypotenuse: "Гипотенуза прямоугольного треугольника",
        CalculateY: "Вычислить значение Y",
    },
    InputPlaceholders: {
        SquarePerimeter: ["Введите длину стороны квадрата"],
        CubeVolume: ["Введите длину ребра куба"],
        CubeSideSurfaceArea: ["Введите длину ребра куба"],
        СircumFerence: ["Введите радиус круга"],
        AreaOfCircle: ["Введите радиус круга"],
        MaterialDensity: ["Введите объем материала", "Введите массу материала"],
        PopulationDensity: ["Введите население", "Введите площадь"],
        Hypotenuse: ["Введите длину первого катета", "Введите длину второго катета"],
        CalculateY: ["Введите значение a для вычисления Y"],
    },
}

function updateInputsForFunction(func, containerId) {
    const inputContainer = document.getElementById(containerId);
    const argNames = func.toString().match(/\(([^)]+)\)/)[1].split(',').map(arg => arg.trim());

    inputContainer.innerHTML = '';
    argNames.forEach((argName, index) => {
        const selectedMethod = inputMethod.value;
        const input = document.createElement('input');
        inputContainer.appendChild(input);
        input.classList.add('form-control', 'w', 'mt-2');
        input.type='number'
        input.placeholder = (Calculate.InputPlaceholders[selectedMethod] && Calculate.InputPlaceholders[selectedMethod][index]) || "Введите значение";
    });
}

function populateSelectOptions(optionsArray, selectId) {
    const selectElement = document.getElementById(selectId);
    optionsArray.forEach(optionValue => {
        const optionElement = document.createElement('option');

        optionElement.value = optionValue;

        optionElement.textContent = Calculate.Descriptions[optionValue];
        selectElement.appendChild(optionElement);
    });
}

let button = document.querySelector('#calcB');
let result = document.querySelector('#result');
let inputMethod = document.querySelector('#formul');

button.addEventListener("click", function () {
    const selectMethod = inputMethod.value;
    const inputContainer = document.getElementById('input-block');
    const inputElements = inputContainer.querySelectorAll('input');
    const argsArray = Array.from(inputElements).map(input => parseFloat(input.value.trim()));
    result.textContent = `Результат: ${Calculate[selectMethod](...argsArray)}`;
});

inputMethod.addEventListener('change', function () {
    const selectedMethod = inputMethod.value;
    if (Calculate[selectedMethod]) {
        updateInputsForFunction(Calculate[selectedMethod], 'input-block');
    }
});

const methodNames = Object.keys(Calculate).filter(key => key !== 'Descriptions' && key !== 'InputPlaceholders');
populateSelectOptions(methodNames, 'formul');
updateInputsForFunction(Calculate.SquarePerimeter, 'input-block');
