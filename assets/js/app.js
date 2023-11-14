let Calculate = {
    SquarePerimeter: (side) => Math.round((side * 4) * 100) / 100,
    CubeVolume: (edge) => Math.round((edge**3) * 100) / 100,
    CubeSideSurfaceArea: (edge) => Math.round((4 * edge**2) * 100) / 100,
    СircumFerence: (radius) => Math.round(2 * radius * Math.PI * 100) / 100,
    AreaOfCircle: (radius) => Math.round(Math.PI * radius**2 * 100) / 100,
    MaterialDensity: (volume, mass) => Math.round(mass / volume * 100) / 100,
    PopulationDensity: (population, area) => Math.round(population / area * 100) / 100,
    Hypotenuse: (a, b) => Math.round(Math.sqrt(a**2 + b**2) * 100) / 100,
    CalculateY: (a) => Math.round((a**2 + 10 / Math.sqrt(a**2 + 1)) * 100) / 100,
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
        PopulationDensity: ["Введите кол-во население", "Введите площадь"],
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
    if(isNaN(Calculate[selectMethod](...argsArray))){
        result.textContent = `Введите корректные данные :)`;
    }
    else{
        result.textContent = `Результат: ${Calculate[selectMethod](...argsArray)}`;
    }
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
