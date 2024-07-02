import React from "react"
import Item from "./Item"
import { Droppable } from "react-beautiful-dnd"
import "../index.css"

const Column = ({ col }) => {
  return (
    <Droppable droppableId={col.id} direction='horizontal'>
      {(provided) => (
        <div className="styled-column">
          <div
            className="styled-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {col.list.map((item, index) => (
              <Item key={item.id} content={item.content} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default Column

