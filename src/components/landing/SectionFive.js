import React, { Component, createElement } from 'react'
import AliceCarousel from 'react-alice-carousel'
import TweenOne from 'rc-tween-one'
import { OverPack } from 'rc-scroll-anim'

import { mediaDir } from '../media_dirname'

class SectionFive extends Component {
  render () {
    const responsive = {
      0: { items: 1 },
      1000: { items: 2 }
    }

    const animationSettings = {
      type: 'from',
      ease: 'easeInOutQuad',
      duration: 400,
      y: 60,
      opacity: 0
    }

    const title = [
      {
        name: 'title',
        children: 'Our Offices',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content1-title-content',
        children: 'Innos operates in multiple offices and development center across Vietnam. Reach out to us for software development and services in your region.'
      }
    ]

    return (
      <div className='container'>
        <div className='home-page-wrapper content1-wrapper' style={{ padding: 0 }}>
          <div key='title' className='title-wrapper'>
            {
              title.map((item, i) =>
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
          <OverPack>
            <TweenOne
              key='0'
              animation={{ opacity: 1 }}
              style={{ opacity: 0 }}
            >
              <div>
                <AliceCarousel
                  buttonsDisabled
                  dotsDisabled
                  responsive={responsive}
                >
                  <div className="offices-slider__item" style={{ backgroundImage: `url(${mediaDir('offices/hcm.jpg')})` }}>
                    <div className="offices-slider__content">
                      <div className="offices-slider__overlay"></div>
                      <div className="offices-slider__text">
                        <div className="offices-slider__city">VIET NAM<br />HO CHI MINH</div>
                        <div className="offices-slider__address">
                          <p>573/12 SU VAN HANH, WARD 13, DISTRICT 10</p>
                          <p>+84 28 3863 3636</p>
                          <p><a href="mailto:info@intellectsoft.net">info@intellectsoft.net</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offices-slider__item" style={{ backgroundImage: `url(${mediaDir('offices/nhatrang.jpg')})` }}>
                    <div className="offices-slider__content">
                      <div className="offices-slider__overlay"></div>
                      <div className="offices-slider__text">
                        <div className="offices-slider__city">VIET NAM<br />NHA TRANG</div>
                        <div className="offices-slider__address">
                          <p>37 NGUYEN DINH CHIEU, NHA TRANG CITY, KHANH HOA PROVICE</p>
                          <p>+84 901 919 757</p>
                          <p>
                            <a href="mailto:info@intellectsoft.net">info@intellectsoft.net</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AliceCarousel>
              </div>
            </TweenOne>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default SectionFive
