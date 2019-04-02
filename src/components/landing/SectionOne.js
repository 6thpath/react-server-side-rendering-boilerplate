import React, { Component, createElement } from 'react'
import TweenOne from 'rc-tween-one'

import { section1Data } from './dataSource/index'

class SectionOne extends Component {
  render () {
    const animationSettings = {
      type: 'from',
      ease: 'easeOutQuad'
    }

    return (
      <div className='home-page-wrapper content1-wrapper'>
        <div className='home-page content1'>
        <TweenOne animation={{ ...animationSettings, x: -50 }}>
          <div key='title' className='title-wrapper'>
            {
              section1Data.aboutUs.map((item, i) =>
                createElement(
                  item.name.indexOf('title') === 0 ? 'h1' : 'div',
                  { key: i.toString(), ...item },
                  typeof item.children === 'string' &&
                  item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/)
                    ? React.createElement('img', { src: item.children, alt: 'img' })
                    : item.children
                )
              )
            }
          </div>
          </TweenOne>
        </div>
      </div>
    )
  }
}

export default SectionOne
