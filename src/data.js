import { SECTION, MEDIA_TYPE } from './models/project.enum.js';

export const pagesData = [
  {
    id: -1,
    category: 'test',
    navTitle: 'Test',
    pathNav: '/projects/test',
    title: 'Test: The Test Project',
    details: {
      media: 'test-media',
      year: '2021',
    },
    featured: {
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
        type: 'image',
        src: 'https://picsum.photos/200/300',
        alt: 'Test image',
      },
    ],
  },
  {
    id: 0,
    category: 'sound-works',
    navTitle: 'Rumble_Chain',
    pathNav: '/projects/rumble-chain',
    title: 'ProjectA: The Project',
  },
  {
    id: 1,
    category: 'sound-works',
    navTitle: 'Kein_Spieler',
    pathNav: '/projects/kein-spieler',
    title: 'ProjectB: The project is back',
  },
  {
    id: 2,
    category: SECTION.SOUND_WORKS,
    navTitle: 'NISS',
    pathNav: '/projects/niss',
    title: 'NISS',
    details: {
      media: 'Sound Installation',
      year: '2018-19',
    },
    featured: {
      src: '/images/niss-01.jpg',
      alt: 'Test image',
    },
    description: [
      {
        language: 'en',
        value: 'NISS (Network Interaction Sound Sniffer) is a sound interface reactive to the exchange of data made through a wireless network, specifically a Wi-Fi point. It is in turn an algorithmic composition of a soundscape whose generation will be activated with the presence of the visitor, both in the physical (exhibition) and virtual (network) space. This device, presented as a sound installation, makes perceptible the dialogues between devices; it makes audible the processes and interactions between machines that escape our senses, even they occur continuously in our daily environments.',
      },
      {
        language: 'es',
        value: 'NISS (Network Interaction Sound Sniffer) es un interfaz sonoro reactivo al los intercambios de datos efectuados a través de una red inalámbrica, concretamente un punto de wifi. Es a su vez la composición algorítmica de un paisaje sonoro cuya generación se activará con la presencia del visitante, tanto en el espacio físico (expositivo) como en el virtual (red). Este dispositivo, presentado en formato de instalación sonora, hace perceptible los diálogos entre dispositivos; sonoriza los procesos e interacciones entre máquinas que, aún ocurriendo de forma continuada en nuestros entornos cotidianos, escapan a nuestros sentidos.',
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/niss01.jpg',
        alt: 'Mid shot of NISS installation', 
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/niss02.jpg',
        alt: 'Full-shot of NISS installation', 
      },
      {
        type: MEDIA_TYPE.SOUNDCLOUD,
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1420540456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
      },
    ],
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
 *  featured: {}, 
 *  description [], 
 *  media [] 
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

