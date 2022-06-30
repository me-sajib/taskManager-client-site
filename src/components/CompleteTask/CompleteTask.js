import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const CompleteTask = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://tranquil-peak-12585.herokuapp.com/completeTask")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      });
  }, [task]);
  if (loading) return <Spinner />;

  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="my-4">
          <h2 className="text-6xl text-secondary font-bold mb-6">
            Complete Task
          </h2>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              {task.map((task) => (
                <p key={task._id}>
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="checkbox-sm mr-2"
                  />

                  <span className="text-3xl"> {task.task}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
