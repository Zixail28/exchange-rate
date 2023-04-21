import { FC, PropsWithChildren, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks/hooks";
import { exchangeRateSlice } from "../../../app/redux/exchangeRateSlice/exchangeRateSlice";

const DnDMyContext: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const position = useAppSelector(
    (state) => state.exchangeRateReducer.position
  );
  const setPosition = exchangeRateSlice.actions.setPosition;
  const dispatch = useAppDispatch();

  const handleDragEnd = (event: any) => {
    const { delta } = event;
    dispatch(setPosition({ x: position.x + delta.x, y: position.y + delta.y }));
  };

  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};

export default DnDMyContext;
