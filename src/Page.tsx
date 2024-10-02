import { useState } from 'react'
import Markdown from "react-markdown"

interface PageProps {
  name: string
}

function Page({ name }: PageProps) {
  const [content, setContent] = useState('')

  async function init() {
    const md = await import(`./assets/md/${name}.md?raw`)
    setContent(md.default)
  }

  init()

  return (
    <article className="mx-auto px-4 pt-4 sm:px-8 xl:px-12">
      <Markdown>{content}</Markdown>
    </article>
  )
}

export default Page
