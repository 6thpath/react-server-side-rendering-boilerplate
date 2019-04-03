import React, { Component, createElement } from 'react'
import TweenOne from 'rc-tween-one'
// import { Row, Col } from 'antd'

class ClientSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  render () {
    const animationSettings = {
      type: 'from',
      ease: 'easeOutQuad'
    }

    const title = [
      {
        name: 'title',
        children: 'CLIENT SUCCESS',
        className: 'title-h1',
      }
    ]

    return (
      <div className='container'>
        <div className='home-page-wrapper content1-wrapper' style={{ padding: 0 }}>
          <div className='home-page content1' style={{ padding: 0, marginTop: 10 }}>
            <TweenOne animation={{ ...animationSettings, x: -50 }}>
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
            </TweenOne>
          </div>

        </div>
      </div>
    )
  }
}

export default ClientSuccess