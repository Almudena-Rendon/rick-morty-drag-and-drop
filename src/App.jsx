import React, { useState } from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import { Beth, Jerry, Morty, Rick, Verano } from './utils/icons'
import Column from './components/Column'
import './index.css'

function App() {
  const initialColumns = {
    first: {
      id: 'first',
      list: [
        { id: '1', content: <img src={Morty} alt="Morty" /> },
        { id: '5', content: <img src={Rick} alt="Rick" /> },
        { id: '2', content: <img src={Verano} alt="Verano" /> },
        { id: '3', content: <img src={Jerry} alt="Jerry" /> },
        { id: '4', content: <img src={Beth} alt="Beth" /> },
      ],
    },
    second: {
      id: 'second',
      list: [],
    },
  }

  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    if (start === end) {
      const newList = start.list.filter((_, idx) => idx !== source.index)
      newList.splice(destination.index, 0, start.list[source.index])

      const newCol = {
        id: start.id,
        list: newList,
      }

      setColumns((state) => ({ ...state, [newCol.id]: newCol }))
      return null
    } else {
      const newStartList = start.list.filter((_, idx) => idx !== source.index)

      const newStartCol = {
        id: start.id,
        list: newStartList,
      }

      const newEndList = end.list
      newEndList.splice(destination.index, 0, start.list[source.index])

      const newEndCol = {
        id: end.id,
        list: newEndList,
      }

      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }))
      return null
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <nav className="nav-logo">
        <img src="logo-almu-codes.svg" className="logo" alt="logo" />
      </nav>
      <div className="styled-columns">
        {Object.values(columns).map((col) => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
