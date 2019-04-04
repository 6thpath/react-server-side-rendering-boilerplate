import React, { Component, createElement } from 'react'
import TweenOne from 'rc-tween-one'
import { OverPack } from 'rc-scroll-anim'

import { section1Data } from './dataSource/index'

class SectionOne extends Component {
  render () {
    const animationSettings = {
      type: 'from',
      ease: 'easeInOutQuad',
      duration: 400,
      y: 60,
      opacity: 0
    }

    return (
      <div className='home-page-wrapper content1-wrapper'>
        <div className='home-page content1'>
          <OverPack>
            <TweenOne animation={{...animationSettings}}
            >
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
          </OverPack>
        </div>
      </div>
    )
  }
}

export default SectionOne
