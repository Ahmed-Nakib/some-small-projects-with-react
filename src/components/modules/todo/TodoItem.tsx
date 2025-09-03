
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TODO_CASE, type ITodo } from "../../../store/todo/todoInterfase";
import { useContext, useState } from "react";
import { TodoDispatchContext } from "../../../store/todo/todoContext";

type propType ={
                 todo:ITodo
               }

export default function TodoItem({todo}:propType ) {

    const dispatch = useContext(TodoDispatchContext)

    const [isEdit, setIsEdit] = useState(false);

    const [text, setText] = useState(todo.title);

    const handleClick = () => {
        setIsEdit(false)
               dispatch({
        type: TODO_CASE.UPDATE_TODO,
        payload: {
            id: todo.id,
            title: text
        }
       })
    }

    const deleteTodo = (id: number) => {
        dispatch({
                    type: TODO_CASE.DELETE_TODO,
                    payload: {
                        id: id
                    }
                })
    }
    const changeTodo = (id: number) => {
        dispatch({
        type: TODO_CASE.STATUS_CHANGE,
        payload: {
            id
        }
       })
    }
   
     
    return (
                                <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2">{todo.id}</td>
                            <td className="px-3 py-2">
                            {
                                isEdit
                                ?
                                     <div className="flex">
                                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="border rounded-sm border-gray-300 w-full px-2" />
                                    <button onClick={handleClick} className="px-2 rounded-sm cursor-pointer h-auto bg-gray-300 ml-2">
                                        <MdDone />
                                    </button>
                                </div> 
                                :<span>{todo.title}</span>
                            }

                                
                            </td>

                            <td className="px-3 py-2 w-[70px]">
                                <span className={`bg-${todo.status === "Done" ? "blue" : "red"}-600 px-2 py-1 rounded-sm text-white text-xs font-medium`}>{todo.status}</span>
                            </td>
                            <td className="px-3 py-2 w-[60px] ">
                                <div className=" flex gap-x-2">
                                    <button onClick={() => setIsEdit(true)} className="w-8 h-6 text-sm flex justify-center items-center bg-green-600 text-white rounded-sm cursor-pointer">
                                        <FaRegEdit />
                                    </button>
                                    <button onClick={() => changeTodo(todo.id)} className="w-8 h-6 text-sm flex justify-center items-center bg-blue-600 text-white rounded-sm cursor-pointer">
                                        <IoEyeOff />
                                    </button>
                                    <button onClick={() => deleteTodo(todo.id)} className="w-8 h-6 text-sm flex justify-center items-center bg-red-600 text-white rounded-sm cursor-pointer">
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </td>
                        </tr>
    )
}

