import React, { Component } from 'react'
import { enquireScreen } from 'enquire-js'

import './less/antMotionStyle.less'

import { Affix } from 'antd'

import TopNavigation from './TopNavigation'
import Banner from './Banner'

let isMobile
enquireScreen(b => {
  isMobile = b
})

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile
    }
  }

  // resize = () => {
  //   this.setState({isMobile: window.innerWidth <= 767})
  // }

  componentDidMount () {
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
    // window.addEventListener('resize', this.resize)
    // this.resize()
  }

  // componentWillUnmount () {
  //   window.removeEventListener('resize', this.resize)
  // }

  render () {
    const { isMobile } = this.state
    return (
      <div
        className='templates-wrapper'
        ref={d => { this.dom = d }}
      >
        {/* <Affix offsetTop={0}> */}
          <TopNavigation isMobile={isMobile} />
        {/* </Affix> */}
        <Banner />
      </div>
    )
  }
}

export default Landing
