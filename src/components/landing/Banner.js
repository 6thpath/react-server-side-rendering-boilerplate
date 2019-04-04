import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import { Button, Icon } from 'antd'
import 'rc-banner-anim/assets/index.css'

import { bannerData } from './dataSource/index'

const { BgElement } = Element

class Banner extends Component {
  render() {
    const childrenToRender = bannerData.map((item, i) => {
      const { bg, textWrapper, title, content, button } = item
      return (
        <Element key={i.toString()} className='banner-user-elem' prefixCls='banner-user-elem'>
          <BgElement
            key='bg'
            style={{
              background: `url(${bg.src}) center`,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              backgroundSize: 'cover'
            }}
          />
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key='text'
            {...textWrapper}
          >
            <div key='logo' {...title}>
              {typeof title.children === 'string' &&
              title.children.match(
                /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
              ) ? (
                <img src={title.children} width='100%' alt='img' />
              ) : (
                title.children
              )}
            </div>
            <div key='content' {...content}>
              {content.children}
            </div>
            <Button ghost key='button' {...button}>
              {button.children}
            </Button>
          </QueueAnim>
        </Element>
      )
    })

    return (
      <div className='pageBanner'>
        <TweenOneGroup
          key='bannerGroup'
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=''
        >
          <div className='pageBanner-wrapper' key='wrapper'>
            <BannerAnim
              key='BannerAnim'
              dragPlay={false}
              autoPlay={true}
              autoPlaySpeed={7000}
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className='pageBanner-icon'
          style={{ bottom: 40 }}
          key='icon'
        >
          <Icon type='down' />
        </TweenOne>
      </div>
    );
  }
}

export default Banner
