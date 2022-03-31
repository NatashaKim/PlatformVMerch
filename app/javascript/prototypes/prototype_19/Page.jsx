import React, { PureComponent } from 'react'
import Container from './Container'
import Control from './Control'
import {
  getRandomArbitrary,
  sample,
  getFrame,
  getContainerRect,
  shuffle
} from './utilities'

const colors = ['blue', 'pink', 'red']
const containers = ['Left', 'Right']
const tags = [
  {
    id: 1,
    name: 'Not legacy'
  },
  {
    id: 2,
    name: 'Opensource'
  },
  {
    id: 3,
    name: 'No bullshit'
  },
  {
    id: 4,
    name: 'Dev2dev'
  },
  {
    id: 5,
    name: 'Coreteam'
  },
  {
    id: 6,
    name: 'Global project'
  },
  {
    id: 7,
    name: 'Hardskills'
  },
  {
    id: 8,
    name: 'Highload'
  },
  {
    id: 9,
    name: 'Scale'
  },
  {
    id: 10,
    name: 'Productfirst'
  },
  {
    id: 11,
    name: 'Cloud'
  },
  {
    id: 12,
    name: 'Go'
  }
]
const shadows = ['stroke', 'gradient']
const shapes = ['arc', 'ellipse', 'circle', 'snake']
const texts = [
  'Platform V ＊ Platform V ＊ Platform V ＊ Platform V ＊ Platform V ＊ Platform V ＊ Platform V ＊',
  'Functions ＊ Functions ＊ Functions ＊ Functions ＊ Functions ＊ Functions ＊ Functions ＊',
  'Synapse ＊ Synapse ＊ Synapse ＊ Synapse ＊ Synapse ＊ Synapse ＊ Synapse ＊',
  'Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊ Corax ＊'
]

export default class Page extends PureComponent {
  constructor(props) {
    super(props)
    // this.state = {
    //   ControlValue: ControlValue
    // }

    //let colorValue = sample(colors)
    //let containerClassValue = sample(containers)
    //let tagNumberValue = Math.floor(Math.random() * 12)
    this.state = {
      // backgroundTheme: props.backgroundTheme
      //   ? props.backgroundTheme
      //   : sample(colors),
      backgroundTheme: sample(colors),
      containerClass: sample(containers),
      tagNumber: Math.floor(Math.random() * 12),
      shadowType: sample(shadows),
      ribbonShape: sample(shapes),
      ribbonText: sample(texts)
    }
    //this.toggleChildMenu = this.toggleChildMenu.bind(this)
  }

  handleChange = (value, property) => {
    if (property === 'ribbonShape') {
      this.setState({
        ribbonShape: value
      })
    } else if (property === 'backgroundTheme') {
      this.setState({
        backgroundTheme: value
      })
    } else if (property === 'shadowType') {
      this.setState({
        shadowType: value
      })
    } else {
      let scaledContent = [...this.refs.artboardRef.children][0]
      scaledContent.style.transform = 'scale(1,1)'
      this.setState({
        tagNumber: value
      })
    }
  }

  handleInputChange = (value) => {
    this.setState({
      ribbonText: value
    })
  }

  // handleSliderChange = (value) => {
  //   this.setState({
  //     ribbonShape: value
  //   })
  // }

  handleSampleAll = () => {
    this.setState({
      backgroundTheme: sample(colors),
      containerClass: sample(containers),
      tagNumber: Math.floor(Math.random() * 12),
      shadowType: sample(shadows),
      ribbonShape: sample(shapes),
      ribbonText: sample(texts)
    })
  }

  // toggleChildMenu() {
  //   this.setState((state) => ({
  //     open: !state.open
  //   }))
  // }

  componentDidUpdate(prevProps, prevState) {
    this.componentDidMount()
  }
  componentDidMount() {
    let scaledWrapper = this.refs.artboardRef
    //let scaledContent = this.refs.containerRef
    let applyScaling = (scaledWrapper) => {
      // Get the scaled content, and reset its scaling for an instant
      let scaledContent = [...scaledWrapper.children][0]
      scaledContent.style.transform = 'scale(1, 1)'

      let { width: cw, height: ch } = scaledContent.getBoundingClientRect()
      let { width: ww, height: wh } = scaledWrapper.getBoundingClientRect()

      //  let scaleAmtX = ww / cw;
      //  let scaleAmtY = wh / ch;
      let scaleAmtX = Math.min(ww / cw, wh / ch)
      let scaleAmtY = scaleAmtX

      scaledContent.style.transform = `scale(${scaleAmtX}, ${scaleAmtY})`
    }

    applyScaling(scaledWrapper)
  }

  render() {
    let {
      backgroundTheme,
      containerClass,
      tagNumber,
      shadowType,
      ribbonShape,
      ribbonText
    } = this.state
    return (
      <div className="Page">
        <header></header>
        <div className="Constructor">
          <div className="Wrapper">
            <div
              className="Artboard"
              ref="artboardRef"
              style={{ transform: 'scale(1,1)' }}
            >
              <Container
                containerClass={containerClass}
                backgroundTheme={backgroundTheme}
                tagNumber={tagNumber}
                shadowType={shadowType}
                tags={tags}
                ribbonShape={ribbonShape}
                ribbonText={ribbonText}
                owner={this}
                ref="containerRef"
                style={{ transform: 'scale(1,1)' }}
              />
            </div>
          </div>
          <Control
            shapes={shapes}
            colors={colors}
            tagNumber={tagNumber}
            shadows={shadows}
            container={this}
            handleChange={(value, property) =>
              this.handleChange(value, property)
            }
            handleInputChange={(value) => this.handleInputChange(value)}
            handleSampleAll={() => this.handleSampleAll()}
            // value={value}
          />
        </div>
        <footer></footer>
      </div>
    )
  }
}
