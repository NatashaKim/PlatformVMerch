import React, { PureComponent } from 'react'
import {
  getRandomArbitrary,
  sample,
  getFrame,
  getContainerRect,
  shuffle
} from './utilities'

const arcViewBox = '0 0 238 336'
const arcD =
  'M212.377 335.213L212.377 118.688C212.377 66.9456 170.431 24.9999 118.688 24.9999C66.9457 24.9999 25 66.9456 25 118.688L25 279.52'

const ellipseViewBox = '0 0 230 378'
const ellipseD =
  'M25 189L25 115C25 91.1305 34.4821 68.2387 51.3604 51.3604C68.2387 34.4821 91.1303 25 115 25C138.869 25 161.761 34.4821 178.639 51.3604C195.518 68.2387 205 91.1305 205 115L205 263C205 274.819 202.672 286.522 198.149 297.441C193.626 308.361 186.997 318.282 178.64 326.64C170.282 334.997 160.361 341.626 149.441 346.149C138.522 350.672 126.819 353 115 353C103.181 353 91.4778 350.672 80.5585 346.149C69.6392 341.626 59.7176 334.997 51.3604 326.64C43.0031 318.282 36.3738 308.361 31.8508 297.441C27.3279 286.522 25 274.819 25 263L25 189.01'

const circleViewBox = '0 0 306 306'
const circleD =
  'M153 25C127.684 25 102.937 32.5071 81.8871 46.5719C60.8376 60.6367 44.4315 80.6276 34.7435 104.017C25.0555 127.405 22.5206 153.142 27.4595 177.972C32.3984 202.801 44.5893 225.609 62.4904 243.51C80.3915 261.411 103.199 273.602 128.028 278.54C152.858 283.479 178.595 280.945 201.983 271.257C225.372 261.568 245.363 245.162 259.428 224.113C273.493 203.063 281 178.316 281 153C281 136.191 277.689 119.546 271.257 104.017C264.824 88.4868 255.396 74.3762 243.51 62.4903C231.624 50.6044 217.454 41.3404 201.983 34.7434C186.452 28.3135 169.368 25 153.009 25'

const snakeViewBox = '0 0 328 307'
const snakeD =
  'M0 281.39H226.61C235.028 281.39 243.363 279.732 251.14 276.511C258.917 273.289 265.983 268.568 271.936 262.616C277.888 256.663 282.609 249.597 285.831 241.82C289.052 234.043 290.71 225.708 290.71 217.29C290.71 208.873 289.052 200.538 285.83 192.762C282.609 184.985 277.887 177.919 271.935 171.968C265.983 166.017 258.916 161.296 251.139 158.076C243.362 154.855 235.027 153.199 226.61 153.2H93.37C76.3696 153.2 60.0655 146.447 48.0445 134.426C36.0234 122.404 29.27 106.1 29.27 89.1C29.27 72.0996 36.0234 55.7955 48.0445 43.7745C60.0655 31.7534 76.3696 25 93.37 25H327.05'

export default class Ribbon extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { ribbonShape, ribbonText } = this.props

    let viewBox = ''
    let d = ''
    if (ribbonShape === 'arc') {
      ;(viewBox = arcViewBox), (d = arcD)
    } else if (ribbonShape === 'ellipse') {
      ;(viewBox = ellipseViewBox), (d = ellipseD)
    } else if (ribbonShape === 'circle') {
      ;(viewBox = circleViewBox), (d = circleD)
    } else {
      ;(viewBox = snakeViewBox), (d = snakeD)
    }

    return (
      <div className="Ribbon">
        <svg
          width="100%"
          height="100%"
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="path" d={d} stroke="white" strokeWidth="50" />
          <text
            style={{
              fill: '#282828',
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 3
            }}
            dominantBaseline="middle"
            alignmentBaseline="middle"
            textAnchor="middle"
          >
            <textPath xlinkHref="#path">{ribbonText}</textPath>
          </text>
        </svg>
      </div>
    )
  }
}
