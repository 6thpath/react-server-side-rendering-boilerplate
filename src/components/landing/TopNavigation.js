import React, { Component, createRef } from 'react'
import TweenOne from 'rc-tween-one'
import { Menu, Button, Affix, Popover, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom'

import { headerData } from './dataSource/index'
import { mediaDir } from '../media_dirname';

const Item = Menu.Item

@withRouter
class TopNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
      isHovering: false,
      scrollPosition: 0
    }
    this.menu = createRef()
  }

  detectScreenScroll = position => {
    if (!this.props.isMobile && position > 100) {
      this.setState({ isHovering: true })
    } else {
      this.setState({ isHovering: false })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', e => {
			const scrollPosition = window.scrollY
      this.detectScreenScroll(scrollPosition)
		}, false)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.detectScreenScroll, false)
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

  returnPopoverContent = ({ article: { first, second }, subMenu }) => (
    <div style={{ width: '100vw', padding: '30px 0' }}>
      <div className='sub-menu-container'>
        <div className='article-container'>
          <div className='article__item-wrapper' style={{ display: 'inline-block' }}>
            <div className='article__item'>
              <div className='article__content'>
                <div className='article__media'>
                  <div className='article__media-inner' style={{ backgroundImage: `url(${first.thumbnail})` }} />
                </div>
                <div className='article__text'>
                  <h3 className='article__title'>{first.title} </h3>
                  <p className='article__description'>{first.desc}</p>
                  <Link to={first.link} className='article__link--more'>
                    Read more <Icon type='right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='article__item-wrapper' style={{ display: 'inline-block' }}>
            <div className='article__item'>
              <div className='article__content'>
                <div className='article__media'>
                  <div className='article__media-inner' style={{ backgroundImage: `url(${second.thumbnail})` }} />
                </div>
                <div className='article__text'>
                  <h3 className='article__title'>{second.title}</h3>
                  <p className='article__description'>{second.desc}</p>
                  <Link to={second.link} className='article__link--more'>
                    Read more <Icon type='right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sub-menu-list-container'>
          <ul className='sub-menu'>
            {
              subMenu.map((item, i) => (
                <li key={i.toString()} className='menu-item'>
                  <Link to={item.link}>{item.title} <Icon type='right' /></Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )

  render () {
    const {
      props: { isMobile },
      state: { menuHeight, phoneOpen, isHovering },
      returnPopoverContent
    } = this

    const animationSettings = {
      delay: 300,
      type: 'from',
      ease: 'easeOutQuad'
    }

    const navChildren = headerData.map((item, i) => {
      const popoverContent = !item.isCustomRender && returnPopoverContent(item.popoverContent)
      return item.isCustomRender
      ? (
        <Item key={i.toString()} style={{ border: 'none', padding: '0 5px' }}>
          <Button
            style={{
              background: '#0A839F',
              border: 'none',
              borderRadius: 0,
              color: '#fff'
            }}
            onClick={() => this.onMenuTitleClick(item.to)}
          >
            {item.title}
          </Button>
        </Item>
      )
      : (
        <Item
          key={i.toString()}
          onMouseEnter={() => {if(!isMobile) this.onMenuHover(true)}}
          onMouseLeave={
            () => {
              const scrollPosition = window.scrollY
              if(!isMobile && scrollPosition < 100) this.onMenuHover(false)
            }
          }
        >
          {
            !isMobile
            ? (
              <Popover
              content={popoverContent}
              title={null}
              arrowPointAtCenter={false}
              placement='bottom'
            >
              <Button
                style={{
                  border: 'none',
                  padding: 2,
                  background: 'transparent',
                  fontSize: 12,
                  padding: '0 5px',
                  color: isHovering ? '#000' : '#fff',
                  fontWeight: 700
                }}
                onClick={() => this.onMenuTitleClick(item.to)}
              >
                {item.title}
              </Button>
            </Popover>
            )
            : (
              <Button
                style={{
                  border: 'none',
                  padding: 2,
                  background: 'transparent',
                  fontSize: 12,
                  padding: '0 5px',
                  color: isHovering ? '#000' : '#fff',
                  fontWeight: 700
                }}
                onClick={() => this.onMenuTitleClick(item.to)}
              >
                {item.title}
              </Button>
            )
          }
        </Item>
      )
    })

    return (
      <Affix style={{ height: 0 }}>
        <TweenOne
          // component='header'
          // animation={{ opacity: 0, type: 'from' }}
          className='pageHeader home-page-wrapper'
          style={{ background: isMobile ? 'rgba(0,0,0,.7)' : isHovering ? '#fff' : 'transparent' }}
        >
          <div className={`home-page ${phoneOpen ? 'open' : ''}`}>
            <TweenOne
              animation={{ ...animationSettings, x: -50 }}
              className='pageHeader-logo'
            >
              <img
                width='100%'
                src={mediaDir(`${isHovering || isMobile ? 'colorfulLogo' : 'whiteLogo'}.png`)}
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
              animation={{ ...animationSettings, x: 50 }}
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
