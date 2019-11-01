import React from 'react'
import './HorizontalScrollList.css'
import { motion } from 'framer-motion'

type ListItem = {
  title: string
  image: string
}

type Props = {
  items: ListItem[]
}

const ScrollItem = ({ title, src }: { title: string; src: string }) => {
  return (
    <li className="scroll-item">
      <img src={src} alt={title} />
      <label>{title}</label>
    </li>
  )
}

export const HorizontalScrollList = ({ items }: Props) => {
  return (
    <div className="scroll-list-container">
      <motion.ul
        drag="x"
        dragConstraints={{
          right: 0,
          left: items.length * -205 + window.innerWidth,
        }}
        className="scroll-list"
      >
        {items.map(i => (
          <ScrollItem key={i.image} title={i.title} src={i.image} />
        ))}
      </motion.ul>
    </div>
  )
}
