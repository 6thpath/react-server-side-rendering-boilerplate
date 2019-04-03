import React, { Component, createRef } from 'react'
import TweenOne from 'rc-tween-one'
import { Menu, Row, Col, Button, Affix, Popover } from 'antd'
import { withRouter, NavLink } from 'react-router-dom'

const Item = Menu.Item

@withRouter
class TopNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
      isHovering: false
    }
    this.menu = createRef()
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? this.menu.current.dom.scrollHeight : 0
    })
  }

  onMenuHover = bool => {
    this.setState({ isHovering: bool })
  }

  onMenuTitleClick = path => {
    this.props.history.push(path)
  }

  render () {
    const {
      props: { isMobile },
      state: { menuHeight, phoneOpen, isHovering }
    } = this

    const SubMenuPopupStyle = {
      width: '100vw',
      height: 220,
      padding: '30px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const animationSettings = {
      type: 'from',
      ease: 'easeOutQuad'
    }

    const children = [
      {
        title: 'SOLUTIONS',
        to: '/',
        subMenu: true,
        customRender: (
          <div style={{ width: '100%', maxWidth: 1176 }}>
            <Row>
              <Col span={8}>
                <TweenOne animation={{ ...animationSettings, x: -30 }}>
                  <Row>
                    <Col span={12}>
                      <img className='pageHeader-item-img__custom' src='/media/slide4.jpg' alt='IoT'/>
                    </Col>
                    <Col span={12}>
                      <p>INTERNET OF THING</p>
                      <p>Innos team provides comprehensive IoT software development expertise to help you build a full-scale ecosystem around your Internet of Things solution.</p>
                      <p>READ MORE</p>
                    </Col>
                  </Row>
                </TweenOne>
              </Col>
              <Col span={8} />
              <Col span={8} />
            </Row>
          </div>
        )
      },
      {
        title: 'SERVICES',
        to: '/',
        customRender: (
          <>s</>
        )
      },
      {
        title: 'INDUSTRIES',
        to: '/',
        customRender: (
          <>s</>
        )
      },
      {
        title: 'RESOURCES',
        to: '/',
        customRender: (
          <>s</>
        )
      },
      {
        title: 'CLIENTS',
        to: '/',
        customRender: (
          <>s</>
        )
      },
      {
        title: 'COMPANY',
        to: '/',
        customRender: (
          <>s</>
        )
      },
      {
        title: 'GET IN TOUCH',
        to: '/',
        customRender: (
          <Button
            style={{
              background: '#0A839F',
              border: 'none',
              borderRadius: 0,
              color: '#fff'
            }}
          >
            GET IN TOUCH
          </Button>
        )
      }
    ]

    const navChildren = children.map((item, i) => (
      <Item
        key={i.toString()}
        // style={{ border: 'none' }}
        // onMouseEnter={() => { if(!isMobile) this.onMenuHover(true)}}
        // onMouseLeave={() => { if(!isMobile) this.onMenuHover(false)}}
        onTitleClick={() => this.onMenuTitleClick(item.to)}
      >
        <p>{item.customRender}</p>
      </Item>
    ))

    return (
      <Affix>
        <TweenOne
          component='header'
          animation={{ opacity: 0, type: 'from' }}
          className='pageHeader home-page-wrapper'
          style={{ background: isHovering ? '#fff' : 'transparent' }}
        >
          <div className={`home-page ${phoneOpen ? 'open' : ''}`}>
            <TweenOne
              animation={{ ...animationSettings, x: -30 }}
              className='pageHeader-logo'
            >
              <img
                width='100%'
                src={`/media/${isHovering ? 'colorfulLogo' : 'whiteLogo'}.png`}
                alt='img'
              />
            </TweenOne>
            {
              isMobile && (
                <div
                  className='pageHeader-mobile-menu'
                  onClick={this.phoneClick}
                >
                  <em />
                  <em />
                  <em />
                </div>
              )
            }
            <TweenOne
              className='pageHeader-menu'
              animation={{ ...animationSettings, x: 30 }}
              ref={this.menu}
              style={isMobile ? { height: menuHeight } : null}
            >
              <Menu
                mode={isMobile ? 'inline' : 'horizontal'}
                theme={isMobile ? 'dark' : 'default'}
              >
                {navChildren}
              </Menu>
            </TweenOne>
          </div>
        </TweenOne>
      </Affix>
    )
  }
}

export default TopNavigation
