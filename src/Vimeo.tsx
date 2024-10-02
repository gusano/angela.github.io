interface VimeoProps {
  id: string
}

function Vimeo({ id }: VimeoProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="border-none"
        src={`https://player.vimeo.com/video/${id}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default Vimeo
