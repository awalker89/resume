'use client'

import { useEffect, useRef } from 'react'

export function ArchitectureBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to parent container
    const updateSize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const width = parent.offsetWidth
      const height = parent.offsetHeight
      canvas.width = width
      canvas.height = height

      // Clear canvas
      ctx.fillStyle = '#fafafa'
      ctx.fillRect(0, 0, width, height)

      // Draw dotted connection lines and architectural elements
      ctx.strokeStyle = '#000000'
      ctx.setLineDash([6, 6])
      ctx.lineWidth = 1.5
      ctx.globalAlpha = 0.15

      // Vertical lines (system layers)
      const verticalSpacing = 120
      for (let x = verticalSpacing; x < width; x += verticalSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Horizontal lines (flow sections)
      const horizontalSpacing = 200
      for (let y = horizontalSpacing; y < height; y += horizontalSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw connection points (nodes)
      ctx.setLineDash([])
      ctx.fillStyle = '#000000'
      ctx.globalAlpha = 0.3

      for (let x = verticalSpacing; x < width; x += verticalSpacing) {
        for (let y = horizontalSpacing; y < height; y += horizontalSpacing) {
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Draw diagonal connection paths for visual interest
      ctx.setLineDash([4, 4])
      ctx.globalAlpha = 0.08
      ctx.strokeStyle = '#000000'
      ctx.lineWidth = 1

      // Top-left to bottom-right diagonals
      for (let offset = -height; offset < width; offset += 300) {
        ctx.beginPath()
        ctx.moveTo(offset, 0)
        ctx.lineTo(offset + height, height)
        ctx.stroke()
      }

      // Bottom-left to top-right diagonals
      for (let offset = 0; offset < width + height; offset += 300) {
        ctx.beginPath()
        ctx.moveTo(offset, 0)
        ctx.lineTo(offset - height, height)
        ctx.stroke()
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
