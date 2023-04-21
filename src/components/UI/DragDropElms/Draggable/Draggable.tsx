import { FC, PropsWithChildren } from "react";
import { useDraggable } from "@dnd-kit/core/dist/hooks";

const Draggable: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => {
  const { setNodeRef, transform, attributes, listeners } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x + position.x}px, ${
          transform.y + position.y
        }px, 0)`,
      }
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      };
  return <div>{children}</div>;
};

export default Draggable;
