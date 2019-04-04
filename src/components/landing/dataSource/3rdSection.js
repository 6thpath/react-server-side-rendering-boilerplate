import { mediaDir } from '../../media_dirname'

const dataSource = {
  solutions: {
    title: 'SOLUTIONS',
    content: [
      {
        customTabStyle: {},
        image: { imgSrc: mediaDir('offers/solutions/blockchain.svg'), alt: 'blockchain' },
        title: 'Blockchain Technologies',
        description: 'Introduce the highest level of security and automate your operations with our blockchain solutions.'
      },
      {
        customTabStyle: { borderTopRightRadius:7 },
        image: { imgSrc: mediaDir('offers/solutions/cloud-computing.svg'), alt: 'cloud-computing' },
        title: 'Cloud Computing',
        description: 'Use cloud computing solutions to create a scalable, flexible, and connected enterprise environment.'
      },
      {
        customTabStyle: { borderTopRightRadius: 0, borderBottomLeftRadius: 7 },
        image: { imgSrc: mediaDir('offers/solutions/artificial-intelligence.svg'), alt: 'AI' },
        title: 'Artificial Itelligence',
        description: 'Custom AI-based solutions like machine and deep learning will help you automate any operation.'
      },
      {
        customTabStyle: { borderBottomLeftRadius: 0 },
        image: { imgSrc: mediaDir('offers/solutions/internet-of-things.svg'), alt: 'IoT' },
        title: 'Internet of Things',
        description: 'Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.'
      }
    ]
  },
  services: {
    title: 'SERVICES',
    content: [
      {
        customTabStyle: {},
        image: { imgSrc: mediaDir('offers/services/web-application-development.svg'), alt: 'WAD' },
        title: 'Web Applications Development',
        description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.'
      },
      {
        customTabStyle: { borderTopRightRadius:7 },
        image: { imgSrc: mediaDir('offers/services/mobile-app-dev.svg'), alt: 'mobile-app-dev' },
        title: 'Mobile App Development',
        description: 'Create an impactful mobile app that fits your brand and industry within a shorter time frame.'
      },
      {
        customTabStyle: { borderTopRightRadius: 0, borderBottomLeftRadius: 7 },
        image: { imgSrc: mediaDir('offers/services/it-consulting.svg'), alt: 'IC' },
        title: 'IT Consulting',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.'
      },
      {
        customTabStyle: { borderBottomLeftRadius: 0 },
        image: { imgSrc: mediaDir('offers/services/quality-assurance.svg'), alt: 'QA' },
        title: 'Product Engineering',
        description: 'We transform your vision into victorious real world products by better communication, idea sharing.'
      }
    ]
  },
  industries: {
    title: 'INDUSTRIES',
    content: [
      {
        customTabStyle: {},
        image: { imgSrc: mediaDir('offers/industries/construction.svg'), alt: 'construction' },
        title: 'Construction',
        description: 'Advanced software solutions that take Construction into the Digital Era.'
      },
      {
        customTabStyle: { borderTopRightRadius:7 },
        image: { imgSrc: mediaDir('offers/industries/healthcare.svg'), alt: 'healthcare' },
        title: 'Healthcare',
        description: 'Patient-friendly software that empowers healthcare industry workers.'
      },
      {
        customTabStyle: { borderTopRightRadius: 0, borderBottomLeftRadius: 7 },
        image: { imgSrc: mediaDir('offers/industries/retail-ecomerce.svg'), alt: 'retail-ecomerce' },
        title: 'Retail & eCommerce',
        description: 'Engaging and exciting software solutions for modern retail.'
      },
      {
        customTabStyle: { borderBottomLeftRadius: 0 },
        image: { imgSrc: mediaDir('offers/industries/logistics.svg'), alt: 'logistics' },
        title: 'Logistics',
        description: 'Use all the latest tech available to make your logistics run like clockwork.'
      }
    ]
  }
}

export default dataSource
