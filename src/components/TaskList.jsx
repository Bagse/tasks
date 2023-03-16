import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {

  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center pt-3">No hay tareas aún papu</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-3 justify-center items-center">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
