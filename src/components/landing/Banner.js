import React, { PureComponent } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { Button, Icon } from 'antd'

class Banner extends PureComponent {
  render () {
    return (
      <div className='pageBanner'>
        <QueueAnim
          key='QueueAnim'
          type={['bottom', 'top']}
          delay={200}
          className='pageBanner-text-wrapper'
        >
          {/* <div key='title' className='pageBanner-title'>
            {typeof dataSource.title.children === 'string' &&
            dataSource.title.children.match(
              /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
            ) ? (
              <img src={dataSource.title.children} width="100%" alt="img" />
            ) : (
              dataSource.title.children
            )}
          </div> */}
          <div key='content' className='pageBanner-content'>
            Content
          </div>
          <Button ghost key='button' className='pageBanner-button'>
            More
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className='pageBanner-icon'
          key='icon'
        >
          <Icon type='down' />
        </TweenOne>
      </div>
    )
  }
}

export default Banner
