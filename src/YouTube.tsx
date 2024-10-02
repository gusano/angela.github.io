interface YouTubeProps {
  id: string
}

function YouTube({ id }: YouTubeProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="border-none"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default YouTube
