import React, { Component, createElement } from 'react'
import TweenOne from 'rc-tween-one'

class SectionOne extends Component {
  render () {
    const animationSettings = {
      type: 'from',
      ease: 'easeOutQuad'
    }

    const children = [
      {
        name: 'title',
        children: 'ABOUT US',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content1-title-content',
        children: 'Found in 2010 as a team of cross-industries experts, system integrators and application developers, Innos is now a cross-department team of mobile, web, data and embedded system specialists with 8-years experience on the business software development market, a reliable information technology partner for Vietnam SME and MNC brands. In beginning of 2018, Innos has been empowered with strong financial support to invest in R&D as it acquired by Acexis JSC. We know what defines impactful, wide-ranging solutions powered by the latest technologies across all industries. With passion and exhaustive real-life cross-functional skills and the ability of our software engineers, we bring your ideas to life, and create stunning innovated applications for your business.',
      }
    ]

    return (
      <div className='home-page-wrapper content1-wrapper'>
        <div className='home-page content1'>
        <TweenOne animation={{ ...animationSettings, x: -50 }}>
          <div key='title' className='title-wrapper'>
            {
              children.map((item, i) =>
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
