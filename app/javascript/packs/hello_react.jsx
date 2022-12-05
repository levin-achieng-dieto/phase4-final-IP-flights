import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
    <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
    name: "David"
}

Hello.PropTypes = {
    name: PropTypes.string
}

document.addEventListener('DOMContentLoaded'), () => {
    ReactDom.render
}