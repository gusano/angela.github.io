import type { Project } from './types'
import Vimeo from './Vimeo'
import Youtube from './YouTube'

interface VideoProps {
  project: Project
}

function Video({ project }: VideoProps) {
  if (typeof project.vimeo !== undefined && !!project.vimeo?.length) {
    return <Vimeo id={project.vimeo} />
  }
  if (typeof project.youtube !== undefined && !!project.youtube?.length) {
    return <Youtube id={project.youtube} />
  }
  return null
}

export default Video
