export const isEmail = (value: string) => {
  const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  return regExp.test(value)
}

export const isLongerThanSix = (value: string) => {
  return value.length >= 6
}

export const isSamePassword = (password: string, passwordConfirm: string) => {
  return password === passwordConfirm
}

export const isNotEmpty = (value: string) => {
  return value.trim() !== ""
}