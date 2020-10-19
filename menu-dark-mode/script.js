const html = document.querySelector('html')
const checkbox = document.querySelector("input[name=theme]")

const getstyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialCor = {
    bg: getstyle(html, '--bg'),
    bgMenu: getstyle(html, '--menu'),
    colorPrimary: getstyle(html, '--color-primary'),
    hover: getstyle(html, '--hover'),
    logoPathPrimary: getstyle(html, '--logo-pathprimary')
}

const darkMode = {
    bg: "#000000",
    bgMenu: "#30343a",
    colorPrimary: "#adb4bb",
    hover: "#6dbbea",
    logoPathprimary: "#ffffff"

}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) :  changeColors(initialCor)
})