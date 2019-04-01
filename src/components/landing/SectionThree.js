import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

import { solutions, services, industries, returnChildren } from './SectionThree-Sub'

class SectionThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1
    }
  }

  onChange = key => {
    this.setState({ current: key })
  }

  render() {
    const children = [
      {
        text: 'SOLUTIONS',
        content: solutions
      },
      {
        text: 'SERVICES',
        content: services
      },
      {
        text: 'INDUSTRIES',
        content: industries
      }
    ]

    const tabsChildren = children.map((item, i) => {
      const { text, content } = item
      return (
        <TabPane
          key={i + 1}
          tab={
            <div className='content3-tag'>
              <div className='content3-tag-name'>{text}</div>
            </div>
          }
          className='block'
        >
          <TweenOne.TweenOneGroup
            enter={{
              y: 30,
              delay: 300,
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad',
            }}
            leave={null}
            component=''
          >
          asd
            {returnChildren(content)}
          </TweenOne.TweenOneGroup>
        </TabPane>
      )
    })

    return (
      <div className='home-page-wrapper content3-wrapper'>
        <div className='home-page content3' style={{ padding: 20 }}>
          <div className='title-wrapper'>
            <h1 className='title-h1'>WHAT WE OFFER</h1>
          </div>
          <OverPack>
            <TweenOne.TweenOneGroup
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
            </TweenOne.TweenOneGroup>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default SectionThree
