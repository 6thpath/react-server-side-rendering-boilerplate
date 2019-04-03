import React, { Component, createElement } from 'react'
import { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import { mediaDir } from '../media_dirname'

class SectionFour extends Component {
  render() {
    const title = [
      { name: 'title', children: 'LATEST NEWS AND INSIGHTS', className: 'title-h1' }
    ]

    return (
      <div className='home-page-wrapper content4-wrapper'>
        <div className='home-page content4' style={{ padding: '40px 24px' }}>
          <div className='title-wrapper'>
            {
              title.map((item, i) =>
              createElement(
                item.name.indexOf('title') === 0 ? 'h1' : 'div',
                { key: i.toString(), ...item },
                typeof item.children === 'string' &&
                item.children.match(
                  /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
                )
                  ? createElement('img', {
                      src: item.children,
                      alt: 'img',
                    })
                  : item.children
              )
            )}
          </div>
          <OverPack playScale={0.3}>
            <TweenOneGroup
              key='blog'
              enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
              leave={{ y: 30, opacity: 0 }}
              className='content4-img-wrapper'
            >
              <div className='container'>
                <div className='blog__grid js-show'>

                  <div className='featured-post__wrapper'>
                    <div className='blog__item'>
                      <div className='blog__content'>
                        <div className='blog__media'>
                          <div
                            className='blog__media-inner'
                            style={{ backgroundImage: `url(${mediaDir('blogs/misc1.jpg')})` }}
                          />
                        </div>
                        <div className='blog__text'>
                          <span className='blog__tag'>AR</span>
                          <Link to='/'>
                            <h3 className='blog__title'>AR Apps, Eyepieces &amp; Mirrors: How Augmented Reality Changes the World</h3>
                          </Link>
                          <p className='blog__description'>5 exciting examples from retail, marketing, and the military.</p>
                          <Link to='/' className='blog__link--more'>
                            Learn more <Icon type='right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='posts__wrapper'>
                    <div className='blog__item'>
                      <div className='blog__content'>
                        <div className='blog__media'>
                          <div
                            className='blog__media-inner'
                            style={{ backgroundImage: `url(${mediaDir('blogs/misc2.jpg')})` }}
                          />
                        </div>
                        <div className='blog__text'>
                          <span className='blog__tag'>Business</span>
                          <Link to='/'>
                            <h3 className='blog__title'>Apps Inspired by Uber: Android App Development Examples &amp; Tips</h3>
                          </Link>
                          <p className='blog__description'>Five apps inspired by Uber, plus several development tips.</p>
                          <Link to='/' className='blog__link--more'>
                            Learn more <Icon type='right' />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className='blog__item'>
                      <div className='blog__content'>
                        <div className='blog__media'>
                          <div
                            className='blog__media-inner'
                            style={{ backgroundImage: `url(${mediaDir('blogs/misc3.jpeg')})` }}
                          />
                        </div>
                        <div className='blog__text'>
                          <span className='blog__tag'>Business</span>
                          <Link to='/'>
                            <h3 className='blog__title'>Biggest Flops &amp; Disappointments in Enterprise Application Development</h3>
                          </Link>
                          <p className='blog__description'>Avoid the mistakes from our selection at all costs.</p>
                          <Link to='/' className='blog__link--more'>
                            Learn more <Icon type='right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default SectionFour