import React, { Component } from 'react'
import { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { mediaDir } from '../media_dirname'

class SectionTwo extends Component {
  render () {
    const responsive = {
      0: { items: 1 },
      400: { items: 2},
      767: { items: 3 },
      1024: { items: 5 }
    }

    return (
      <div className='home-page-wrapper contentx-wrapper'>
        <div className='home-page contentx'>
          <TweenOneGroup
            enter={{
              y: 30, opacity: 0,
              delay: 200, type: 'from',
            }}
            leave={{ y: 30, opacity: 0 }}
          >
            <AliceCarousel
              autoPlay
              autoPlayInterval={3000}
              buttonsDisabled
              responsive={responsive}
            >
              {
                Array(6).fill(1).map((item, i) => (
                  <div key={i.toString()} className='custom-carousel-item__wrapper'>
                    <img src={mediaDir(`stakeholders/logo${1+i}.png`)} />
                    <img src={mediaDir(`stakeholders/logo${12-i}.png`)} />
                  </div>
                ))
              }
            </AliceCarousel>
            <p style={{ marginTop: 20, textAlign: 'center', textUnderlinePosition: 'none' }}>
              <NavLink to='/' activeStyle={{ textDecoration: 'none' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#0A839F' }}>
                  TALK TO OUR TEAM <Icon type='right' style={{ fontSize: 10 }} />
                </span>
              </NavLink>
            </p>
          </TweenOneGroup>
        </div>
      </div>
    )
  }
}

export default SectionTwo
