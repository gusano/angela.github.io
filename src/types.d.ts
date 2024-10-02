export interface Project {
  key: string
  title: string
  position: string
  category: string
  media: string
  content: React.ReactNode
  vimeo?: string
  youtube?: string
  videoFirst?: boolean
}
