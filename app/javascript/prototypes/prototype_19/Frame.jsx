import React, { PureComponent } from 'react'
import {
  getRandomArbitrary,
  sample,
  getFrame,
  getContainerRect,
  shuffle
} from './utilities'

const firstCloudTagQuantity = [3, 4, 5]
const classesLeft804 = ['Frame-left-0', 'Frame-left-1']
const classesLeft1256 = ['Frame-left-0', 'Frame-left-1', 'Frame-left-2']
const classesLeftAll = [
  'Frame-left-0',
  'Frame-left-1',
  'Frame-left-2',
  'Frame-left-3'
]
const classesRight804 = ['Frame-right-0', 'Frame-right-1']
const classesRight1256 = ['Frame-right-0', 'Frame-right-1', 'Frame-right-2']
const classesRightAll = [
  'Frame-right-0',
  'Frame-right-1',
  'Frame-right-2',
  'Frame-right-3'
]

export default class Frame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tagNumber: props.tagNumber
    }
  }

  componentDidMount() {
    //this.props.scaleBox.style.transform = 'scale(1, 1)'
    const { containerClass } = this.props
    let firstCloudTags = [...this.refs.firstCloudRef.children]
    let popped = firstCloudTags.pop()
    let tagSumWidth = 0
    firstCloudTags.forEach((item, i) => {
      let tagRect = item.getBoundingClientRect()
      tagSumWidth = tagSumWidth + tagRect.width + 100
    })

    let newFirstCloudWidth = tagSumWidth + 100 + 452
    var firstCloudElement = this.refs.firstCloudRef,
      i,
      w,
      width,
      height

    if (tagSumWidth != 0) {
      firstCloudElement.style.width = newFirstCloudWidth + 'px'
      width = newFirstCloudWidth
      firstCloudElement.style.width = 6000 + 'px'
      height = firstCloudElement.offsetHeight
      for (w = width; w; w--) {
        firstCloudElement.style.width = w + 'px'
        if (firstCloudElement.offsetHeight > height * 2) break
      }
    }

    let secondCloudElement = this.refs.secondCloudRef
    let secondCloudTags = [...secondCloudElement.children]
    let longestTag = 0
    secondCloudTags.forEach((item, i) => {
      let tagRect2 = item.getBoundingClientRect()
      if (tagRect2.width + 200 > longestTag) {
        longestTag = tagRect2.width + 200
      }
    })
    secondCloudElement.style.width = longestTag + 1 + 'px'

    if (w < longestTag + 452) {
      w = longestTag + 452
    }
    if (tagSumWidth != 0) {
      firstCloudElement.style.width = w + 1 + 'px'
    } else if (containerClass === 'Left') {
      firstCloudElement.style.width = '452px'
      firstCloudElement.style.height = '904px'
      firstCloudElement.style.gridColumn = '3 / 4'
    } else {
      firstCloudElement.style.width = 452 + 'px'
      firstCloudElement.style.height = 904 + 'px'
      firstCloudElement.style.gridColumn = '1 / 2'
    }

    if (secondCloudTags.length === 0) {
      secondCloudElement.style.width = '904px'
      secondCloudElement.style.height = '1356px'
      secondCloudElement.style.borderRadius = '452px'
    }

    let frameElement = this.refs.frameRef

    if (tagSumWidth != 0) {
      frameElement.style.width = firstCloudElement.style.width
      frameElement.style.maxWidth = firstCloudElement.style.maxWidth
    } else {
      frameElement.style.width = '1808px'
      frameElement.style.maxWidth = '1808px'
    }

    let thirdCloudElement = this.refs.thirdCloudRef
    let firstRect = firstCloudElement.getBoundingClientRect()
    let secondRect = secondCloudElement.getBoundingClientRect()
    let thirdRect = thirdCloudElement.getBoundingClientRect()
    let frameTop = Math.min(firstRect.top, secondRect.top, thirdRect.top)
    let frameBottom = Math.max(
      firstRect.bottom,
      secondRect.bottom,
      thirdRect.bottom
    )
    frameElement.style.height = frameBottom - frameTop + 'px'

    let frameClass = ''
    if (containerClass === 'Left' && secondRect.height < 452) {
      frameClass = 'Frame-left-0'
    } else if (containerClass === 'Left' && secondRect.height < 804) {
      frameClass = sample(classesLeft804)
    } else if (containerClass === 'Left' && secondRect.height < 1256) {
      frameClass = sample(classesLeft1256)
    } else if (containerClass === 'Left') {
      frameClass = sample(classesLeftAll)
    } else if (containerClass === 'Right' && secondRect.height < 452) {
      frameClass = 'Frame-right-0'
    } else if (containerClass === 'Right' && secondRect.height < 804) {
      frameClass = sample(classesRight804)
    } else if (containerClass === 'Right' && secondRect.height < 1256) {
      frameClass = sample(classesRight1256)
    } else {
      frameClass = sample(classesRightAll)
    }
    frameElement.classList.add(frameClass)
  }
  componentDidUpdate(prevProps, prevState) {
    this.componentDidMount()
  }

  render() {
    let { backgroundTheme, containerClass, tags } = this.props
    let tagNumber = this.state.tagNumber

    let firstCloudTagNumber = 0
    if (tagNumber < 4) {
      firstCloudTagNumber = 0
    } else if (tagNumber > 6) {
      firstCloudTagNumber = sample(firstCloudTagQuantity)
    } else {
      firstCloudTagNumber = 3
    }

    let secondCloudTagNumber = tagNumber - firstCloudTagNumber
    if (secondCloudTagNumber === 1) {
      tagNumber = tagNumber + 1
      secondCloudTagNumber === 2
    }

    let firstCloudArray = shuffle(tags).slice(0, firstCloudTagNumber)
    let secondCloudArray = shuffle(tags).slice(firstCloudTagNumber, tagNumber)

    let cloudColor = ''
    if (backgroundTheme === 'blue') {
      cloudColor = '#2836FF'
    } else if (backgroundTheme === 'pink') {
      cloudColor = '#FD24E4'
    } else {
      cloudColor = '#F54F59'
    }

    let thirdCloudHeight = Math.floor(getRandomArbitrary(2, 3)) * 352 + 100

    return (
      <div className="Frame" ref="frameRef">
        <div
          className="FirstCloud"
          style={{ backgroundColor: cloudColor }}
          ref="firstCloudRef"
        >
          {firstCloudArray.map((tag) => (
            <div key={tag.id} className="Tag">
              {tag.name}
            </div>
          ))}
          <div className="Sticker"></div>
        </div>
        <div
          className="SecondCloud"
          style={{ backgroundColor: cloudColor }}
          ref="secondCloudRef"
        >
          {secondCloudArray.map((tag) => (
            <div key={tag.id} className="Tag">
              {tag.name}
            </div>
          ))}
        </div>
        <div
          className="ThirdCloud"
          style={{ backgroundColor: cloudColor, height: thirdCloudHeight }}
          ref="thirdCloudRef"
        >
          <div className="Sticker"></div>
        </div>
      </div>
    )
  }
}
