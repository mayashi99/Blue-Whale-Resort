exports.isRequired = (value) => typeof value === 'string' && value.trim().length > 0

exports.isEmail = (value) => /\S+@\S+\.\S+/.test(value)