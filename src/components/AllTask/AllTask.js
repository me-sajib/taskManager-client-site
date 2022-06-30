import React from "react";
import { useQuery } from "react-query";
import Task from "../AllTask/Task";

const AllTask = () => {
  const { data: tasks, isLoading } = useQuery("tasks", () =>
    fetch("http://localhost:5000/task").then((res) => res.json())
  );
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container  flex justify-center">
      <div className="justify-start">
        <div className="my-4">
          <h2 className="text-6xl text-secondary font-bold mt-12">All Task</h2>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              {tasks.map((task, index) => (
                <Task task={task} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end of card */}
    </div>
  );
};

export default AllTask;
