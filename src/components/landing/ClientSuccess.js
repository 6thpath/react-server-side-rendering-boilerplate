import React, { Component, createElement } from 'react'
import TweenOne from 'rc-tween-one'
import { OverPack } from 'rc-scroll-anim'
import { Row, Col } from 'antd'

import AliceCarousel from 'react-alice-carousel'

import { clientSectionData } from './dataSource/index'

class ClientSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'meganet'
    }
  }

  componentDidMount () {
    this.setState({  })
  }

  render () {
    const { current } = this.state

    const title = [
      {
        name: 'title',
        children: 'Client Success',
        className: 'title-h1',
      }
    ]

    const responsive = {
      0: { items: 1 },
      400: { items: 2},
      767: { items: 3 },
      1024: { items: 6 }
    }

    return (
      <div className='container'>
        <div className='home-page-wrapper content1-wrapper' style={{ padding: 10, marginTop: 20 }}>
          {/* <div className='home-page content1' style={{ padding: 0, marginTop: 10 }}> */}
          <div key='title' className='title-wrapper'>
            {
              title.map((item, i) =>
                createElement(
                  item.name.indexOf('title') === 0 ? 'h1' : 'div',
                  { key: i.toString(), ...item },
                  typeof item.children === 'string' &&
                  item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/)
                    ? createElement('img', { src: item.children, alt: 'img' })
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
                  <Row style={{ margin: 20, minHeight: 510 }}>
                    <Col key='text' xs={24} md={10} style={{ padding: 20 }}>
                      <h2><b>{clientSectionData[current].title}</b></h2>
                      <p>{clientSectionData[current].desc}</p>
                    </Col>
                    <Col key='image' xs={24} md={14}>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        src={clientSectionData[current].img}
                        alt='img'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <AliceCarousel
                        infinite
                        buttonsDisabled
                        responsive={responsive}
                      >
                        {
                          Object.keys(clientSectionData).map((item, i) => (
                            <button
                              key={i.toString()}
                              onClick={() => { this.setState({ current: item+'' }) }}
                              style={{
                                border: '1px solid #eaeaea',
                                background: 'transparent',
                                padding: 2,
                                outline: 'none',
                                cursor: 'pointer',
                                margin: 1
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%' }}
                                src={clientSectionData[item].logo}
                                alt='logo'
                              />
                            </button>
                          ))
                        }
                      </AliceCarousel>
                    </Col>
                  </Row>
                </div>
              </TweenOne>
            </OverPack>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default ClientSuccess