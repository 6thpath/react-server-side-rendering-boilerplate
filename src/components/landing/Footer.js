import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className="container" style={{ padding: 40 }}>
        <div className="footer__flexbox">
          <div className="footer__about">
            <div className="footer__address">
              <h3 className="footer__heading">Contact</h3>
              <div className="footer__office">
                <span className="footer__city">
                  <h3>Head Office</h3>
                </span>
                <span className="footer__phone">+84 28 3863 3636</span>
                <span className="footer__street">573/12 Su Van Hanh, Ward 13, District 10.<br /> Ho Chi Minh City, 740715.<br /> VIETNAM</span>
              </div>
					</div>
					<div className="footer__address">
						<div className="footer__office">
							<span className="footer__street"></span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__copyright" style={{ marginTop: 0 }}>
				<div className="footer__copy-container">
					<span className="footer__year">&copy; 2018 Innos Vietnam</span>
        </div>
			</div>
		</div>
    )
  }
}

export default Footer