export const motion = {
  durations: { fast: 0.15, medium: 0.3, slow: 0.6 },
  easing: {
    out: [0.16, 1, 0.3, 1],
    in: [0.7, 0, 0.84, 0],
    inOut: [0.83, 0, 0.17, 1],
  },
  spring: {
    stiff: { type: 'spring', stiffness: 240, damping: 24 },
    medium: { type: 'spring', stiffness: 180, damping: 28 },
    soft: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

export const z = { diagram: 10, overlay: 20, nav: 30, tooltip: 40, modal: 50 }
export const layout = { maxWidth: '72rem', gutter: '1.5rem' }
