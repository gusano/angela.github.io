import type { Project } from './types'

/**
 * key:       unique key
 * title:     project title on main page and project page
 * position:  position text (can use \n for newlines)
 * media:     images folder name (`assets/images/`) AND thumb name, if media is 'foobar' then `foobar-thumb.jpg`
 * content:   filename for project text content on project page (`assets/md/` folder)
 * youtube:   YouTube video id (optional)
 * vimeo:     Vimeo video id (optional)
 * videoFirst: Puts the video link first at the top (instead of bottom)
 */

export const projects: Project[] = [
  {
    key: 'faust',
    category: 'theater',
    title: 'Goethe, El Susurro Del Diablo',
    position: 'Art Director + Costume Designer + Performer',
    media: 'faust',
    content: 'faust',
  }, {
    key: 'the-hive-la-colmena',
    category: 'theater',
    title: 'The Hive + La Colmena',
    position: 'Art Director + Stage Designer',
    media: 'colmena',
    content: 'colmena',
    youtube: 'kzCxAPGRLIE',
  }, {
    key: 'waiting-for-the-barbarians',
    category: 'film',
    title: 'Waiting For The Barbarians',
    position: 'Assistant to Production Designer\nSet Decorator Crispian Sallis',
    media: 'barbarians',
    content: 'barbarians',
    youtube: 'ceL56uGSOIc',
  }, {
    key: 'exodo',
    category: 'film',
    title: 'Éxodo',
    position: 'Production Designer',
    media: 'exodo',
    content: 'exodo',
  }, {
    key: 'la-pesca-del-atun-blanco',
    category: 'film',
    title: 'La Pesca Del Atun Blanco',
    position: 'Production Designer',
    media: 'atun',
    content: 'atun',
    youtube: '6fvAk3JLXy8',
  }, {
    key: 'naomis-reise',
    category: 'film',
    title: 'Naomis Reise',
    position: 'Production Designer',
    media: 'naomi',
    content: 'naomi',
  }, {
    key: 'continuity',
    category: 'film',
    title: 'Continuity',
    position: 'Assistant Production Designer',
    media: 'continuity',
    content: 'continuity',
  }, {
    key: 'sofia-y-el-terco',
    category: 'film',
    title: 'Sofia Y El Terco',
    position: 'Production Designer',
    media: 'sofia',
    content: 'sofia',
    vimeo: '39093793',
  }, {
    key: 'dos-cables',
    category: 'theater',
    title: 'Dos Cables',
    position: 'Art direction + Scenography',
    media: 'cables',
    content: 'cables',
    youtube: 'S3rEql9H-Ss',
  }, {
    key: 'cinehuerta',
    category: 'theater',
    title: 'Cinehuerta',
    position: 'Direction + Art Direction',
    media: 'cinehuerta',
    content: 'cinehuerta',
    vimeo: '86473528',
  }, {
    key: 'nebenzimmer',
    category: 'film',
    title: 'Nebenzimmer',
    position: 'Production Designer',
    media: 'nebenzimmer',
    content: 'nebenzimmer',
  }, {
    key: 'anonimata',
    category: 'film',
    title: 'Anonimata',
    position: 'Production Designer',
    media: 'anonimata',
    content: 'anonimata',
  }, {
    key: 'pantaleon',
    category: 'film',
    title: 'Pantaleón',
    position: 'Production Designer',
    media: 'pantaleon',
    content: 'pantaleon',
    youtube: '6X4LP0aAVZ0',
  }, {
    key: 'concerts',
    category: 'theater',
    title: 'Concerts',
    position: 'Art Director',
    media: 'conciertos',
    content: 'conciertos',
    youtube: 'F3jkLCblaLg',
  }, {
    key: 'las-listas',
    category: 'theater',
    title: 'Las Listas',
    position: 'Art Direction + Costume Design',
    media: 'listas',
    content: 'listas',
    youtube: '94VMZGBjqko',
  }, {
    key: 'viste-a-cristina-el-7-de-marzo',
    category: 'film',
    title: '¿viste a cristina el 7 de marzo?',
    position: 'Production Designer',
    media: 'cristina',
    content: 'cristina',
    vimeo: '74318975',
  }, {
    key: 'veeduria',
    category: 'film',
    title: 'Veeduría',
    position: 'Art Director',
    media: 'veeduria',
    content: 'veeduria',
    vimeo: '57240219',
  }, {
    key: 'el-nino-y-los-sortilegios',
    category: 'theater',
    title: 'The Child And The Spells',
    position: 'Development and manufacture of scenographic elements for the opera',
    media: 'sortilegios',
    content: 'sortilegios',
  }, {
    key: 'burn-notice-the-fall-of-sam-axe',
    category: 'film',
    title: 'Burn Notice: The Fall of Sam Axe',
    position: 'Assistant to the Production Designer Mark Harrington',
    media: 'axe',
    content: 'axe',
    youtube: 'dWXxgpyIm2I',
  }, {
    key: 'en-tus-manos',
    category: 'film',
    title: 'En Tus Manos',
    position: 'Production Design',
    media: 'manos',
    content: 'manos',
    vimeo: '31798500',
    videoFirst: true,
  }, {
    key: 'orfeo-and-euridice-at-cielo-drive',
    category: 'theater',
    title: 'Orfeo & Euridice at Cielo Drive 10050',
    position: 'Stage design, costume design, props',
    media: 'orfeo',
    content: 'orfeo',
  }, {
    key: 'songs-for-silvia',
    category: 'film',
    title: 'Songs For Silvia',
    position: 'Art Director',
    media: 'songs',
    content: 'songs',
  }, {
    key: 'la-milagrosa',
    category: 'film',
    title: 'La Milagrosa',
    position: 'Prop Master',
    media: 'milagrosa',
    content: 'milagrosa',
    youtube: 'ZEqW2GkFtyU',
  }, {
    key: 'la-cerca',
    category: 'film',
    title: 'La Cerca',
    position: 'Set Decorator + Character Designer',
    media: 'cerca',
    content: 'cerca',
  },
]
