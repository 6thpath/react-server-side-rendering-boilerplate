import React, { Component } from 'react'
import { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

import { mediaDir } from '../media_dirname'
import { section3Data } from './dataSource/index'

class SectionThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1
    }
  }

  onChange = key => {
    this.setState({ current: parseFloat(key) })
  }

  render() {

    const tabsChildren = Object.keys(section3Data).map((item, i) => {
      const { title, content } = section3Data[item]
      return (
        <TabPane
          key={i + 1}
          tab={
            <div className='content3-tag'>
              <div className='content3-tag-name'>{title}</div>
            </div>
          }
        >
          <TweenOneGroup
            enter={{
              y: 30,
              delay: 300,
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad'
            }}
            leave={{ y: 30, opacity: 0 }}
            component=''
          >
            <div className='container'>
              <div className='offers'>
                <div className='offers-tabcontent'>
                  {
                    content.map((tabContent, i) => (
                      <div className='tabcontent-item' style={tabContent.customTabStyle} key={i.toString()}>
                        <img className='offer-image' src={tabContent.image.imgSrc} alt={tabContent.image.alt} />
                        <div className='offer-content'>
                          <h3 className='offer-content-title'>{tabContent.title}</h3>
                          <p className='offer-content-description'>{tabContent.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </TweenOneGroup>
        </TabPane>
      )
    })

    return (
      <div
        className='home-page-wrapper content3-wrapper'
        style={{
          width: '100%',
          position: 'relative',
          borderColor: '#666',
          backgroundImage: `url(${mediaDir('bg-offers.jpg')})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <div className='home-page content3' style={{ padding: 20 }}>
          <div className='title-wrapper'>
            <h1 className='title-h1'>What We Offer</h1>
          </div>
          <OverPack>
            <TweenOneGroup
              key='tabs'
              enter={{
                y: 30, opacity: 0,
                delay: 200, type: 'from',
              }}
              leave={{ y: 30, opacity: 0 }}
              className='content3-tabs-wrapper'
            >
              <Tabs
                key='tabs'
                onChange={this.onChange}
                activeKey={`${this.state.current}`}
              >
                {tabsChildren}
              </Tabs>
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default SectionThree
