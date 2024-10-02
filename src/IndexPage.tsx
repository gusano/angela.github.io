import { Link, useParams } from 'react-router-dom'
import type { Project } from './types'
import { projects } from './projects'

function IndexPage() {
  const { category } = useParams()

  const thumbs: string[] = Object.values(import.meta.glob('@assets/images/*-thumb*jpg', { eager: true, query: '?url', import: 'default' }))

  const filteredProjects = (typeof category !== 'undefined')
    ? projects.filter((project: Project) => project.category === category)
    : projects

  return (
    <main style={{ fontFamily: 'f' }}>
      <div className="main-grid m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        {filteredProjects.map((project: Project) => (
          <Link
            key={project.key}
            to={`/${project.category}/${project.key}`}
            className="border border-solid border-gray-300 shadow-sm no-underline hover:no-underline !text-black"
          >
            <img src={thumbs.find((t: string) => t.includes(project.media))} className="w-full" />
            <div className="border-t-[3px] flex items-center text-lg lg:text-lg xl:text-[1.25vw] 2xl:text-[1.25vw] px-3 py-2 uppercase tracking-wider">
              {project.title}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default IndexPage
