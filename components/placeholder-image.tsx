import React from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
}

export function PlaceholderImage({ width, height, text }: PlaceholderImageProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#cccccc" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#333333"
        fontSize="16"
        fontFamily="Arial, sans-serif"
      >
        {text || `${width}x${height}`}
      </text>
    </svg>
  )
}

