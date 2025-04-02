const input = document.querySelector('input')
const lowerCaseOutput = document.querySelector("#lowercase span")
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')
const alternateCaseOutput = document.querySelector("#altcase span")

// Capitalizes the first letter of a word
function capitalize(str) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}

// Converts string to camelCase
function camelcase(str) {
    const lowerCaseStr = str.toLowerCase();
    const wordsArray = lowerCaseStr.split(" ")
    const finalArray = wordsArray.map((word, i) => {
        if (i == 0) return word
        return capitalize(word)
    })
    return finalArray.join("")
}

// Converts string to PascalCase
function pascalcase(str) {
    const lowerCaseStr = str.toLowerCase();
    const wordsArray = lowerCaseStr.split(" ");
    const finalArray = wordsArray.map((word, i) => {
        return capitalize(word)
    })
    return finalArray.join("");
}

// Converts string to snake_case
function snakeCase(str) {
    return str.replaceAll(' ', '_')
}

// Converts string to kebab-case
function kebabCase(str) {
    return str.replaceAll(' ', '-')
}

// Removes spaces from string (trimming)
function trim(str) {
    return str.replaceAll(' ', '')
}

// Converts to Alternating Case (Added for extra functionality)
function alternatingCase(str) {
    return str
        .split("")
        .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
        .join("");
}

function updateScreen() {
    lowerCaseOutput.innerText = input.value.trim().toLowerCase()
    upperCaseOutput.innerText = input.value.trim().toUpperCase()
    camelCaseOutput.innerText = camelcase(input.value.trim())
    pascalCaseOutput.innerText = pascalcase(input.value.trim())
    snakeCaseOutput.innerText = snakeCase(input.value.trim())
    kebabCaseOutput.innerText = kebabCase(input.value.trim())
    trimOutput.innerText = trim(input.value.trim())
    alternateCaseOutput.innerText = alternatingCase(input.value.trim())
}

updateScreen()
input.addEventListener('input', updateScreen)