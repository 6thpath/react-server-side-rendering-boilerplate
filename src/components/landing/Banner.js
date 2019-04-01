import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import { Button, Icon } from 'antd'

import 'rc-banner-anim/assets/index.css'

const { BgElement } = Element

class Banner extends Component {
  render() {
    const children = [
      {
        name: 'elem0',
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { src: '/media/slide1.jpg' },
        title: {
          className: 'pageBanner-title',
          children: 'ENTERPRISE SOFTWARE DEVELOPMENT',
        },
        content: {
          className: 'pageBanner-content',
          children: 'Leverage our eight-year expertise to create a solid software foundation for your business.',
        },
        button: { className: 'pageBanner-button', children: 'Read More' },
      },
      {
        name: 'elem1',
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { src: '/media/slide2.jpg' },
        title: {
          className: 'pageBanner-title',
          children: 'MOBILE APP DEVELOPMENT',
        },
        content: {
          className: 'pageBanner-content',
          children: 'We design and develop the android and iPhone application for your IoT product with rich feature UI that could empower enterprises with next generation technology by our iot mobile app development services.',
        },
        button: { className: 'pageBanner-button', children: 'Read More' },
      },
      {
        name: 'elem2',
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { src: '/media/slide3.jpg' },
        title: {
          className: 'pageBanner-title',
          children: 'BLOCKCHAIN TECHNOLOGIES',
        },
        content: {
          className: 'pageBanner-content',
          children: 'Introduce the highest level of security and automate your operations with our blockchain solutions.',
        },
        button: { className: 'pageBanner-button', children: 'Read More' },
      },
      {
        name: 'elem3',
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { src: '/media/slide4.jpg' },
        title: {
          className: 'pageBanner-title',
          children: 'CUSTOM IoT DEVELOPMENT SERVICES',
        },
        content: {
          className: 'pageBanner-content',
          children: 'Build secure enterprise Internet of Things (IoT) solutions that will help your business gather Big Data, optimise operations, and unlock a new level of efficiency.',
        },
        button: { className: 'pageBanner-button', children: 'Read More' },
      },
      {
        name: 'elem4',
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { src: '/media/slide5.jpg' },
        title: {
          className: 'pageBanner-title',
          children: 'CLOUD COMPUTING',
        },
        content: {
          className: 'pageBanner-content',
          children: 'Use cloud computing solutions to create a scalable, flexible, and connected enterprise environment.',
        },
        button: { className: 'pageBanner-button', children: 'Read More' },
      },
      {
        name: 'elem5',
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { src: '/media/slide6.jpg' },
        title: {
          className: 'pageBanner-title',
          children: 'ARTIFICIAL INTELLIGENCE',
        },
        content: {
          className: 'pageBanner-content',
          children: 'The central goal of AI is to provide a set of algorithms and techniques that can be used to solve problems that humans perform intuitively and near automatically, but are otherwise very challenging for computers. ',
        },
        button: { className: 'pageBanner-button', children: 'Read More' },
      },
    ]

    const childrenToRender = children.map((item, i) => {
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
            <BannerAnim key='BannerAnim' dragPlay={false} autoPlay={true}>
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
