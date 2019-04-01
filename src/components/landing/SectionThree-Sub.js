import React from 'react'

const solutions = [
  {
    customTabStyle: {},
    image: { imgSrc: '/media/offers/solutions/blockchain.svg', alt: 'blockchain' },
    title: 'Blockchain Technologies',
    description: 'Introduce the highest level of security and automate your operations with our blockchain solutions.'
  },
  {
    customTabStyle: { borderTopRightRadius:7 },
    image: { imgSrc: '/media/offers/solutions/cloud-computing.svg', alt: 'cloud-computing' },
    title: 'Cloud Computing',
    description: 'Use cloud computing solutions to create a scalable, flexible, and connected enterprise environment.'
  },
  {
    customTabStyle: { borderTopRightRadius: 0, borderBottomLeftRadius: 7 },
    image: { imgSrc: '/media/offers/solutions/artificial-intelligence.svg', alt: 'AI' },
    title: 'Artificial Intelligence',
    description: 'Custom AI-based solutions like machine and deep learning will help you automate any operation.'
  },
  {
    customTabStyle: { borderBottomLeftRadius: 0 },
    image: { imgSrc: '/media/offers/solutions/internet-of-things.svg', alt: 'IoT' },
    title: 'Internet of Things',
    description: 'Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.'
  }
]

const services = [
  {
    customTabStyle: {},
    image: { imgSrc: '/media/offers/services/web-application-development.svg', alt: 'WAD' },
    title: 'Web Applications Development',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.'
  },
  {
    customTabStyle: { borderTopRightRadius:7 },
    image: { imgSrc: '/media/offers/services/mobile-app-dev.svg', alt: 'mobile-app-dev' },
    title: 'Mobile App Development',
    description: 'Create an impactful mobile app that fits your brand and industry within a shorter time frame.'
  },
  {
    customTabStyle: { borderTopRightRadius: 0, borderBottomLeftRadius: 7 },
    image: { imgSrc: '/media/offers/services/it-consulting.svg', alt: 'IC' },
    title: 'IT Consulting',
    description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.'
  },
  {
    customTabStyle: { borderBottomLeftRadius: 0 },
    image: { imgSrc: '/media/offers/services/quality-assurance.svg', alt: 'QA' },
    title: 'Product Engineering',
    description: 'We transform your vision into victorious real world products by better communication, idea sharing.'
  }
]

const industries = [
  {
    customTabStyle: {},
    image: { imgSrc: '/media/offers/industries/construction.svg', alt: 'construction' },
    title: 'Construction',
    description: 'Advanced software solutions that take Construction into the Digital Era.'
  },
  {
    customTabStyle: { borderTopRightRadius:7 },
    image: { imgSrc: '/media/offers/industries/healthcare.svg', alt: 'healthcare' },
    title: 'Healthcare',
    description: 'Patient-friendly software that empowers healthcare industry workers.'
  },
  {
    customTabStyle: { borderTopRightRadius: 0, borderBottomLeftRadius: 7 },
    image: { imgSrc: '/media/offers/industries/retail-ecomerce.svg', alt: 'retail-ecomerce' },
    title: 'Retail & eCommerce',
    description: 'Engaging and exciting software solutions for modern retail.'
  },
  {
    customTabStyle: { borderBottomLeftRadius: 0 },
    image: { imgSrc: '/media/offers/industries/logistics.svg', alt: 'logistics' },
    title: 'Logistics',
    description: 'Use all the latest tech available to make your logistics run like clockwork.'
  }
]

const returnChildren = data => {
  return (
    <div className='container'>
      <div className='offers'>
        <div id='industries' className='offers-tabcontent'>
          {data.map((item, i) => (
            <div className='tabcontent-item' style={item.customTabStyle} key={i.toString()}>
              <img className='offer-image' src={item.image.imgSrc} alt={item.image.alt} />
              <div className='offer-content'>
                <h3 className='offer-content-title'>{item.title}</h3>
                <p className='offer-content-description'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { solutions, services, industries, returnChildren }