import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToggleButton from './ToggleButton'

export default class ButtonSet extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleChange = (value) => {
    const { property, handleChange } = this.props
    handleChange(property, value)
    this.setState({
      value: value
    })
  }

  render() {
    const { name, options, value } = this.props
    const buttonElements = []

    options.forEach((option, i) => {
      buttonElements.push(
        <ToggleButton
          text={option}
          isOn={option === this.state.value}
          handleClick={() => this.handleChange(option)}
          key={i}
        />
      )
    })

    return <div className="ButtonSet">{buttonElements}</div>
  }
}
