import React, { useState } from 'react'
import './DragContainer.css'
import { motion, useMotionValue, useTransform } from 'framer-motion'

type Props = {}

const maxHeight = 300
const previewHeight = 48
const openOffset = 0
const initialY = previewHeight - maxHeight

export const DragContainer = (p: Props) => {
  const [state, setState] = useState<'open' | 'closed' | 'drag'>('closed')
  const y = useMotionValue(initialY)
  const opacity = useTransform(y, [initialY, 0], [0.5, 1])
  const margin = useTransform(y, [initialY, 0], [10, 0])
  const borderRadius = useTransform(y, [initialY, 0], [5, 0])

  const variants = {
    closed: {
      y: initialY,
    },
    drag: {},
    open: { y: openOffset },
  }

  return (
    <div className="container">
      <motion.div
        className="drawer"
        drag="y"
        dragConstraints={{
          top: initialY,
          bottom: state !== 'open' ? maxHeight : openOffset,
        }}
        onDragEnd={(ev, info) => {
          if (info.velocity.y > 5) {
            setState('open')
            return
          } else if (info.velocity.y < -5) {
            setState('closed')
            return
          }

          setState('drag') // Forces re-evaluation of state
          if (info.point.y > initialY + maxHeight / 4) {
            setState('open')
          } else {
            setState('closed')
          }
        }}
        variants={variants}
        style={{
          y,
          opacity,
          borderRadius,
          marginLeft: margin,
          marginRight: margin,
        }}
        animate={state}
      >
        <img
          className="content"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y"
          alt="krump"
        />

        <div className="handle">drag me</div>
        <div className="label">
          {state} {y.get()}
        </div>
      </motion.div>
    </div>
  )
}
