import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

const Button = ({ fullWidth, children, onClick }) => {
  return (
    <button onClick={onClick} className={classNames('btn', {'btn--block':fullWidth})}>
      {children}
    </button>
  )
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  children: PropTypes.any
}

export default Button