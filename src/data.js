import { SECTION, MEDIA_TYPE } from './models/project.enum.js';

export const pagesData = [
  { // 0
    id: 0,
    category: SECTION.TEST,
    navTitle: 'Test',
    pathNav: '/projects/test',
    title: 'Test: The Test Project',
    details: {
      media: 'test-media',
      year: '0000',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: 'https://picsum.photos/200/300',
      alt: 'Test image',
    },
    description: [
      {
        text: 'Test description',
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: 'https://picsum.photos/200/300',
        alt: 'Test image',
      },
    ],
  },
  { // 1
    id: 1,
    category: SECTION.IMAGE_WORKS, 
    navTitle: 'exploracionEntrelazada',
    pathNav: '/projects/exploracionEntrelazada',
    title: 'Exploracion Entrelazada',
    details: {
      media: 'Installation',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/portfolio_etopia.jpg',
      alt: ''
    },
    description: [
      {
        language: 'en',
        value: "",
      },
      {
        language: 'es',
        value: "",
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/portfolio_etopia.jpg',
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60229_084113.jpg',
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60318_155308.jpg',
        alt: ''
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60404_202637.jpg',
        alt: 'Square photo close that you can only see the texture of a material as an abstract image.'
      },
    ],
  },

  { // 4
    id: 4,
    category: SECTION.SOUND_WORKS,
    navTitle: 'Drive',
    pathNav: '/projects/drive',
    title: 'Drive',
    details: {
      media: 'A/V instalation | 2 min loop',
      year: '2017',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: 'https://sergiolecuona.es/images/drive-01.jpg',
      alt: 'Dark vídeo projected on a glass panel and reflected on the wall',
    },
    description: [
      {
        language: 'en',
        value: "Suddenly you are no longer there. You are in an uncertain space, you don't know where. Everything seems the same but ambiguous. Each moment you're getting more an more lost. Everything's in continuous movement. You can try to find a detail or let you drive. You can look to nothing to see everything. You can...",
      },
      {
        language: 'es',
        value: "De repente ya no estás en ese lugar. Estás en un espacio incierto, no sabes dónde. Todo parece igual pero ambiguo. Cada vez más y más perdido. Todo en movimiento continuo. Puedes intentar buscar el detalle o puedes dejarte llevar. Puedes no mirar a nada para verlo todo. Puedes...",
      },
    ],
    media: [],
  },



]

export default pagesData;

/**
 * PAGE_DATA
 * { 
 *  id: int, 
 *  category: SECTION, 
 *  navTitle: string, 
 *  pathNav: string, 
 *  title: string, 
 *  details: string, 
 *  featured: { MEDIA_TYPE }, 
 *  description [ { language: string, value: string } ], 
 *  media [ MEDIA_TYPE ] 
 * }
 */

/**
 * MEDIA_TYPE.IMAGE
 * { type: MEDIA_TYPE, src: string, alt: string }
 */

/**
 * MEDIA_TYPE.SOUNDCLOUD
 * { type: MEDIA_TYPE, url: string }
 */

