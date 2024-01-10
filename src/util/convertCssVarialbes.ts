type Style = {
  [key: string]: string | Record<string, string>
}

function convertCssVarialbes(
  style: Style,
  prefix = '--color',
): Record<string, string> {
  const cssVariables: Record<string, string> = {}

  function processObject(
    styleObject: Style,
    currentPrefix: string[] = [],
  ) {
    Object.entries(styleObject).forEach(([key, value]) => {
      const variableName = [...currentPrefix, key].join('-')

      if (typeof value === 'string') {
        cssVariables[`${prefix}-${variableName}`] = value
      } else if (typeof value === 'object') {
        processObject(value, [...currentPrefix, key])
      }
    })
  }

  processObject(style)

  return cssVariables
}

export default convertCssVarialbes