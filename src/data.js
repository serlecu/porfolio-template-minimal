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
    category: SECTION.JORGE_WORKS, 
    navTitle: 'Exploracion entrelazada',
    pathNav: '/projects/exploracionEntrelazada',
    title: 'Exploracion entrelazada',
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

  {
    id: 4,
    category: SECTION.ROSER_WORKS,
    navTitle: 'Reactive Wave Cubes',
    pathNav: '/projects/reactive',
    title: 'Reactive Wave Cubes',
    details: {
      media: 'A/V instalation | 2 min loop',
      year: '2017',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/drive-01.jpg',
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
  {
    id: 3,
    category: SECTION.ROSER_WORKS,
    navTitle: 'Noves formes de fer musica',
    pathNav: '/projects/novesformes',
    title: 'Noves formes de fer musica',
    details: {
      media: 'Sound',
      year: '2017',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/portfolio_noves.jpg',
      alt: '',
    },
    description: [
      {
        language: 'en',
        value: '"New ways of making music" aims to bring the new compositional languages of contemporary music closer to young people. It is born from listening to acoustic territories, where they can explore the environment around them and discover new sounds, often classified as noise. The educational application of this proposal has been possible thanks to its selection in the "Artistic residences in educational centers" of the City Council of Valencia and the practical experimentation has been carried out with the students of 6th of Primary Education of the CEIP Benimàmet (Valencia, Spain)',

        },
      {
        language: 'es',
        value: '“Nuevas formas de hacer música” pretende aproximar los nuevos lenguajes compositivos de la música contemporánea a los más jóvenes. Nace a partir de la escucha de los territorios acústicos, donde pueden explorar el entorno que les rodea y descubrir nuevos sonidos, muchas veces catalogados como ruidos. La aplicación docente de dicha propuesta ha sido posible gracias a su selección en las "Residencias artísticas en centros educativos" del Ayuntamiento de València y se ha realizado la experimentación práctica con el alumnado de 6º de Educación Primaria del CEIP Benimàmet (València, España).',
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

