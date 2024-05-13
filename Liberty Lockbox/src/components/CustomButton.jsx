import React from 'react'
import '../styles/CustomButton.css'
import PropTypes from 'prop-types'

function CustomButton({width, height, text, onClick, border, color}) {
  return (
    <button className='customButton'
        style={{
            width: width, height: height, border: border, color: color
        }} onClick={onClick}>
            {text}
    </button>
  )
}

CustomButton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    border: PropTypes.string,
    color: PropTypes.string
}

export default CustomButton