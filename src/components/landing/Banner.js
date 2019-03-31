import React, { PureComponent } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import { Button, Icon } from 'antd'

import 'rc-banner-anim/assets/index.css'

const { BgElement } = Element

class Banner extends PureComponent {
  render() {
    const children = [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'pageBanner-title',
          children: 'ENTERPRISE SOFTWARE DEVELOPMENT',
        },
        content: {
          className: 'pageBanner-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'pageBanner-button', children: 'Learn More' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'pageBanner-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'pageBanner-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'pageBanner-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'pageBanner-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'pageBanner-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'pageBanner-button', children: 'Learn More' },
      },
      {
        name: 'elem~jtvfa4qpnyu',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'pageBanner-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'pageBanner-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'pageBanner-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'pageBanner-button', children: 'Learn More' },
      },
    ]

    const childrenToRender = children.map((item, i) => {
      const elem = item.BannerElement
      const elemClassName = elem.className
      delete elem.className
      const { bg, textWrapper, title, content, button } = item
      return (
        <Element key={i.toString()} {...elem} prefixCls={elemClassName}>
          <BgElement key='bg' {...bg} />
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
                <img src={title.children} width="100%" alt="img" />
              ) : (
                title.children
              )}
            </div>
            <div key='content' {...content}>
              {content.children}
            </div>
            <Button ghost key="button" {...button}>
              {button.children}
            </Button>
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div className='pageBanner'>
        <TweenOneGroup
          key='bannerGroup'
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=''
        >
          <div className='pageBanner-wrapper' key='wrapper'>
            <BannerAnim key='BannerAnim'>
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
