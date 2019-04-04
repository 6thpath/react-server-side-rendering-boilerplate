import React, { Component } from 'react'

import './less/antMotionStyle.less'

import TopNavigation from './TopNavigation'
import Banner from './Banner'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import ClientSuccess from './ClientSuccess'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import Footer from './Footer'


class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.resize, false)
    this.resize()
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize, false)
  }

  resize = () => {
    this.setState({ isMobile: window.innerWidth <= 767});
  }

  render () {
    const { isMobile } = this.state
    return (
      <div
        className='templates-wrapper'
        ref={d => { this.dom = d }}
      >
        <TopNavigation isMobile={isMobile} />
        <Banner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <ClientSuccess />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    )
  }
}

export default Landing
