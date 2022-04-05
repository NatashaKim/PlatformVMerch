import React, { PureComponent } from 'react'
import ButtonSet from './ButtonSet'
import Input from './Input'
import Slider from './Slider'
import Button from './Button'
import {
  getRandomArbitrary,
  sample,
  getFrame,
  getContainerRect,
  shuffle
} from './utilities'

export default class Control extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tagNumber: props.tagNumber
    }
  }

  handleChange = (value, property) => {
    this.props.handleChange(property, value)
  }

  handleInputChange = (value) => {
    this.props.handleInputChange(value)
  }

  render() {
    let {
      shapes,
      colors,
      shadows,
      handleSampleAll,
      ribbonShape,
      backgroundTheme,
      shadowType
    } = this.props
    let tagNumber = this.state.tagNumber

    return (
      <div className="Control">
        <div className="ControlCard">
          <div className="ControlRibbon">
            <h1>Лента</h1>
            <Input handleChange={(value) => this.handleInputChange(value)} />
            <ButtonSet
              options={shapes}
              value={ribbonShape}
              property={'ribbonShape'}
              handleChange={(value, property) =>
                this.handleChange(value, property)
              }
            />
          </div>

          <div className="ControlTags">
            <h1>Теги</h1>
            <ButtonSet
              options={colors}
              value={backgroundTheme}
              property={'backgroundTheme'}
              handleChange={(value, property) =>
                this.handleChange(value, property)
              }
            />
            <Slider
              min="0"
              max="12"
              step="1"
              handleChange={(value, property) =>
                this.handleChange(value, property)
              }
            />
          </div>

          <div className="ControlShadow">
            <h1>Фон</h1>
            <ButtonSet
              options={shadows}
              value={shadowType}
              property={'shadowType'}
              handleChange={(value, property) =>
                this.handleChange(value, property)
              }
            />
          </div>
        </div>
        <div>
          <Button text="Рандомизировать" handleClick={handleSampleAll} />
        </div>
      </div>
    )
  }
}
