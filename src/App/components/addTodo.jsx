import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch=useDispatch()
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-md shadow-lg"
    >
      <input
        type="text"
        placeholder="Enter a Todo ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
