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
    navTitle: 'Too_Closer',
    pathNav: '/projects/too-closer',
    title: 'Too Closer',
    details: {
      media: '',
      year: '',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/too-closer-60314_075446.jpg',
      alt: 'Square image of something blue. So close that you can only see the texture of the material as an abstract image.'
    },
    description: [
      {
        language: 'en',
        value: "This images are about decoupling. The lost of identity by the detail. the connotations of the original object disappear and the abstract surface remains, the objective essence. Moreover, it's a big reiteration: the daily daily-made. From the models to the device, everything is mundane, and the finish is subordinated to the concept.",
      },
      {
        language: 'es',
        value: "Esta serie fotográfica abierta trata sobre la desvinculación. La pérdida de la identidad a través del detalle. Las connotaciones del objeto desaparecen y queda la superficie abstracta, la esencia objetiva. Por otra parte, es una gran reiteración: lo cotidiano de forma cotidiana. Todo en este trabajo es mundano. Desde los referentes, objetos del día a día (normalmente desechos), hasta los medios empleados, fácilmente accesibles para cualquier persona y de uso diario. Los acabados técnicos se ven supeditados al concepto.",
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60225_090804.jpg',
        alt: 'Square photo close that you can only see the texture of a material as an abstract image.'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60229_084113.jpg',
        alt: 'Square photo close that you can only see the texture of a material as an abstract image.'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60318_155308.jpg',
        alt: 'Square photo close that you can only see the texture of a material as an abstract image.'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/too-closer-60404_202637.jpg',
        alt: 'Square photo close that you can only see the texture of a material as an abstract image.'
      },
    ],
  },
  { // 2
    id: 2,
    category: SECTION.IMAGE_WORKS,
    navTitle: 'Night_City',
    pathNav: '/projects/night-city',
    title: 'Night City',
    details: {
      media: 'Video Installation',
      year: '2016',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/night-city-02.jpg',
      alt: "Still of the feed of a surveilance camera at night. The image is distorted by the camera's lens. The camera points to an empty avenue crossing."
    },
    description: [
      {
        language: 'en',
        value: "What's going on in Night City? [ ] Is there anybody peeping? [ ] Is there anything to see? [ ] In Night City the only borders are the blindspots of the camera.",
      },
      {
        language: 'es',
        value: "¿Qué está ocurrinedo en night city? [ ] ¿Alguien mirando? [ ] ¿Algo que ver? [ ] En Night City la única frontera es el punto ciego de la cámara.",
      },
    ],
    media: [],
  },
  { // 3
    id: 3,
    category: SECTION.HIDDEN, // IMAGE_WORKS,
    navTitle: 'A-Bomb',
    pathNav: '/projects/a-bomb',
    title: 'A-Bomb',
    details: {
      media: 'Mono-channel Film.',
      year: '2018',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/a-bomb-01.jpg',
      alt: 'Still of A-Bomb film. Three squares showing a detonation in the dessert from different perspectives',
    },
    description: [
      {
        language: 'en',
        value: "I stumbled upon the video 'A-Bomb Blast Effects', a brief mute military report of 1952 about a test for an atomic bomb detonation. I was surprised by the quality of realization that includes detail and panoramic subjective shots and camera movements that are really rare to the documentary style of the time. On the other hand, the image of the big atomic mushroom fascinated me because of its beauty in contrast to its terrible symbolism.",
      },
      {
        language: 'es',
        value: "Encontré el vídeo 'A-Bomb Blast Effects', un breve reportaje militar de 1952 sobre un test de detonación de una bomba atómica. Me sorprendió la calidad de realización que incluye planos detallados y panorámicos de perspectiva subjetiva y movimientos de cámara que son realmente raros para el estilo documental de la época. Por otro lado, la imagen de la gran seta atómica me fascinó por su belleza en contraste con su terrible simbolismo.",
      },
      {
        language: 'en',
        value: "I decided to use only this footage as material to work with. my intervention would consist of modify the given narrative and rebuild it chronologically. In this way, I bring simultaneous points of view and a new character to the material through a triple screen that elevates the central image.",
      },
      {
        language: 'es',
        value: "Decidí utilizar solo este material para trabajar. mi intervención consistiría en modificar la narrativa dada y reconstruirla cronológicamente. De esta manera, traigo puntos de vista simultáneos y un nuevo personaje al material a través de una pantalla triple que eleva la imagen central.",
      }
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/a-bomb-02.jpg',
        alt: 'Still of A-Bomb film. Three squares showing a detonation in the dessert from different perspectives',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/a-bomb-03.jpg',
        alt: 'Still of A-Bomb film. Three squares showing a detonation in the dessert from different perspectives',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/a-bomb-04.jpg',
        alt: 'Still of A-Bomb film. Three squares showing a detonation in the dessert from different perspectives',
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
  { // 5
    id: 5,
    category: SECTION.SOUND_WORKS,
    navTitle: 'This_Place',
    pathNav: '/projects/this-place',
    title: 'ESTE LUGAR: AQUÍ, AHORA Y ECOS DEL PASADO (THIS PLACE)',
    details: {
      media: 'Sound performance',
      year: '2016',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/this-place-01.jpg',
      alt: "Full shot of This Place performance",
    },
    description: [
      {
        language: 'en',
        value: "I thought this performance as an acoustic photo of a place that mutates with the past of time until completely modify the soundscape. The system forces the soundscape's natural process of change by extracting the 'natural' sonic material in place and returning it re-arranged. It's an open project in the sense of an experimental sound research that sets the identity of a space as starting point.",
      },
      {
        language: 'es',
        value: 'Este proyecto se concibe como una fotografía sonora de un lugar que se transforma con el paso del tiempo hasta modificar completamente el paisaje sonoro. El sistema fuerza el proceso natural de cambio del paisaje sonoro extrayendo el material sonoro "natural" del lugar y devolviéndolo reorganizado. Se trata de un proyecto abierto en el sentido de una investigación sonora experimental que establece la identidad de un espacio como punto de partida.',
      },
    ],
    media: [],
  },
  { // 6
    id: 6,
    category: SECTION.SOUND_WORKS,
    navTitle: 'Soundscapes_of_Clay',
    pathNav: '/projects/spundscapes-of-clay',
    title: 'Soundscapes of Clay',
    details: {
      media: 'Sound Installation',
      year: '2017',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/sdsc-cly-01.jpg',
      alt: 'Full shot of Soundscapes of Clay installation',
    },
    description: [
      {
        language: 'en',
        value: 'This installation works with the feedback process between the objects on a place and the soundscape that surrounds them. An unbreakable link is presented; everything in a space generates and modifies its soundscape, becomes an interference generator. The objects interact with ther soundscape and/or, in someway, process it as physical filters',
      },
      {
        language: 'es',
        value: 'Esta instalación sonora se basa en el proceso de retroalimentación entre los objetos de un lugar y el paisaje sonoro que los envuelve e integra. Se establece una conexión inquebrantable; cualquier cosa en un lugar genera y modifica el paisaje sonoro, es objeto de interferencia. Estos interactúan con é y/o, en cierto modo, lo procesan como filtros físicos de sonido.',
      }
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sdsc-cly-02.jpg',
        alt: 'Close-up of the center of the installation: dome-shaped white clay object with a DIY microphon pointing inside.',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sdsc-cly-03.jpg',
        alt: 'Medium shot of the installation from hive view',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sdsc-cly-04.jpg',
        alt: 'Medium shot of the installation',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sdsc-cly-05.jpg',
        alt: 'Full-shot of the installation',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sdsc-cly-06.jpg',
        alt: 'Detail of the installation: dome-shaped white clay objects.',
      },
    ],
  },
  { // 7
    id: 7,
    category: SECTION.SOUND_WORKS,
    navTitle: 'NISS',
    pathNav: '/projects/niss',
    title: 'NISS',
    details: {
      media: 'Sound Installation',
      year: '2018-19',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/niss-01.jpg',
      alt: 'Mid shot of NISS installation',
    },
    description: [
      {
        language: 'en',
        value: 'NISS (Network Interaction Sound Sniffer) is a sound interface reactive to the exchange of data made through a wireless network, specifically a Wi-Fi point. It is in turn an algorithmic composition of a soundscape whose generation will be activated with the presence of the visitor, both in the physical (exhibition) and virtual (network) space. This device, presented as a sound installation, makes perceptible the dialogues between devices; it makes audible the processes and interactions between machines that escape our senses, even they occur continuously in our daily environments.',
      },
      {
        language: 'en',
        value: 'NISS (Network Interaction Sound Sniffer) is a sound installation that explores the relationship between the human body and the sound environment. It is a composition of a soundscape that is generated by the movement of the visitor, both in the physical (exhibition) and virtual (network) space. This device, presented as a sound installation, makes perceptible the dialogues between devices; it makes audible the processes and interactions between machines that escape our senses, even they occur continuously in our daily environments.',
      },
      {
        language: 'es',
        value: 'NISS (Network Interaction Sound Sniffer) es un interfaz sonoro reactivo al los intercambios de datos efectuados a través de una red inalámbrica, concretamente un punto de wifi. Es a su vez la composición algorítmica de un paisaje sonoro cuya generación se activará con la presencia del visitante, tanto en el espacio físico (expositivo) como en el virtual (red). Este dispositivo, presentado en formato de instalación sonora, hace perceptible los diálogos entre dispositivos; sonoriza los procesos e interacciones entre máquinas que, aún ocurriendo de forma continuada en nuestros entornos cotidianos, escapan a nuestros sentidos.',
      },
    ],
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/niss-02.jpg',
        alt: 'Full-shot of NISS installation',
      },
    ],
  },
  { // 8
    id: 8,
    category: SECTION.SOUND_WORKS,
    navTitle: 'Kein_Spieler',
    pathNav: '/projects/kein-spieler',
    title: 'Kein Spieler',
    details: {
      media: 'Sound Performnace',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.SOUNDCLOUD,
      url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1097240362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    description: [
      {
        language: 'en',
        value: 'Old-fashioned electronic audio media players recovered and rised as instruments: sound producers. This old-new instruments are machines freed form their data storge media. Unheard to the humans, they speak trough electomacnetic waves, wich are captured and retrieved into our perceptive realm using coils.',
      },
      {
        language: 'es',
        value: 'Antiguos reproductores electrónicos de audio recuperados y elevados como instrumentos: productores de sonido. Estos nuevos instrumentos son máquinas liberadas de sus soportes de almacenamiento de datos. Inaudibles para los humanos, hablan y cantan con ondas electromagnéticas que son capturadas y adaptadas a nuesto plano perceptivo mediante bobinas.',
      }
    ],
    media: [],
  },
  { // 9
    id: 9,
    category: SECTION.SOUND_WORKS,
    navTitle: 'Rumble_Chain',
    pathNav: '/projects/rumble-chain',
    title: 'Rumble Chain',
    details: {
      media: 'Software',
      year: '2022',
    },
    featured: {
      type: MEDIA_TYPE.SOUNDCLOUD,
      url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1420540456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    description: [
      {
        language: 'en',
        value: 'RumbleChain is a digital instrument that synthesises industrial soundscapes based on the sonification of records or blocks on the Ethereum network. Instead of manipulating sound parameters, as would be the case with a conventional synthesiser, here the performer controls the acquisition of data of a blockchain structure through an intuitive drift or exploration of the virtual space generated by Ethereum blockchain.',
      },
      {
        language: 'en',
        value: 'It could be defined as a data instrument contextualised in data music, an interdisciplinary practice located within the field of sound art that emerges in reaction to the era of massive data and the heyday of ICT. This practice is based on the use of data as source (material and conceptual) for artistic production and the transfer of both methodologies and concepts from the fields of data science to experimental music composition.',
      },
      {
        language: 'es',
        value: 'RumbleChain es un instrumento digital que sintetiza paisajes sonoros industriales a partir de la sonificación de registros o bloques en la red Ethereum. La intérprete, en vez de manipular parámetros del sonido, como ocurriría con un sintetizador convencional, controla la adquisición de los datos mediante una deriva o exploración intuitiva del espacio virtual que genera la cadena de bloques.',
      },
      {
        language: 'es',
        value: 'Se podría definir como un instrumento de datos contextualizado en el data music, una práctica interdisciplinar (ACT) dentro del ámbito del arte sonoro que surge en reacción a la era de los datos masivos y el apogeo de las TIC. Esta práctica se basa en el uso del dato como material para la producción artística y en la transferencia tanto de metodologías como conceptos provenientes de los campos de la ciencia de datos para la composición de experiencias sonoras artísticas experimentales.',
      },
    ],
    media: [
    ],
  },
  { // 10
    id: 10,
    category: SECTION.HIDDEN,
    navTitle: 'Some_Surveilled_Places',
    pathNav: '/projects/some-surveilled-places',
    title: 'Some Surveilled Places',
    details: {
      media: 'Digital Image',
      year: '––',
    },
    featured: {},
    description: [],
    media: [],
  },
  { // 11
    id: 11,
    category: SECTION.SILENT_WORKS,
    navTitle: 'Ruidos_Invocados',
    pathNav: '/projects/ruidos-invocados',
    title: 'Ruidos Invocados',
    details: {
      media: 'Digital Print',
      year: '2017',
    },
    featured: {},
    description: [],
    media: [],
  },
  { // 12
    id: 12,
    category: SECTION.SILENT_WORKS,
    navTitle: 'Espacios_Generados',
    pathNav: '/projects/espacios-generados',
    title: 'Espacios Generados',
    details: {},
    featured: {},
    description: [],
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

