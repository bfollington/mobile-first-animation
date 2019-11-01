import React from 'react'
import logo from './logo.svg'
import './App.css'
import { DragContainer } from './DragContainer'
import { HorizontalScrollList } from './HorizontalScrollList'

const items = [
  {
    title: 'First item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y',
  },
  {
    title: 'Second item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y',
  },
  {
    title: 'Third item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y',
  },
  {
    title: 'Fourth item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y',
  },
  {
    title: 'Fifth item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y',
  },
  {
    title: 'Sixth item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujZCExt_1x9mXOn9oddCbXRpFQB2RLtoz2sCBaRdIeRHgRV4y',
  },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <DragContainer />

      <HorizontalScrollList items={items} />
    </div>
  )
}

export default App
