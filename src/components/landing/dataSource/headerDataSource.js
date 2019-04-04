import { mediaDir } from '../../media_dirname'

const dataSource = [
  {
    title: 'SOLUTIONS',
    titleLink: '/',
    isCustomRender: false,
    customRender: null,
    popoverContent: {
      article : {
        first: {
          thumbnail: mediaDir('sliders/slide4.jpg'),
          title: 'AR Lab',
          desc: 'Our AR development unit helps construction companies go digital with the in-house technology and HoloLens.',
          link: '/'
        },
        second: {
          thumbnail: mediaDir('sliders/slide3.jpg'),
          title: 'Blockchain Lab',
          desc: 'Stand-alone, enterprise-grade blockchain consultancy and development unit.',
          link: '/'
        }
      },
      subMenu: [
        { link: '/', title: 'Internet of Things' },
        { link: '/', title: 'Blockchain Technologies' },
        { link: '/', title: 'Cloud Computing' },
        { link: '/', title: 'FinTech' },
        { link: '/', title: 'Artificial Intelligence' },
        { link: '/', title: 'Augmented Reality' }
      ]
    }
  },
  {
    title: 'SERVICES',
    titleLink: '/',
    isCustomRender: false,
    customRender: null,
    popoverContent: {
      article : {
        first: {
          thumbnail: mediaDir('sliders/slide4.jpg'),
          title: 'Product Engineering',
          desc: 'Enterprise software development with all-embracing 10-year expertise and the latest tech.',
          link: '/'
        },
        second: {
          thumbnail: mediaDir('sliders/slide3.jpg'),
          title: 'Mobile App Development',
          desc: 'Building solid apps faster by using a mobile platform and custom development at once.',
          link: '/'
        }
      },
      subMenu: [
        { link: '/', title: 'Mobile Applications Development' },
        { link: '/', title: 'Web Applications Development' },
        { link: '/', title: 'Product Engineering' },
        { link: '/', title: 'IT consulting' }
      ]
    }
  },
  {
    title: 'INDUSTRIES',
    titleLink: '/',
    isCustomRender: false,
    customRender: null,
    popoverContent: {
      article : {
        first: {
          thumbnail: mediaDir('sliders/slide4.jpg'),
          title: 'Construction',
          desc: 'Comprehensive digital transformation for the construction industry with AR, mobile, and scalable enterprise software.',
          link: '/'
        },
        second: {
          thumbnail: mediaDir('sliders/slide3.jpg'),
          title: 'Healthcare',
          desc: 'Practical cross-platform software that aids all the sides of the healthcare process.',
          link: '/'
        }
      },
      subMenu: [
        { link: '/', title: 'Construction' },
        { link: '/', title: 'Healthcare' },
        { link: '/', title: 'Logistics' },
        { link: '/', title: 'Retail & Ecommerce' }
      ]
    }
  },
  {
    title: 'RESOURCES',
    titleLink: '/',
    isCustomRender: false,
    customRender: null,
    popoverContent: {
      article : {
        first: {
          thumbnail: mediaDir('sliders/slide4.jpg'),
          title: 'Insights',
          desc: `We've provided tailored learning and development solutions that help businesses get the very best from their people at work.`,
          link: '/'
        },
        second: {
          thumbnail: mediaDir('sliders/slide3.jpg'),
          title: 'News',
          desc: 'The most important technology news, developments and trends with insightful analysis and commentary.',
          link: '/'
        }
      },
      subMenu: [
        { link: '/', title: 'Blogs' },
        { link: '/', title: 'News' },
        { link: '/', title: 'Insights' }
      ]
    }
  },
  {
    title: 'CLIENTS',
    titleLink: '/',
    isCustomRender: false,
    customRender: null,
    popoverContent: {
      article : {
        first: {
          thumbnail: mediaDir('sliders/slide4.jpg'),
          title: 'Clients',
          desc: `Innos a Vietnam-based smart home startup, envisioned an intelligent system...`,
          link: '/'
        },
        second: {
          thumbnail: mediaDir('sliders/slide3.jpg'),
          title: 'Case Studies',
          desc: 'A publishing platform helps establish a consistent brand voice online ...',
          link: '/'
        }
      },
      subMenu: [
        { link: '/', title: 'Clients' },
        { link: '/', title: 'Case Studies' }
      ]
    }
  },
  {
    title: 'COMPANY',
    titleLink: '/',
    isCustomRender: false,
    customRender: null,
    popoverContent: {
      article : {
        first: {
          thumbnail: mediaDir('sliders/slide4.jpg'),
          title: 'About Us',
          desc: `Learn more about intellectsoft in numbers, products, and awards.`,
          link: '/'
        },
        second: {
          thumbnail: mediaDir('sliders/slide3.jpg'),
          title: 'Careers',
          desc: 'See the latest available career opportunities in our offices around the world.',
          link: '/'
        }
      },
      subMenu: [
        { link: '/', title: 'About Us' },
        { link: '/', title: 'Partners' },
        { link: '/', title: 'Team' },
        { link: '/', title: 'Careers' },
        { link: '/', title: 'Contact' }
      ]
    }
  },
  {
    title: 'GET IN TOUCH',
    titleLink: '/',
    isCustomRender: true,
    customRender: null,
    popoverContent: null
  }
]




export default dataSource