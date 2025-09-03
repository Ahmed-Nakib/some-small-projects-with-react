export interface ITodo {
    id: number;
    title: string;
    status: "Done" | "Doing";
}

export type TodoStateType = ITodo[];

export type TodoActionType =
    | {type: TODO_CASE.ADD_TODO, payload: {title: string}}
    | {type: TODO_CASE.UPDATE_TODO, payload: {id: number, title: string}}
    | {type: TODO_CASE.STATUS_CHANGE, payload: {id: number}}
    | {type: TODO_CASE.DELETE_TODO, payload: {id: number}}

export enum TODO_CASE {
    ADD_TODO = "ADD_TODO",
    UPDATE_TODO = "UPDATE_TODO",
    STATUS_CHANGE = "STATUS_CHANGE",
    DELETE_TODO = "DELETE_TODO"
}