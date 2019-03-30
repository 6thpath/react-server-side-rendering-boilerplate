import React, { Component, createRef } from 'react'
import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const Item = Menu.Item

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0
    }
    this.menu = createRef()
  }

  // componentDidMount () {
  //   this.menuDom = findDOMNode(this.menu)
  // }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? this.menu.current.dom.scrollHeight : 0
    })
  }

  render() {
    const {
      props: { isMobile },
      state: { menuHeight, phoneOpen}
    } = this

    const children = [
      { text: 'SOLUTIONS', to: '/' },
      { text: 'SERVICES', to: '/' },
      { text: 'INDUSTRIES', to: '/' },
      { text: 'RESOURCES', to: '/' },
      { text: 'CLIENTS', to: '/' },
      { text: 'COMPANY', to: '/' },
      { text: 'GET IN TOUCH', to: '/' },
    ]

    const navChildren = children.map((item, i) => (
      <Item key={i.toString()}>
        <NavLink to={item.to}>
          <span style={{ fontSize: '0.5rem' }}>{item.text}</span>
        </NavLink>
      </Item>
    ))

    return (
      <TweenOne
        component='header'
        animation={{ opacity: 0, type: 'from' }}
        className='pageHeader home-page-wrapper'
      >
        <div className={`home-page ${phoneOpen ? 'open' : ''}`}>
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            className='pageHeader-logo'
          >
            <img width='100%' src='/media/whiteLogo.png' alt='img' />
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
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={this.menu}
            style={isMobile ? { height: menuHeight } : null}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['0']}
              theme={isMobile ? 'dark' : 'default'}
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    )
  }
}

export default TopNavigation
