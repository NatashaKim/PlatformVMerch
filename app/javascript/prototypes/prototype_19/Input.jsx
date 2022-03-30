import React from 'react'
import PropTypes from 'prop-types'

class A_input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value ? props.value : ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
    this.props.handleChange(e.target.value)
  }

  render() {
    return (
      <div className="Input_container">
        <input
          className="tg"
          name={this.props.name}
          autocomplete={this.props.autocomplete}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

export default A_input
