import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import '../index.css'

const Item = ({ content, index }) => {
  return (
    <Draggable draggableId={content.props.src} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="draggable-item"
        >
          {content}
        </div>
      )}
    </Draggable>
  )
}

export default Item
