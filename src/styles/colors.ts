import convertCssVarialbes from "@/util/convertCssVarialbes"

const colorSet = {
  black: '#000000',
  white: '#ffffff',
  blue: '#0064FF',
  red: '#ff0000',
  orange: '#ff5b1a',
  lightblue: '#d7dfe9',
  lightgray: '#f0f0f0',
  darkgray: '#343434',
}

const colorVariables = convertCssVarialbes(colorSet)

export default colorVariables