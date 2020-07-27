const classes = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ')

export default classes