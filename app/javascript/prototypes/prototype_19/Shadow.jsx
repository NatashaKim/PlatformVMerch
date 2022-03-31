import React, { PureComponent } from 'react'

export default class Shadow extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { backgroundTheme, shadowType } = this.props
    let imgsrc = ''
    if (shadowType === 'stroke') {
      imgsrc = '/assets/shadowStroke.svg'
    } else if (backgroundTheme === 'blue') {
      imgsrc = '/assets/shadowBlue.svg'
    } else if (backgroundTheme === 'pink') {
      imgsrc = '/assets/shadowPink.svg'
    } else {
      imgsrc = '/assets/shadowRed.svg'
    }

    return (
      <div className="Shadow">
        <img src={imgsrc} />
      </div>
    )
  }
}
