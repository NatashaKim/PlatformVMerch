import React, { PureComponent } from 'react'
import Shadow from './Shadow'
import Ribbon from './Ribbon'
import Frame from './Frame'

import {
  getRandomArbitrary,
  sample,
  getFrame,
  getContainerRect,
  shuffle
} from './utilities'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tagNumber: props.tagNumber
    }
  }

  render() {
    let {
      backgroundTheme,
      containerClass,
      shadowType,
      ribbonShape,
      ribbonText,
      tags
    } = this.props

    return (
      <div
        className={`Container ${containerClass}`}
        ref={'container'}
        style={{ transform: 'scale(1,1)' }}
      >
        <Shadow backgroundTheme={backgroundTheme} shadowType={shadowType} />
        <Ribbon ribbonShape={ribbonShape} ribbonText={ribbonText} />
        <Frame
          backgroundTheme={backgroundTheme}
          containerClass={containerClass}
          tagNumber={this.state.tagNumber}
          tags={tags}
          scaleBox={this}
        />
      </div>
    )
  }
}
