import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { RowsPhotoAlbum } from 'react-photo-album'
import type { Photo } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import type { Project } from './types'
import 'react-photo-album/rows.css'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import { projects } from './projects'
import Video from './Video'

interface Md {
  default: string
}

function Project() {
  const { name } = useParams()
  const thumbsRef = useRef(null)

  const [index, setIndex] = useState(-1)
  const [content, setContent] = useState('')

  const project = projects.find((p: Project) => p.key === name)

  if (typeof project === 'undefined') {
    const e = new Error('Not found')
    throw e
  }

  // const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]
  const width = 1024
  const height = 780

  /**
   * @TODO use a list of all images with their width/height/etc... instead of this
   */
  const allImages: string[] = Object.values(
    import.meta.glob(
      `@assets/images/*/*.{jpg,jpeg,JPG,png,webp}`,
      { eager: true, query: '?url', import: 'default' },
    )
  )

  const images = allImages
    .filter((url: string) => url.includes(project.media))
    .map((url: string) => ({
      src: url,
      alt: '',
      width,
      height,
      // srcSet: breakpoints.map((breakpoint) => ({
      //   src: Link(asset, breakpoint),
      //   width: breakpoint,
      //   height: Math.round((height / width) * breakpoint),
      // })),
    }) as Photo)

  // const contents = Object.values(
  //   import.meta.glob('./assets/md/*.md', { query: 'raw', import: 'default' })
  // )
  async function loadMD() {
    if (!project) return
    const md: Md = await import(`./assets/md/${project.content}.md?raw`)
    setContent(md.default)
  }
  loadMD()

  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
    return () => {}
  }, [])

  return (
    <article className="mx-auto px-4 pt-4 sm:px-8 xl:px-12">
      <header className="max-w-screen-lg mx-auto mb-4">
        <div
          className="text-[3rem] sm:text-[4rem] text-black uppercase mr-4"
          style={{ fontFamily: 'fb' }}
        >
          {project.title}
        </div>
        <div className="text-3xl pb-6 italic font-['Afacad Flux'] font-light uppercase whitespace-pre-line">
          {project.position}
        </div>
      </header>

      {project.videoFirst ? (
        <div className="max-w-screen-md mx-auto prose lg:prose-lg mt-12">
          <Video project={project} />
        </div>
      ) : null}

      <div className="max-w-screen-lg mx-auto">
        <RowsPhotoAlbum
          photos={images}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
      </div>
      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        // on={{
        //   // @ts-expect-error wtf
        //   enterFullscreen: () => thumbsRef.current?.hide(),
        //   // @ts-expect-error wtf
        //   exitFullscreen: () => thumbsRef.current?.show(),
        // }}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
        thumbnails={{
          ref: thumbsRef,
          border: 0,
          padding: 0,
          gap: 6,
        }}
      />

      <div className="max-w-screen-md mx-auto prose lg:prose-lg mt-12">
        <Markdown>{content}</Markdown>
        {!project.videoFirst ? (
          <Video project={project} />
        ) : null}
      </div>
    </article>
  )
}

export default Project
