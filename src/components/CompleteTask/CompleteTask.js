import React, { useEffect, useState } from "react";

const CompleteTask = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/completeTask")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      });
  }, [task]);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="my-4">
          <h2 className="text-6xl text-secondary font-bold mb-6">
            Complete Task
          </h2>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              {task.map((task, index) => (
                <p>
                  <input type="checkbox" checked class="checkbox-sm mr-2" />

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
