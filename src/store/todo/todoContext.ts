import { createContext, type Dispatch } from "react";
import type { TodoActionType, TodoStateType } from "./todoInterfase";

export const TodoContext = createContext<TodoStateType>([]);

export const TodoDispatchContext = createContext<Dispatch<TodoActionType>>(() => {});