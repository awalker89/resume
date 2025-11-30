import { AnimatePresence, motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  active: boolean
  id: string
}
export function ViewportTransition({ active, id, children }: Props) {
  return (
    <AnimatePresence mode="popLayout">
      {active && (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
