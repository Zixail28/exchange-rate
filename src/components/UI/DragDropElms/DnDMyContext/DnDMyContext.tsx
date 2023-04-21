import { FC, PropsWithChildren, useState } from "react";
import { DndContext } from "@dnd-kit/core";

type positionType = {
  x: number;
  y: number;
};

const DnDMyContext: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [position, setPosition] = useState<positionType>({
    x: 0,
    y: 0,
  });
  const handleDragEnd = (event: any) => {
    console.log(event);
    const { delta } = event;
    setPosition({ x: delta.x, y: delta.y });
  };
  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};

export default DnDMyContext;
