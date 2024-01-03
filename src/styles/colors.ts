import convertCssVarialbes from "@/util/convertCssVarialbes"

const colorSet = {
  black: '#000000',
  white: '#ffffff',
  blue: '#0064FF',
  red: '#ff0000',
  orange: '#ff5b1a',
  lightblue: '#d7dfe9',
  lightGray: '#f2f2f2',
  darkgray: '#343434',
  beige: '#f5f5f5',
}

const colorVariables = convertCssVarialbes(colorSet)

export default colorVariables