const useValidator = (fields = []) => {

  const required = (value) => !!value

  const max = (value, args) => {
    const [max] = args
    return typeof value === 'number' ? value <= max : String(value).length <= max
  }

  const min = (value, args) => {
    const [min] = args
    return typeof value === 'number' ? value >= min : String(value).length >= min
  }

  const validationsFunctions = {
    required,
    max,
    min
  }

  const validateField = (validation, value) => {
    if (typeof validation === 'function') {
      return validation(value)
    }

    const [fn, ...args] = validation.split(':')

    if(!!args.length) {
      return validationsFunctions[fn](value, args)
    }

    return validationsFunctions[fn](value)
  }

  const validators = (validation) => {
    return typeof validation === 'function'
    ? [validation]
    : validation.split(',')
  }

  const errors = fields.map(({ name, value, validation }) => {
    const offenses = validators(validation).map(fn => ({
      validationName: typeof fn === 'function' ? fn.name : fn,
      valid: validateField(fn, value)
    }))
    .filter(({ valid }) => !valid)

    return ({
      name,
      offenses: offenses.map(({ validationName }) => validationName)
    })
  })

  const fieldErrors = (fieldName) => errors.filter(({ name }) => name === fieldName)

  return {
    errors,
    fieldErrors,
    valid: !!errors.length
  }
}

export default useValidator