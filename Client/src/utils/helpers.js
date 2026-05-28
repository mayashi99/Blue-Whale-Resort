export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const formatPrice = (value) => new Intl.NumberFormat('en-US').format(value)