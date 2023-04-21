import { FC, PropsWithChildren } from 'react';
import { useDroppable } from '@dnd-kit/core';

const Droppable: FC<PropsWithChildren<{id: string}>> = ({id, children}) => {
  const {isOver, setNodeRef} = useDroppable({
    id,
  })
  return <div className='droppable-container' ref={setNodeRef}>{children}</div>
}

export default Droppable