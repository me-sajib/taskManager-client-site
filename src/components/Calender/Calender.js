import React, { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex justify-center container pt-12">
      <Calendar value={value} onChange={onChange} />
    </div>
  );
};

export default Calender;
