import { FC, PropsWithChildren } from "react";
import { useDraggable } from "@dnd-kit/core";
import { exchangeRateSlice } from "../../../app/redux/exchangeRateSlice/exchangeRateSlice";
import { useAppSelector, useAppDispatch } from "../../../app/redux/hooks/hooks";

const Draggable: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => {
  const position = useAppSelector(
    (state) => state.exchangeRateReducer.position
  );
  const setPosition = exchangeRateSlice.actions.setPosition;
  const dispatch = useAppDispatch();

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
  return (
    <div className="w-max" style={style} ref={setNodeRef}>
      <div className="handle h-5 bg-gray-900 rounded-t-lg" {...attributes} {...listeners}></div>
      {children}
    </div>
  );
};

export default Draggable;
