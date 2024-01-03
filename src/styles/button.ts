import convertCssVarialbes from "@/util/convertCssVarialbes"

const buttonColorSet = {
  primary: '#001C39',
  secondary: '#eee',
  danger: '#ff0000',
}

const ButtonColor = convertCssVarialbes(buttonColorSet, '--button')

export default ButtonColor