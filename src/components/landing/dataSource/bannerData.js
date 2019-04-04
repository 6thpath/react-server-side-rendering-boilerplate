import { mediaDir } from '../../media_dirname'

const dataSource = [
  {
    name: 'elem0',
    textWrapper: { className: 'pageBanner-text-wrapper' },
    bg: { src: mediaDir('sliders/slide1.jpg') },
    title: {
      className: 'pageBanner-title',
      children: 'ENTERPRISE SOFTWARE DEVELOPMENT',
    },
    content: {
      className: 'pageBanner-content',
      children: 'Leverage our eight-year expertise to create a solid software foundation for your business.',
    },
    button: { className: 'pageBanner-button', children: 'Read More' },
  },
  {
    name: 'elem1',
    textWrapper: { className: 'pageBanner-text-wrapper' },
    bg: { src: mediaDir('sliders/slide2.jpg') },
    title: {
      className: 'pageBanner-title',
      children: 'MOBILE APP DEVELOPMENT',
    },
    content: {
      className: 'pageBanner-content',
      children: 'We design and develop the android and iPhone application for your IoT product with rich feature UI that could empower enterprises with next generation technology by our iot mobile app development services.',
    },
    button: { className: 'pageBanner-button', children: 'Read More' },
  },
  {
    name: 'elem2',
    textWrapper: { className: 'pageBanner-text-wrapper' },
    bg: { src: mediaDir('sliders/slide3.jpg') },
    title: {
      className: 'pageBanner-title',
      children: 'BLOCKCHAIN TECHNOLOGIES',
    },
    content: {
      className: 'pageBanner-content',
      children: 'Introduce the highest level of security and automate your operations with our blockchain solutions.',
    },
    button: { className: 'pageBanner-button', children: 'Read More' },
  },
  {
    name: 'elem3',
    textWrapper: { className: 'pageBanner-text-wrapper' },
    bg: { src: mediaDir('sliders/slide4.jpg') },
    title: {
      className: 'pageBanner-title',
      children: 'CUSTOM IoT DEVELOPMENT SERVICES',
    },
    content: {
      className: 'pageBanner-content',
      children: 'Build secure enterprise Internet of Things (IoT) solutions that will help your business gather Big Data, optimise operations, and unlock a new level of efficiency.',
    },
    button: { className: 'pageBanner-button', children: 'Read More' },
  },
  {
    name: 'elem4',
    textWrapper: { className: 'pageBanner-text-wrapper' },
    bg: { src: mediaDir('sliders/slide5.jpg') },
    title: {
      className: 'pageBanner-title',
      children: 'CLOUD COMPUTING',
    },
    content: {
      className: 'pageBanner-content',
      children: 'Use cloud computing solutions to create a scalable, flexible, and connected enterprise environment.',
    },
    button: { className: 'pageBanner-button', children: 'Read More' },
  },
  {
    name: 'elem5',
    textWrapper: { className: 'pageBanner-text-wrapper' },
    bg: { src: mediaDir('sliders/slide6.jpg') },
    title: {
      className: 'pageBanner-title',
      children: 'ARTIFICIAL INTELLIGENCE',
    },
    content: {
      className: 'pageBanner-content',
      children: 'The central goal of AI is to provide a set of algorithms and techniques that can be used to solve problems that humans perform intuitively and near automatically, but are otherwise very challenging for computers. ',
    },
    button: { className: 'pageBanner-button', children: 'Read More' },
  },
]

export default dataSource