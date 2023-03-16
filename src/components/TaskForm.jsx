import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">CREA TU TAREA</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-50 p-3 w-full mb-2 rounded-md"
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          name=""
          id=""
          rows="2"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-50 p-3 w-full mb-2 rounded-md"
          value={description}
        ></textarea>
        <button className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-400 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}
