interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

export function PlaceholderImage({ width, height, text = "Placeholder Image", className = "" }: PlaceholderImageProps) {
  const aspectRatio = height / width

  return (
    <div
      className={`bg-muted flex items-center justify-center overflow-hidden ${className}`}
      style={{
        aspectRatio: `${width} / ${height}`,
        width: "100%",
      }}
    >
      <div className="text-center p-4">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-2 text-muted-foreground"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <p className="text-xs text-muted-foreground">{text}</p>
        <p className="text-xs text-muted-foreground">
          {width}×{height}
        </p>
      </div>
    </div>
  )
}

